"use client"

import useHasMounted from '@/src/hooks/useHasMounted';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

const TocObserver = () => {
    usePathname();
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const toc = document.querySelector('.page-outline');

        if (!toc) {
            console.log('toc is null')
            return;
        }

        const links = toc ? toc.querySelectorAll('a') : [];

        if (links.length === 0) {
            console.log('links is empty')
            return;
        }

        const sections = {} as Record<string, boolean>;

        for (const link of links) {
            const href = link.getAttribute('href')!;
            sections[href] = false;
        }

        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[], observer) => {

            for (const entry of entries) {
                const id = entry.target.querySelector('.heading')?.getAttribute('href')!
                sections[id] = entry.isIntersecting
            }

            for (const [id, visible] of Object.entries(sections)) {
                const heading = document.querySelector(`.page-outline a[href="${id}"]`);
                if (heading) {
                    if (visible) {
                        heading.classList.add('active');
                    } else {
                        heading.classList.remove('active');
                    }
                }
            }

        }, options);

        links.forEach((link) => {
            const href = link.getAttribute('href');

            if (!href) {
                return;
            }

            let heading = document.querySelector(`a[href="${href}"]:not(.page-outline *)`)!;

            if (heading === null) {
                console.log(`target is null for ${href}`);
                return;
            }

            const target = heading.parentElement;

            if (target) observer.observe(target);
        });

        return () => {
            observer.disconnect();
        }

    }, [Math.random()])


    return null;
};

export default TocObserver;