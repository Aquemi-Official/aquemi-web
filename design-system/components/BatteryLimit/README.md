BatteryLimit lays site requirements on a navy and limestone split whose divide is the battery limit, so the reader sees each requirement as a connection point on the line between the package and their site.

- On the site: a `spec` block with `"look": "battery-limit"` (renderer `assets/src/blocks/look-battery-limit.js`). Origin: pass 9 concept `research/pass9/concepts/systems.2.png`.
- Markup: `<section class="aq-section aq-band--split aq-battery-limit-sec">` with `span.__navy` (the left half), `svg.__line` (the dash-and-dot battery limit line) and `span.__seam-t` (its name, vertical), then `div.aq-in` > `div.aq-battery-limit`: `div.__head` (section head), `p.__side.is-pkg`, `ul.__list.is-pkg`, `div.__limit` (the battery-limit row as a card across the seam), `p.__side.is-site`, `ul.__list.is-site`. Each `li.__item[data-r]` holds `div.__card` (`.aq-index`, `h3.__p`, `dl.__dl` with the value `dd.__v` and note `dd.__m`, the row link `a.__link`) and `span.__tie` (`__lead` leader and `__node` tie-in diamond on the seam).
- Fields: `h`, `intro`, `cols` (the second and third label each card's value and note), `rows [{p, v, m, side, link, link_label}]`, `sides` ([package label, site label]), `seam` (the line's name), `fold`, `fold_noun`. `side` (new): `limit` (the one row that is the battery limit), `package` or `site` (default). Rows keep their numbers across both sides.
- Tokens: `navy` half with `on-navy` text and cards outlined in `on-navy-muted`; `limestone` half with `on-limestone` text and `navy` indexes; the line, nodes and the limit card's border in `flow`; the limit card on `surface-raised`. Hover or focus a card: its border, leader and node turn `flow`.
- Fold: phones only; desktop shows every card.
- Phones: one column; the navy runs full bleed behind the heading and package cards, the battery-limit card sits on the join, the site cards follow on limestone; leaders and the line go.

## Motion

Motion: the battery limit line draws top to bottom and its name decodes; the navy half opens out from the seam; the limit card stamps down on the line; the side labels decode; the cards come in from their own side in list order and each one's leader runs to the seam, its node seating there. Under 5 s; nothing under reduced motion.
