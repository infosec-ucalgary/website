/**
 * True for hrefs that leave the site — `https://…`, `http://…`, `mailto:…`,
 * `tel:…`. Callers use it to decide whether a link needs `target="_blank"` and
 * `rel="noreferrer noopener"`.
 *
 * Internal routes are expected to have gone through `resolve()` in the caller
 * before they reach here, so they arrive as plain paths and read as internal.
 */
export const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);
