document.addEventListener('DOMContentLoaded', () => {
    const editor = new toastui.Editor({
        el: document.querySelector('#editor'),
        height: '600px',
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        initialValue: '# Welcome to My Blog\n\nThis is a static blog built with TUI Editor.'
    });

    const postLinks = document.querySelectorAll('nav ul li a');
    postLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = e.target.getAttribute('href');

            fetch(url)
                .then(response => response.text())
                .then(md => {
                    editor.setMarkdown(md);
                })
                .catch(err => console.error(err));
        });
    });
});