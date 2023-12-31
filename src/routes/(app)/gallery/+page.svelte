<script lang="ts">
  	import ImageGrid from "$lib/components/ImageGrid.svelte";
  	import type { PageServerData } from "./$types";
  	import { mediaSmallest, mediaSmall, mediaMedium, mediaLarge, mediaLarger, mediaLargest, mediaSmaller } from "$lib/stores/screenWidth.store";
  	
	import { onDestroy } from "svelte";
	import type { Unsubscriber } from "svelte/store";
  	import { dev } from "$app/environment";
  import { DOMAIN } from "$lib/constants";

	export let data: PageServerData;

	let columns = 4;

	function changeColumns(numColumns: number) {
		return (matches: boolean) => {
			if (matches) {
				columns = numColumns;
			}
		}
	}

	const mediaUnsubscribe: Unsubscriber[] = [];

	mediaUnsubscribe.push(mediaLargest.subscribe(changeColumns(4)));
	mediaUnsubscribe.push(mediaLarger.subscribe(changeColumns(4)));
	mediaUnsubscribe.push(mediaLarge.subscribe(changeColumns(3)));
	mediaUnsubscribe.push(mediaMedium.subscribe(changeColumns(3)));
	mediaUnsubscribe.push(mediaSmall.subscribe(changeColumns(2)));
	mediaUnsubscribe.push(mediaSmaller.subscribe(changeColumns(2)));
	mediaUnsubscribe.push(mediaSmallest.subscribe(changeColumns(1)));

	onDestroy(() => {
		mediaUnsubscribe.forEach(fn => fn())
	})

	const TITLE = "Gallery | RHHS StuCo";
	const DESCRIPTION = "A look into our 2022-2023 school year.";
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={DESCRIPTION}>
	<meta property="og:title" content={TITLE}>
	<meta property="og:description" content={DESCRIPTION}>
	<meta property="og:type" content="website">
	<meta property="og:image" content={`${DOMAIN}${data.imageURLs[0].img.src}`}>
	<meta property="thumbnail" content={`${DOMAIN}${data.imageURLs[0].img.src}`}>
	{#if !dev}
		<meta property="og:url" content="https://rhhsstuco.ca/gallery">
	{/if}
</svelte:head>

<main class="gallery">
	<h1>Gallery</h1>
	<div class="gallery__image-grid">
		<ImageGrid imageURLs={data.imageURLs} {columns}/>
	</div>
</main>

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	main {
		--columns: 4;

		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		width: clamp(18rem, 90%, 1000rem);

		margin: 0 auto;

		margin-bottom: 8rem;
		
		h1 {
			margin-top: 2rem;
			@include exports.header;
		}
	}

	.gallery__image-grid {
		margin: 0 auto;
	}

	@media (max-width: 1280px) {
		main {
			--columns: 4;
		}
	}

	@media (max-width: 1152px) {
		main {
			--columns: 3;
		}
	}

	@media (max-width: 1024px) {
		main {
			--columns: 3;
		}
	}

	@media (max-width: 768px) {
		main {
			--columns: 2;
		}
	}

	@media (max-width: 640px) {
		main {
			--columns: 2;
		}
	}
	@media (max-width: 480px) {
		main {
			--columns: 1;
		}
	}




</style>