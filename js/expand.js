(() => {
    let currTarget;

    window.addEventListener('load', () => {
        if (window.location.hash) {
            const hashTargetId = window.location.hash.replace(/^#/, '');

            if (hashTargetId !== '') {
                const hashTarget = document.getElementById(hashTargetId);

                if (hashTarget && hashTarget.hasAttribute('aria-expanded')) {
                    hashTarget.setAttribute('aria-expanded', true);
                }
            }
        }

        Array.from(document.querySelectorAll('a[href^="#"]')).forEach((link) => {
            link.addEventListener('click', (event) => {
                if (currTarget) {
                    currTarget.setAttribute('aria-expanded', false);
                    currTarget = null;
                }

                const targetId = (link.getAttribute('href') || '').replace(/^#/, '');

                if (targetId === '') {
                    event.preventDefault();

                    return;
                }

                const newTarget = document.getElementById(targetId);

                if (newTarget && newTarget.hasAttribute('aria-expanded')) {
                    event.preventDefault();
                    newTarget.setAttribute('aria-expanded', true);
                    currTarget = newTarget;
                }

            }, false);
        });
    }, false);
})();