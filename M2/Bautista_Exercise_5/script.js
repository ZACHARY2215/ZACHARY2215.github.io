const quoteElement = document.getElementById('quote');
        const authorElement = document.getElementById('author');
        const newQuoteBtn = document.getElementById('newQuoteBtn');
        const copyBtn = document.getElementById('copyBtn');

        let currentQuote = null;

        async function fetchQuote() {
            newQuoteBtn.disabled = true;
            copyBtn.disabled = true;
            quoteElement.style.opacity = '0';
            authorElement.style.opacity = '0';
            quoteElement.textContent = 'Loading quote...';
            authorElement.textContent = '';

            try {
                const response = await fetch('https://dummyjson.com/quotes/random');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                currentQuote = data;
                
                setTimeout(() => {
                    quoteElement.textContent = `"${data.quote}"`;
                    authorElement.textContent = `- ${data.author}`;
                    quoteElement.style.opacity = '1';
                    authorElement.style.opacity = '1';
                    newQuoteBtn.disabled = false;
                    copyBtn.disabled = false;
                }, 500);
            } catch (error) {
                console.error('Error fetching quote:', error);
                quoteElement.textContent = 'Failed to load quote. Please try again.';
                authorElement.textContent = '';
                newQuoteBtn.disabled = false;
            }
        }

        function copyToClipboard() {
            if (currentQuote) {
                navigator.clipboard.writeText(`"${currentQuote.quote}" - ${currentQuote.author}`);
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            }
        }

        newQuoteBtn.addEventListener('click', fetchQuote);
        copyBtn.addEventListener('click', copyToClipboard);

        // Fetch a quote when the page loads
        fetchQuote();