document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bmi-form');
    const results = document.getElementById('results');

    const calculateBMI = (weight, height) => {
        return (weight / ((height * height) / 10000)).toFixed(1);
    };

    const getBMICategory = (bmi) => {
        if (bmi < 18.5) return { category: 'Underweight', class: 'result-underweight' };
        if (bmi >= 18.5 && bmi < 25) return { category: 'Normal weight', class: 'result-normal' };
        return { category: 'Overweight', class: 'result-overweight' };
    };

    const displayResult = (bmi, category) => {
        // First remove the old result with a fade out effect
        if (results.children.length > 0) {
            results.children[0].style.opacity = '0';
            results.children[0].style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                results.innerHTML = `
                    <div class="${category.class}">
                        <h3>Your BMI is: ${bmi}</h3>
                        <p>Category: ${category.category}</p>
                    </div>
                `;
            }, 300);
        } else {
            results.innerHTML = `
                <div class="${category.class}">
                    <h3>Your BMI is: ${bmi}</h3>
                    <p>Category: ${category.category}</p>
                </div>
            `;
        }
    };

    // Add input animations
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'translateX(10px)';
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'translateX(0)';
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);

        if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
            results.innerHTML = '<div class="result-underweight">Please enter valid height and weight values</div>';
            return;
        }

        const bmi = calculateBMI(weight, height);
        const category = getBMICategory(bmi);
        displayResult(bmi, category);
    });
});