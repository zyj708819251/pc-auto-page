<template>
	<div v-if="isShowLoading" class="loading-container">
		<div class="loading-box">

			<div v-if="seletedType === 'balls' " style="fill: rgb(255, 73, 73); width: 40px; height: 40px;">
				<svg x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
					<path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
					  <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
					</path>
					<path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
					  <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
					</path>
					<path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
					  <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
					</path>
					<path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
					  <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
					</path>
				</svg>
			</div>

			<div v-if="seletedType === 'bars' " style="fill: rgb(32, 160, 255); width: 30px; height: 30px;">
				<svg x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
					<rect x="0" y="13" width="4" height="5">
					  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
					  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
					</rect>
					<rect x="10" y="13" width="4" height="5">
					  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
					  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
					</rect>
					<rect x="20" y="13" width="4" height="5">
					  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
					  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
					</rect>
				</svg>
			</div>

			<div v-if="seletedType === 'spin' " style="fill: rgb(32, 160, 255); width: 50px; height: 50px;">
				 <svg x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
					<path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
						<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>
					</path>
				</svg>
			</div>

			<span class="loading-txt">{{content}}</span>
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			isShowLoading: false,
			content: '',
			seletedType: ''
		}
	}
}
</script>

<style scoped>
	.loading-container {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		z-index: 1000;
	}
	.loading-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100px;
		height: 100px;
		border-radius: 10px;
		/* background: #e7e7e7; */
	}

	.loading-txt {
		font-size: 16px;
		color: #666;
	}
</style>
