// Opens an external link in a new tab via a real <a> click.
// window.open is blocked in some sandboxed hosts (and by popup blockers when delayed),
// while a synchronous anchor click inside the user's gesture is allowed.
export const openLink = (url: string) => {
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  a.remove();
};
