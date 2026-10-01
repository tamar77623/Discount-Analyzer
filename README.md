# 🏷️ Discount & Savings Analyzer

A clean, light-weight, and interactive web application built to help users evaluate product discounts, stack promotional coupons, apply sales tax accurately, and analyze their overall financial savings in real time.

---

## ✨ Features

* ** Percent-off Discounts:** Calculates exact percentage-based savings on any product.
* ** Coupon Stacking:** Seamlessly deducts flat-rate coupon amounts alongside percentage discounts.
* ** Smart Tax Calculation:** Automatically applies sales tax on the net price *after* all deductions.
* ** Live Savings Breakdown:** Displays total money saved alongside the true overall savings percentage.
* ** Protection Against Negatives:** Ensures prices never fall below zero if coupons exceed product cost.
* ** Mobile-Responsive UI:** Styled with Tailwind CSS for a seamless experience on all devices.

---

## 🛠️ Built With

* **HTML5** - Semantic layout and structure.
* **Tailwind CSS** - Utility-first styling for modern design.
* **JavaScript (ES6+)** - Dynamic DOM manipulation and financial calculations.

---

## 📐 Formulas & Calculation Logic

| Metric | Formula |
| :--- | :--- |
| **Discount Amount** | $\text{Original Price} \times \left(\frac{\text{Discount \%}}{100}\right)$ |
| **Price After Discounts** | $\text{Original Price} - \text{Discount Amount} - \text{Coupon Amount}$ |
| **Sales Tax Amount** | $\text{Price After Discounts} \times \left(\frac{\text{Tax \%}}{100}\right)$ |
| **Final Payable Price** | $\text{Price After Discounts} + \text{Sales Tax Amount}$ |
| **Total Savings** | $\text{Discount Amount} + \text{Coupon Amount}$ |
| **Savings Percentage** | $\left(\frac{\text{Total Savings}}{\text{Original Price}}\right) \times 100$ |

---

## 🚀 Live Demo & Getting Started

### 1. Try Live Demo
👉 **[Click Here to Open Live Application](https://your-username.github.io/your-repo-name/)** *(Replace with your live link)*

### 2. Run Locally
To run this project locally on your device:

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
