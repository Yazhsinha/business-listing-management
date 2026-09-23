-- Remove temporary validation routes and the obsolete workspace shortcut.
delete from cms_redirects
where from_slug in (
  'zz-redirect-probe-src',
  'zz-redirect-probe-b',
  'zz-redirect-probe-dst',
  'blm-workspace-checks'
);
