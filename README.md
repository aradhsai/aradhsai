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

### Writing

<!-- posts:start -->
- [Every tag needs one owner](https://aradhs.com/blog/single-source-of-truth-scada) <sub>30 Jul 2026</sub>
- [A complete SCADA system for nothing, and what that says about where the money was](https://aradhs.com/lab/scada-zero) <sub>30 Jul 2026 · lab</sub>
- [The plant should still let you in when the link is down](https://aradhs.com/blog/ot-single-sign-on-offline) <sub>29 Jul 2026</sub>
- [I never typed a single tag name: the SCADA built its own database](https://aradhs.com/lab/sparkplug-b-node-red) <sub>29 Jul 2026 · lab</sub>
- [You don't have a backup problem. You have a reproducibility problem.](https://aradhs.com/blog/scada-reproducibility-problem) <sub>28 Jul 2026</sub>
<!-- posts:end -->

---

### Elsewhere

[aradhs.com](https://aradhs.com) · [RSS](https://aradhs.com/feed.xml)

<sub>The Writing section above rebuilds itself daily from the site's feed — see <a href="scripts/update-posts.mjs">scripts/update-posts.mjs</a>.</sub>
