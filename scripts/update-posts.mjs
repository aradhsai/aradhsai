#!/usr/bin/env node
/**
 * Rewrites the Writing section of README.md from the aradhs.com RSS feed.
 *
 * A profile that lists "recent" work from eight months ago is worse than one
 * that lists none, so this runs on a schedule rather than relying on memory.
 * No dependencies — Node 18+ has fetch, and the feed is small enough that a
 * regex reader beats pulling in an XML parser.
 */
import { readFile, writeFile } from "node:fs/promises";

const FEED = "https://aradhs.com/feed.xml";
const README = "README.md";
const START = "<!-- posts:start -->";
const END = "<!-- posts:end -->";
const COUNT = 5;

const decode = (s) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .trim();

const tag = (block, name) => {
  const m = block.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`));
  return m ? decode(m[1]) : "";
};

const items = (xml) =>
  [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => ({
    title: tag(m[1], "title"),
    link: tag(m[1], "link"),
    date: tag(m[1], "pubDate"),
    section: tag(m[1], "category") || "",
  }));

const fmt = (d) => {
  const t = new Date(d);
  return Number.isNaN(t.valueOf())
    ? ""
    : t.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};

const res = await fetch(FEED, { headers: { "user-agent": "aradhsai-profile" } });
if (!res.ok) {
  console.error(`feed fetch failed: ${res.status}`);
  process.exit(1);
}

const posts = items(await res.text()).slice(0, COUNT);
if (!posts.length) {
  // Never blank the section on an empty parse — leave whatever is there.
  console.error("no items parsed; leaving README untouched");
  process.exit(1);
}

const lines = posts.map((p) => {
  const label = p.section === "Lab" ? " · lab" : "";
  return `- [${p.title}](${p.link}) <sub>${fmt(p.date)}${label}</sub>`;
});

const readme = await readFile(README, "utf8");
const a = readme.indexOf(START);
const b = readme.indexOf(END);
if (a === -1 || b === -1) {
  console.error("markers missing from README");
  process.exit(1);
}

const next =
  readme.slice(0, a + START.length) + "\n" + lines.join("\n") + "\n" + readme.slice(b);

if (next === readme) {
  console.log("no change");
} else {
  await writeFile(README, next);
  console.log(`updated with ${posts.length} posts`);
}
