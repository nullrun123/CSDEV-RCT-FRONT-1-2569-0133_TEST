<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";

    import type { PageProps } from './$types';
    const {data}:PageProps = $props();

    const emojiData = data.emojidata;

    // copy image
    async function copyImageToClipboard(imageUrl: string) {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            
            await navigator.clipboard.write([
                new ClipboardItem({
                    [blob.type]: blob
                })
            ]);

        } catch (error) {
            console.error('Failed to copy image: ', error);
        }
    }
</script>

<div class="max-w-6xl mx-auto h-full">

 
	<nav class="flex items-center p-4 gap-2">
		<img src="/images/logo.png" alt="logo" class="w-9" />
	
		<h1 class="text-xl">Banana</h1>
	</nav>
    
    <section class="h-full w-full">


    <div class="space-y-7 relative flex-center flex-col h-[60vh] ">
		<h1 class="text-7xl font-semibold tracking-wide">Take Banana</h1>
		<p class="text-2xl">Copied png to use as your emoji</p>
        <Button class="bg-orange-600 px-13 py-6">Explore banana</Button>

        <!-- left -->
        <div class="absolute left-10 -rotate-30">
            <img src="/images/image1.png" alt="" class="w-14 rounded-md object-contain">
        </div>

         <div class="absolute top-5 left-15 -rotate-30">
            <img src="/images/image2.png" alt="" class="w-14 rounded-md object-contain">
        </div>

        <!-- right -->
         <div class="absolute right-10 rotate-30">
            <img src="/images/image3.png" alt="" class="w-14 rounded-md object-contain">
        </div>

         <div class="absolute top-5 right-15 rotate-30">
            <img src="/images/image.png" alt="" class="w-14 rounded-md object-contain">
        </div>
	</div>

    <div class="flex gap-3 flex-col items-center">
        <h1 class="text-xl font-semibold">Explore</h1>

         <div class="flex items-start bg-[#1F1F1F] p-5 rounded-2xl w-full min-h-[400px] overflow-x-auto">
           <ul class="grid grid-cols-5 md:grid-cols-9 w-full gap-4">
            {#each emojiData as emoji}
                <li id={emoji.id} class="w-full flex items-center flex-col p-5 rounded-md hover:bg-accent cursor-pointer transition-transform active:scale-95" 
                    onclick={() => copyImageToClipboard(`/api/emoji/${emoji.id}`)}
                    >
                    <img src={`/api/emoji/${emoji.id}`} alt={emoji.name} class="w-12 h-12 object-contain" >
                    <p class="text-sm mt-1.5">{emoji.name}</p>
                </li>
            {/each}
            </ul>
    
        </div>
    </div>
    </section>
</div>

  <footer class="flex-center mt-5 bg-[#1D1D1D] w-full h-[10vh]">
            <p>Ⓒ Copyright 2026 CSDEV KMITL. All rights reserved.</p>
    </footer>


