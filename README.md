# Aradh Suresh

SCADA and industrial control systems, fifteen years plant-side. I build the software where
control systems meet cloud, and I publish what I measure at **[aradhs.com](https://aradhs.com)**.

Ignition · MQTT / Sparkplug B · OPC UA · Node-RED · historians · OT infrastructure

---

### Labs

Test builds where the point is the measurement, not the demo.

| | |
|---|---|
| **[ignition-fleet](https://github.com/aradhsai/ignition-fleet)** | Eleven Ignition gateways generated from YAML. Empty cluster to running fleet in **134 seconds**; a destroyed site rebuilt from version control in **60**. No hand-written config. |
| **[sparkplug-lab](https://github.com/aradhsai/sparkplug-lab)** | Node-RED edge nodes into Ignition 8.3 over Sparkplug B, scaled to **1,500 nodes**. Report-by-exception cut wire traffic **2.6×**, device death detected in **250 ms**, and three genuine interoperability bugs surfaced between two mature implementations of the same spec. |
| **[pump-uns-lab](https://github.com/aradhsai/pump-uns-lab)** | One pump edge to a grounded operator copilot. Found that Brick has no point classes for vibration, bearings or winding temperature — **6 of 29 tags could not be typed**, and four of those six were the condition-monitoring points that predict failure. |
| **[scada-zero](https://github.com/aradhsai/scada-zero)** | A complete SCADA stack that costs nothing to license: FUXA + Node-RED + Mosquitto, HMI generated from code. |

---

### Upstream

[**FUXA #2478**](https://github.com/frangoteam/FUXA/pull/2478) — a one-line null guard in the client
script service. `getClientAccess()` can return `null`, and the call site dereferenced it unguarded,
which aborted the HMI load before any gauge bound while the SVG still rendered — so it looked like a
binding problem rather than an exception. Found the hard way while building `scada-zero`.

---

### Writing

<!-- posts:start -->
- [United Manufacturing Hub, explained for the person who has to maintain it](https://aradhs.com/blog/what-is-united-manufacturing-hub) <sub>3 Aug 2026</sub>
- [Industrial AI doesn't need better models. It needs DevOps and DataOps.](https://aradhs.com/blog/devops-dataops-industrial-ai) <sub>2 Aug 2026</sub>
- [I gave Claude a Unified Namespace. It knew everything and understood nothing.](https://aradhs.com/lab/unified-namespace-mcp) <sub>2 Aug 2026 · lab</sub>
- [Does your plant need a whole layer just for context? I tested HighByte to find out](https://aradhs.com/lab/highbyte-dataops) <sub>1 Aug 2026 · lab</sub>
- [I gave Claude a live Modbus device](https://aradhs.com/lab/modbus-copilot) <sub>31 Jul 2026 · lab</sub>
<!-- posts:end -->

---

### Elsewhere

[aradhs.com](https://aradhs.com) · [RSS](https://aradhs.com/feed.xml)

<sub>The Writing section above rebuilds itself daily from the site's feed — see <a href="scripts/update-posts.mjs">scripts/update-posts.mjs</a>.</sub>
