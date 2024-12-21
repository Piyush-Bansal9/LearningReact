import React from 'react'
import { useState } from 'react'

function Card({username, num="3"}) {
    return (
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-4">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <p class="text-lg font-medium">
                “Tailwind CSS is the only framework that {username} have seen scale
                on large teams. Its easy to customize, adapts to any design,
            and the build size is tiny.”
            </p>
            </blockquote>
            <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
                {username}
            </div>
            <div class="text-slate-700 dark:text-slate-500">
                {num} Staff Engineer, Algolia
                </div>
            </figcaption>
            </div>
        </figure>
    )
}

export default Card
