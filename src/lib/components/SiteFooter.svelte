<script lang="ts">
    import FooterLinkColumn from "$lib/components/FooterLinkColumn.svelte";
    import { resolve } from "$app/paths";
    import {DISCORD_URL, LINKEDIN_URL, INSTAGRAM_URL } from '$lib/links';
    import logo from '$lib/assets/logo.svg';


    let revealed = $state(false);

    $effect(() => {
        const THRESHOLD = 80;

        let ticking = false;

        const update = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            revealed = scrollable <= THRESHOLD || window.scrollY > THRESHOLD;
            ticking = false;
        }

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };

        update();

        window.addEventListener('resize', onScroll, { passive: true });
        window.addEventListener('scroll', onScroll, { passive: true});

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    })
</script>

<footer class="site-footer" class:revealed>
    <div class="footer-inner">
        <img src={logo} alt="CyberSec Logo" />
        <div class="links">
            <FooterLinkColumn
                title="Pages"
                links={[
                    { display: 'Events', href: resolve('/events') },
                    { display: 'About', href: resolve('/about') },
                    { display: 'Blog', href: resolve('/blog') }
                ]}
            />

            <FooterLinkColumn
                title="Socials"
                links={[
                    { display: 'LinkedIn', href: LINKEDIN_URL },
                    { display: 'Discord', href: DISCORD_URL },
                    { display: 'Instagram', href: INSTAGRAM_URL }
                ]}
            />
        </div>
    </div>
</footer>


<style>
    .site-footer {
        position: fixed;
        inset-inline: 0;
        bottom: 0;
        z-index: 40;

        transform: translateY(100%);
        opacity: 0;
        visibility: hidden;

        transition:
            transform 0.35s ease,
            opacity 0.25s ease,
            visibility 0.35s;
        
        border-top: 1px solid var(--color-border);

        font-family: var(--font-display);
    }

    .site-footer.revealed {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }

    .footer-inner {
        max-width: var(--content-max-width);
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        padding-inline: 1.25rem;
        display: flex;
        flex-direction: row;
        align-items: end;
    }

    @media (prefers-reduced-motion: reduce) {
        .site-footer {
            transform: none;
            transition: opacity 0.2s ease, visibility 0.2s;
        }
    }

    img {
        max-height: 10%;
    }
</style>