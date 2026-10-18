'use client';
import {useEffect} from 'react';
export default function Reveal(){useEffect(()=>{const items=document.querySelectorAll('[data-reveal]');if(!('IntersectionObserver' in window)){items.forEach(x=>x.classList.add('visible'));return}const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -25px 0px'});items.forEach(x=>observer.observe(x));return()=>observer.disconnect()},[]);return null}
