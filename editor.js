
(function(){
  const btn = document.getElementById('toggleEdit');
  const dl = document.getElementById('downloadHtml');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('editing');
    const editing = document.body.classList.contains('editing');
    btn.textContent = editing ? 'Exit Edit Mode' : 'Edit';
    document.querySelectorAll('[data-editable]').forEach(el => el.setAttribute('contenteditable', editing ? 'true' : 'false'));
  });
  dl.addEventListener('click', () => {
    const clone = document.documentElement.cloneNode(true);
    const controls = clone.querySelector('.controls');
    if (controls) controls.remove();
    clone.querySelectorAll('[data-editable]').forEach(el => el.removeAttribute('contenteditable'));
    const doctype = "<!DOCTYPE html>\n";
    const html = doctype + clone.outerHTML;
    const blob = new Blob([html], {type: 'text/html'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
})();
