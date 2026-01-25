# Soil Test Report – PDF/Image Guide for UniAgric

Use this guide to create or obtain a **soil test report** that works with the crop predictor. The app reads **pH, EC, OC, N, P, K** from your file (PDF or image) and uses them in the 3-layer filter (Soil → Climate → Water).

---

## 1. Accepted formats

- **PDF** (`.pdf`) – text is extracted and sent to AI for parsing  
- **Image** (`.jpg`, `.jpeg`, `.png`) – sent to Gemini vision for reading

---

## 2. Parameters the app looks for

| Parameter | Unit / format        | Example  | Notes                          |
|----------|----------------------|----------|--------------------------------|
| **pH**   | 0–14 (scale)         | 6.8, 7.2 | Acidity/alkalinity             |
| **EC**   | dS/m (or mS/cm, mmhos/cm) | 0.5, 1.2 | Electrical conductivity        |
| **OC**   | % (organic carbon)   | 0.6, 1.1 | Organic carbon                 |
| **N**    | kg/ha, ppm, or %     | 250, 45  | Nitrogen                       |
| **P**    | kg/ha, ppm, or %     | 15, 22   | Phosphorus                     |
| **K**    | kg/ha, ppm, or %     | 180, 120 | Potassium                      |

- **All are optional.** The more you provide, the better the crop filtering.
- **pH and at least one of N, P, K** are the most useful; the app can work with partial data.

---

## 3. How to write the values in the report

- Use **numbers** with optional units, e.g. `pH 6.8`, `N: 250 kg/ha`, `P 15 ppm`, `K 180`, `EC 0.5 dS/m`, `OC 0.6%`.
- Common labels the AI can recognise:
  - **pH:** `pH`, `Soil pH`, `Reaction (pH)`
  - **EC:** `EC`, `Electrical Conductivity`, `dS/m`, `mS/cm`
  - **OC:** `OC`, `Organic Carbon`, `Organic C`, `%`
  - **N:** `N`, `Nitrogen`, `Available N`, `kg/ha`, `ppm`
  - **P:** `P`, `Phosphorus`, `P₂O₅`, `Available P`, `kg/ha`, `ppm`
  - **K:** `K`, `Potassium`, `K₂O`, `Available K`, `kg/ha`, `ppm`
- You can use **tables** or **plain text**; the AI can parse both.

---

## 4. Example text to put in a PDF (copy‑paste and edit)

```
SOIL TEST REPORT
----------------
Location: [Village/Taluka, District]
Date: [DD-MM-YYYY]
Lab: [Name of lab / "Farmer sample"]

PARAMETER          VALUE      UNIT / RATING
-----------------------------------------
pH                 6.8        Neutral
EC                 0.52       dS/m
Organic Carbon     0.65       %
Available N        245        kg/ha
Available P        18         kg/ha
Available K        185        kg/ha
-----------------------------------------
Remarks: [Optional – e.g. "Suitable for cereals and pulses"]
```

Shorter example:

```
pH: 6.8 | EC: 0.5 dS/m | OC: 0.6% | N: 250 kg/ha | P: 15 kg/ha | K: 180 kg/ha
```

---

## 5. If you use a lab report

- Most **Indian agriculture / soil testing lab reports** (government or private) already have pH, N, P, K and often EC, OC.
- **Scan or export as PDF** and upload; or take a **clear photo** (good light, no glare) and use a JPG/PNG.
- Ensure the numbers and labels are **readable** (not too small or blurred).

---

## 6. If you create a simple PDF yourself

1. In Word/Google Docs/Notepad, write the parameters as in **Section 4**.
2. Export or **Print → Save as PDF**.
3. Or use a **lab letterhead / template** and fill the same parameters.

---

## 7. Tips for best results

- **PDF:** Prefer **text-based** PDFs (typed, not only a scan of handwritten text). Handwritten scans can work if the writing and photo are very clear.
- **Image:** Good focus, no shadows on the numbers, landscape often works better for table-style reports.
- **Size:** PDFs up to a few MB are fine; very large scans may be slow.
- **Language:** English works best; the AI is tuned for Indian/Maharashtra soil terms and common units (kg/ha, ppm, dS/m, %).

---

## 8. What the app does with the data

1. **Extracts** pH, EC, OC, N, P, K (and a short `summary`) from your file.
2. **Layer 1 (Soil):** Filters the 25 Maharashtra crops by soil suitability.
3. **Layer 2 (Climate):** Uses your **location** (lat/lng) and Open‑Meteo to filter by climate.
4. **Layer 3 (Water):** Uses rainfall/water proxy to filter and **rank the top 5 crops** with reason, tips, and “Why this crop?”.

If a parameter is missing, the AI skips it and uses the rest; the report does **not** need to have all six parameters.
