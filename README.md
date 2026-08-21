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
- [Your timestamps came from two different clocks](https://aradhs.com/blog/what-happened-first) <sub>20 Aug 2026</sub>
- [Measuring which clock stamped each row, on two paths into the same historian](https://aradhs.com/lab/whose-clock-stamped-the-row) <sub>20 Aug 2026 · lab</sub>
- [Your historian believes whatever it is told](https://aradhs.com/blog/historian-believes-what-its-told) <sub>19 Aug 2026</sub>
- [Four paths into one historian, and what each one remembers about where the data came from](https://aradhs.com/lab/provenance-across-a-plant) <sub>19 Aug 2026 · lab</sub>
- [The plant needs to agree what time it is](https://aradhs.com/blog/the-plant-needs-to-agree-what-time-it-is) <sub>18 Aug 2026</sub>
<!-- posts:end -->

---

### Elsewhere

[aradhs.com](https://aradhs.com) · [RSS](https://aradhs.com/feed.xml)

<sub>The Writing section above rebuilds itself daily from the site's feed — see <a href="scripts/update-posts.mjs">scripts/update-posts.mjs</a>.</sub>
