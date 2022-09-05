<script>
    export let color = 'black';
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="{color}"
        stroke-dasharray="150 50"
        stroke-width="10"
    >
        <animateTransform
            attributeName="transform"
            dur="400ms"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;360 50 50"
        />
    </circle>
</svg>