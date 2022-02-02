import { useEffect, useState } from "react";

export default function Logo({ className }) {
    const [mobileScreen, setMobileScreen] = useState(false);

    useEffect(() => {
        function handleMobileScreen() {
            setMobileScreen(window.innerWidth < 480)
        }

        handleMobileScreen();

        window.addEventListener('resize', handleMobileScreen);

        return () => {
            window.removeEventListener('resize', handleMobileScreen);   
        }
    }, []);

    if (mobileScreen) {
        return (
            <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9999 11.421L22.5861 17.6315L25.0139 11.7895L20.475 1H20.3167H19.6305H19.4721L14.9861 11.7895L17.4139 17.6315L19.9999 11.421Z" fill="#FAFAFA" stroke="#FAFAFA" stroke-width="1.60558" stroke-miterlimit="10" />
                <path d="M27.2834 17.2106L25.0138 11.7896L22.5862 17.6316L20 23.8421L17.4139 17.6316L14.9862 11.7896L12.7166 17.2106L12.5056 17.6316L12.7166 18.0527L14.9862 23.4737L19.4722 34.2632H19.6306H20.3167H20.475L25.0138 23.4737L27.2834 18.0527L27.4416 17.6316L27.2834 17.2106Z" fill="#FAFAFA" stroke="#FAFAFA" stroke-width="1.60558" stroke-miterlimit="10" />
                <path d="M10.9223 20.3684L6.59445 30.4737C6.06668 31.6316 5.59166 32.6316 5.16944 33.421C4.74722 34.2105 4.325 34.7894 3.90278 35.1579C3.48056 35.5263 2.6889 35.8421 1.42223 36.0526C1.2639 36.0526 1.15833 36.0526 1 36.1052V37H1.26389H11.5556H13.8778V36.1052C13.2444 36.0526 12.7166 36 12.2417 35.8948C11.8194 35.7895 11.45 35.6316 11.2389 35.4737C10.975 35.3158 10.8166 35.1053 10.7111 34.8948C10.6056 34.6842 10.5527 34.421 10.5527 34.1579C10.5527 33.7895 10.6056 33.3684 10.7639 32.7895C10.9223 32.2631 11.1861 31.579 11.5028 30.7895L13.4028 26.2106L11.1334 20.7895L10.9223 20.3684Z" fill="#FAFAFA" stroke="#FAFAFA" stroke-width="1.60558" stroke-miterlimit="10" />
                <path d="M26.5973 26.2106L28.4973 30.7895C28.814 31.579 29.0779 32.2105 29.2362 32.7895C29.3945 33.3158 29.5 33.7895 29.4473 34.1579C29.4473 34.421 29.3945 34.6842 29.289 34.8948C29.1834 35.1053 29.0251 35.3158 28.7612 35.4737C28.4973 35.6316 28.1807 35.7895 27.7584 35.8948C27.3362 36 26.8085 36.0526 26.1223 36.1052V37H28.4445H38.7362H39.0001V36.1052C38.8418 36.1052 38.7362 36.1052 38.5779 36.0526C37.3112 35.8421 36.4668 35.5263 36.0973 35.1579C35.6751 34.7894 35.2529 34.2105 34.8306 33.421C34.4084 32.6316 33.9334 31.6842 33.4057 30.4737L29.0779 20.3684L28.9195 20.7895L26.5973 26.2106Z" fill="#FAFAFA" stroke="#FAFAFA" stroke-width="1.60558" stroke-miterlimit="10" />
            </svg>
        );
    } else {
        return (
            <svg className={className} width="173" height="36" viewBox="0 0 173 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2_968)">
                    <path d="M19.246 10.3104L21.7948 16.455L24.1875 10.675L19.7141 0H19.5581H18.8819H18.7258L14.3045 10.675L16.6972 16.455L19.246 10.3104Z" fill="currentColor" stroke="currentColor" strokeWidth="1.60558" strokeMiterlimit="10" />
                    <path d="M26.4242 16.0384L24.1874 10.6749L21.7948 16.455L19.246 22.5996L16.6972 16.455L14.3045 10.6749L12.0677 16.0384L11.8597 16.455L12.0677 16.8716L14.3045 22.2351L18.7258 32.9101H18.8819H19.558H19.7141L24.1874 22.2351L26.4242 16.8716L26.5802 16.455L26.4242 16.0384Z" fill="currentColor" stroke="currentColor" strokeWidth="1.60558" strokeMiterlimit="10" />
                    <path d="M10.2992 19.1628L6.0339 29.1609C5.51374 30.3065 5.04558 31.2959 4.62946 32.0769C4.21332 32.858 3.7972 33.4308 3.38108 33.7954C2.96494 34.1599 2.18471 34.4723 0.936326 34.6806C0.780277 34.6806 0.676236 34.6806 0.520187 34.7326V35.618H0.780268H10.9234H13.2122V34.7326C12.5879 34.6806 12.0677 34.6285 11.5997 34.5244C11.1835 34.4202 10.8194 34.2641 10.6113 34.1078C10.3512 33.9515 10.1951 33.7433 10.0912 33.535C9.98716 33.3267 9.93506 33.0663 9.93506 32.806C9.93506 32.4415 9.98716 32.0249 10.1432 31.4521C10.2992 30.9313 10.5593 30.2544 10.8714 29.4733L12.744 24.943L10.5073 19.5795L10.2992 19.1628Z" fill="currentColor" stroke="currentColor" strokeWidth="1.60558" strokeMiterlimit="10" />
                    <path d="M25.748 24.943L27.6206 29.4733C27.9327 30.2544 28.1928 30.8793 28.3488 31.4521C28.5049 31.9728 28.6089 32.4415 28.5569 32.806C28.5569 33.0663 28.5049 33.3267 28.4009 33.535C28.2968 33.7433 28.1408 33.9515 27.8807 34.1078C27.6206 34.2641 27.3085 34.4202 26.8924 34.5244C26.4762 34.6285 25.9561 34.6806 25.2799 34.7326V35.618H27.5685H37.7117H37.9718V34.7326C37.8158 34.7326 37.7117 34.7326 37.5557 34.6806C36.3073 34.4723 35.475 34.1599 35.1109 33.7954C34.6948 33.4308 34.2787 32.858 33.8625 32.0769C33.4464 31.2959 32.9783 30.3585 32.4581 29.1609L28.1928 19.1628L28.0367 19.5795L25.748 24.943Z" fill="currentColor" stroke="currentColor" strokeWidth="1.60558" strokeMiterlimit="10" />
                    <path d="M65.0371 11.2216H59.5755L58.6391 13.4608C58.379 13.9815 58.2751 14.398 58.2751 14.7105C58.2751 14.8147 58.2751 14.9188 58.327 15.0229C58.379 15.1271 58.431 15.1791 58.5871 15.2833C58.6911 15.3875 58.8472 15.4395 59.1073 15.4916C59.3154 15.5436 59.6275 15.5958 59.9395 15.5958V15.9602H55.4661V15.5958C56.0383 15.4916 56.4545 15.3354 56.6105 15.1791C56.7666 15.0229 56.9746 14.7625 57.1827 14.398C57.3907 14.0856 57.5988 13.6169 57.8069 13.0962L62.8005 1.43188H63.1645L68.106 13.2004C68.3141 13.669 68.4702 14.0856 68.6783 14.398C68.8343 14.7105 69.0424 14.9188 69.1984 15.075C69.3545 15.2312 69.5625 15.3354 69.7706 15.4395C69.9786 15.4916 70.2387 15.5436 70.5508 15.5436V15.9082H64.9851V15.5436C65.2452 15.5436 65.5053 15.4916 65.6613 15.4395C65.8694 15.3875 65.9734 15.3354 66.1295 15.2312C66.2334 15.1791 66.3375 15.075 66.3375 14.9708C66.3895 14.8667 66.3895 14.7625 66.3895 14.6584C66.3895 14.5022 66.3895 14.2939 66.2855 14.0856C66.1815 13.8773 66.1294 13.5649 65.9734 13.2004L65.0371 11.2216ZM64.777 10.4405L62.3843 4.71249L59.9395 10.4405H64.777Z" fill="currentColor" stroke="currentColor" strokeWidth="0.133799" strokeMiterlimit="10" />
                    <path d="M70.2398 1.79639H74.089L82.7237 12.4193V4.24381C82.7237 3.35857 82.6196 2.83785 82.4116 2.62955C82.1516 2.31711 81.7354 2.21296 81.2152 2.21296H80.7471V1.84846H85.6886V2.21296H85.1685C84.5442 2.21296 84.1281 2.36919 83.9201 2.7337C83.764 2.94198 83.712 3.46272 83.712 4.24381V16.1685H83.3479L74.037 4.76454V13.4608C74.037 14.346 74.1411 14.8667 74.2971 15.075C74.5572 15.3874 74.9733 15.4916 75.4935 15.4916H76.0136V15.8561H71.0721V15.4916H71.5403C72.1644 15.4916 72.5806 15.3354 72.8407 14.9708C72.9967 14.7625 73.0487 14.2419 73.0487 13.4608V3.61893C72.8407 3.35857 72.6846 3.20235 72.5285 3.04614C72.3725 2.88992 72.2685 2.78576 72.1124 2.68162C72.0084 2.57747 71.8523 2.52541 71.6963 2.47333C71.5403 2.42126 71.3842 2.36919 71.1761 2.26504C70.9681 2.21297 70.656 2.16089 70.2398 2.16089V1.79639Z" fill="currentColor" stroke="currentColor" strokeWidth="0.133799" strokeMiterlimit="10" />
                    <path d="M99.1611 1.79639V5.12905H98.9531C98.9006 4.6604 98.7966 4.29589 98.6926 3.98345C98.5886 3.671 98.3806 3.41065 98.1726 3.25443C97.9647 3.04613 97.7042 2.94198 97.3922 2.83784C97.0802 2.73369 96.768 2.68162 96.352 2.68162H94.3754V13.5128C94.3754 14.398 94.4794 14.9188 94.6354 15.1271C94.8955 15.4395 95.3116 15.5436 95.8318 15.5436H96.3V15.9082H90.3181V15.5436H90.8382C91.4104 15.5436 91.8786 15.3874 92.0866 15.0229C92.2426 14.8147 92.2947 14.2939 92.2947 13.5128V2.68162H90.6301C90.2141 2.68162 89.7979 2.7337 89.4858 2.78577C89.1737 2.83785 88.9137 2.94199 88.6536 3.15028C88.4455 3.3065 88.2375 3.56687 88.1334 3.8793C88.0294 4.19174 87.8733 4.60833 87.8213 5.12905H87.4052V1.79639H99.1611Z" fill="currentColor" stroke="currentColor" strokeWidth="0.133799" strokeMiterlimit="10" />
                    <path d="M107.327 15.5436V15.9082H101.241V15.5436H101.762C102.333 15.5436 102.802 15.3874 103.01 15.0229C103.166 14.8147 103.27 14.2939 103.27 13.4086V4.29589C103.27 3.98345 103.27 3.671 103.27 3.46272C103.27 3.25443 103.218 3.09821 103.166 2.94198C103.114 2.78576 103.062 2.68163 103.01 2.62955C102.958 2.57748 102.854 2.47333 102.698 2.42126C102.386 2.26504 102.074 2.16089 101.762 2.16089H101.241V1.79639H107.327V2.16089H106.807C106.235 2.16089 105.819 2.31711 105.559 2.68162C105.403 2.88991 105.299 3.41065 105.299 4.29589V13.4608C105.299 13.7732 105.299 14.0856 105.299 14.2939C105.299 14.5021 105.351 14.6584 105.403 14.8147C105.455 14.9708 105.507 15.075 105.559 15.1271C105.611 15.2312 105.715 15.2832 105.871 15.3354C106.183 15.4916 106.495 15.5958 106.807 15.5958H107.327V15.5436Z" fill="currentColor" stroke="currentColor" strokeWidth="0.133799" strokeMiterlimit="10" />
                    <path d="M121.788 1.43202L122.152 5.9103H121.788C121.424 4.81677 120.955 3.9836 120.384 3.41079C119.551 2.57763 118.458 2.21311 117.158 2.21311C115.338 2.21311 113.986 2.94214 113.049 4.34811C112.269 5.54579 111.852 7.00383 111.852 8.67016C111.852 10.0241 112.113 11.2739 112.633 12.3674C112.841 12.836 113.153 13.3046 113.466 13.7213C113.778 14.1378 114.141 14.4502 114.557 14.7106C114.974 14.971 115.39 15.1793 115.858 15.3355C116.326 15.4917 116.794 15.5438 117.314 15.5438C117.834 15.5438 118.354 15.4917 118.823 15.3355C119.291 15.1793 119.759 15.0231 120.227 14.7627V10.6489C120.227 10.2844 120.227 9.97202 120.176 9.7637C120.123 9.5554 120.123 9.34711 120.072 9.24297C120.019 9.08675 119.968 9.03467 119.863 8.93053C119.759 8.87845 119.655 8.77431 119.551 8.72223C119.343 8.61809 118.927 8.56601 118.354 8.56601V8.14943H123.816V8.56601H123.556C123.297 8.56601 123.14 8.56601 122.932 8.67016C122.777 8.72223 122.62 8.82638 122.516 8.9826C122.412 9.13882 122.308 9.34711 122.256 9.60747C122.204 9.86781 122.204 10.2324 122.204 10.6489V14.971C121.788 15.1793 121.372 15.3876 121.008 15.5438C120.643 15.7 120.227 15.8041 119.811 15.9083C119.395 16.0124 118.979 16.0645 118.562 16.1166C118.146 16.1687 117.679 16.1687 117.21 16.1687C114.453 16.1687 112.425 15.2834 110.969 13.513C109.928 12.2111 109.356 10.701 109.356 8.9826C109.356 8.51395 109.408 8.04529 109.512 7.52455C109.616 7.0559 109.772 6.58725 109.928 6.11859C110.084 5.64993 110.344 5.23335 110.604 4.81677C110.865 4.40018 111.177 3.9836 111.489 3.67116C112.165 2.89007 112.997 2.31726 113.882 1.95275C114.766 1.58824 115.754 1.37994 116.846 1.37994C117.158 1.37994 117.471 1.37994 117.679 1.43202C117.938 1.43202 118.146 1.48409 118.407 1.53617C118.615 1.58824 118.875 1.64031 119.135 1.74446C119.395 1.84861 119.707 1.95275 120.019 2.05689C120.384 2.21311 120.643 2.26519 120.8 2.26519C120.955 2.26519 121.059 2.21311 121.163 2.05689C121.267 1.95275 121.32 1.69239 121.32 1.32788H121.788V1.43202Z" fill="currentColor" stroke="currentColor" strokeWidth="0.133799" strokeMiterlimit="10" />
                    <path d="M135.156 2.16089V1.79639H140.149V2.16089H139.629C139.057 2.16089 138.641 2.36919 138.329 2.83784C138.173 3.04613 138.121 3.56687 138.121 4.34796V10.076C138.121 11.4819 137.965 12.5755 137.705 13.4086C137.549 13.9294 137.288 14.346 136.925 14.7105C136.613 15.075 136.197 15.3874 135.78 15.5958C135.364 15.804 134.844 16.0123 134.324 16.1164C133.804 16.2206 133.231 16.2727 132.659 16.2727C131.099 16.2727 129.954 16.0123 129.122 15.4916C128.602 15.1791 128.238 14.8147 127.926 14.4501C127.665 14.0856 127.457 13.669 127.302 13.2004C127.198 12.7317 127.094 12.263 127.094 11.6902C127.094 11.1175 127.041 10.5447 127.041 9.81562V4.29589C127.041 3.8793 126.99 3.51478 126.937 3.20235C126.886 2.88991 126.782 2.73369 126.677 2.57748C126.573 2.42126 126.417 2.31711 126.209 2.26504C126.001 2.21297 125.793 2.16089 125.533 2.16089H125.013V1.79639H131.203V2.16089H130.682C130.37 2.16089 130.058 2.21297 129.903 2.31711C129.695 2.42126 129.538 2.52541 129.434 2.7337C129.33 2.94198 129.278 3.15028 129.226 3.41065C129.174 3.67101 129.174 3.98345 129.174 4.29589V10.4925C129.174 10.8571 129.174 11.1695 129.226 11.534C129.278 11.8986 129.278 12.211 129.33 12.5234C129.382 12.8358 129.487 13.1482 129.591 13.4086C129.695 13.669 129.85 13.9294 130.007 14.1897C130.266 14.5543 130.631 14.8667 131.099 15.075C131.567 15.2832 132.139 15.3874 132.867 15.3874C133.335 15.3874 133.751 15.3354 134.167 15.2312C134.583 15.1271 135 14.9708 135.312 14.7625C135.676 14.5543 135.988 14.346 136.248 14.0856C136.509 13.8252 136.717 13.5128 136.821 13.2004C137.08 12.5755 137.237 11.4819 137.237 9.97188V4.24381C137.237 3.35857 137.133 2.78576 136.925 2.57748C136.664 2.26504 136.248 2.10882 135.728 2.10882H135.156V2.16089Z" fill="currentColor" stroke="currentColor" strokeWidth="0.133799" strokeMiterlimit="10" />
                    <path d="M151.021 11.2216H145.559L144.623 13.4608C144.363 13.9815 144.259 14.398 144.259 14.7105C144.259 14.8147 144.259 14.9188 144.311 15.0229C144.363 15.1271 144.415 15.1791 144.571 15.2833C144.675 15.3875 144.831 15.4395 145.091 15.4916C145.299 15.5436 145.612 15.5958 145.924 15.5958V15.9602H141.45V15.5958C142.022 15.4916 142.438 15.3354 142.594 15.1791C142.75 15.0229 142.958 14.7625 143.166 14.398C143.374 14.0856 143.582 13.6169 143.79 13.0962L148.784 1.43188H149.148L154.09 13.2004C154.298 13.669 154.454 14.0856 154.662 14.398C154.818 14.7105 155.026 14.9188 155.182 15.075C155.338 15.2312 155.546 15.3354 155.754 15.4395C155.962 15.4916 156.223 15.5436 156.535 15.5436V15.9082H150.969V15.5436C151.229 15.5436 151.489 15.4916 151.645 15.4395C151.853 15.3875 151.957 15.3354 152.114 15.2312C152.218 15.1791 152.322 15.075 152.322 14.9708C152.373 14.8667 152.373 14.7625 152.373 14.6584C152.373 14.5022 152.373 14.2939 152.269 14.0856C152.165 13.8773 152.113 13.5649 151.957 13.2004L151.021 11.2216ZM150.761 10.4405L148.368 4.71249L145.924 10.4405H150.761Z" fill="currentColor" stroke="currentColor" strokeWidth="0.133799" strokeMiterlimit="10" />
                    <path d="M70.4468 19.7617V20.1262C70.1347 20.1783 69.8746 20.2825 69.6665 20.3866C69.4584 20.4908 69.2504 20.6469 69.0944 20.8032C68.9383 20.9594 68.7823 21.1677 68.6783 21.428C68.5742 21.6363 68.4181 21.9488 68.3141 22.2091L63.3726 34.238H63.0084L57.7029 22.053C57.4428 21.428 57.2347 21.0115 57.1306 20.9073C56.9746 20.6991 56.7665 20.5428 56.5065 20.3866C56.2464 20.2825 55.9343 20.1783 55.4661 20.1262V19.7617H61.24V20.1262C60.9279 20.1783 60.6157 20.2304 60.4077 20.2825C60.1996 20.3345 60.0435 20.3866 59.9395 20.4908C59.8355 20.5949 59.7315 20.6469 59.7315 20.7511C59.6795 20.8552 59.6795 20.9594 59.6795 21.1156C59.6795 21.4802 59.8355 22.0008 60.1476 22.7299L63.7367 31.0095L67.0657 22.8341C67.3779 22.0008 67.5339 21.4801 67.5339 21.1677C67.5339 20.9594 67.4299 20.7511 67.1698 20.5428C66.9617 20.3345 66.5456 20.2304 66.0255 20.1262V19.7617H70.4468Z" fill="currentColor" stroke="currentColor" strokeWidth="0.133799" strokeMiterlimit="10" />
                    <path d="M76.0645 20.5428V26.1667H79.1855C79.6536 26.1667 80.0178 26.1146 80.2778 26.0626C80.5379 25.9584 80.798 25.8543 80.954 25.6981C81.1101 25.5418 81.2141 25.3335 81.2661 25.0732C81.3182 24.8128 81.3702 24.5004 81.3702 24.1359H81.7342V29.0828H81.3702C81.3182 28.7183 81.2661 28.4579 81.2141 28.2496C81.1621 28.0413 81.1101 27.8852 81.0581 27.781C81.006 27.6768 80.902 27.5206 80.798 27.4685C80.6939 27.3644 80.5899 27.3124 80.4338 27.2082C80.2778 27.1041 80.1217 27.1041 79.8617 27.052C79.6536 26.9998 79.3935 26.9998 79.0814 26.9998H75.9605V31.6865C75.9605 32.3113 76.0125 32.6759 76.0645 32.832C76.1165 32.8841 76.1165 32.9362 76.1685 32.9883C76.2206 33.0404 76.2726 33.0924 76.3766 33.1445C76.4806 33.1965 76.5847 33.1965 76.6887 33.2487C76.7928 33.3007 77.0008 33.3007 77.1568 33.3007H79.5496C79.9658 33.3007 80.2778 33.3007 80.5899 33.2487C80.85 33.2487 81.1101 33.1965 81.3182 33.1445C81.5262 33.0924 81.6822 32.9883 81.8382 32.8841C81.9943 32.78 82.1504 32.6237 82.3584 32.4676C82.5665 32.2593 82.7746 31.9989 83.0347 31.6865C83.2427 31.374 83.5028 30.9574 83.7108 30.5409H84.127L82.9307 34.0818H72.0073V33.7173H72.5274C72.6834 33.7173 72.7875 33.7173 72.9435 33.6652C73.0996 33.6131 73.2036 33.6131 73.3597 33.509C73.5157 33.4048 73.6198 33.3528 73.7238 33.2487C73.8279 33.1445 73.8799 33.0404 73.9318 32.9362C74.0358 32.7279 74.0358 32.2593 74.0358 31.5823V22.3654C74.0358 21.4802 73.9318 20.9074 73.7758 20.6991C73.5157 20.4387 73.0996 20.2824 72.5274 20.2824H72.0073V19.918H82.9307V23.0424H82.6706C82.6185 22.6778 82.5145 22.3654 82.4625 22.105C82.4105 21.8446 82.3064 21.6363 82.2024 21.4802C82.0984 21.3239 81.9943 21.1678 81.8903 21.1156C81.7862 21.0115 81.6302 20.9594 81.4222 20.8552C81.1621 20.7511 80.6419 20.6991 79.9658 20.6991H76.0645V20.5428Z" fill="currentColor" stroke="currentColor" strokeWidth="0.133799" strokeMiterlimit="10" />
                    <path d="M85.2194 19.7617H89.0686L97.7032 30.3846V22.2091C97.7032 21.3239 97.5992 20.8032 97.3912 20.5949C97.1311 20.2825 96.715 20.1783 96.1948 20.1783H95.6746V19.8138H100.616V20.1783H100.096C99.4721 20.1783 99.0561 20.3345 98.8472 20.6991C98.6916 20.9073 98.6392 21.428 98.6392 22.2091V34.1339H98.2757L88.9125 22.7819V31.4782C88.9125 32.3634 89.0166 32.8841 89.1726 33.0924C89.4327 33.4048 89.8488 33.509 90.369 33.509H90.8892V33.8735H85.9476V33.509H86.4157C87.0399 33.509 87.4561 33.3528 87.7162 32.9882C87.8722 32.78 87.9242 32.2593 87.9242 31.4782V21.6363C87.7162 21.376 87.5601 21.2198 87.4041 21.0636C87.248 20.9073 87.144 20.8032 86.9879 20.6991C86.8839 20.5949 86.7278 20.5428 86.5718 20.4908C86.4157 20.4387 86.2597 20.3866 86.0517 20.2825C85.8436 20.2304 85.5315 20.1783 85.1153 20.1783V19.7617H85.2194Z" fill="currentColor" stroke="currentColor" strokeWidth="0.133799" strokeMiterlimit="10" />
                    <path d="M114.14 19.7617V23.0944H113.881C113.828 22.6258 113.724 22.2612 113.62 21.9488C113.516 21.6363 113.308 21.376 113.1 21.2198C112.892 21.0115 112.632 20.9073 112.32 20.8032C112.008 20.6991 111.696 20.6469 111.28 20.6469H109.303V31.4782C109.303 32.3634 109.407 32.8841 109.562 33.0924C109.823 33.4048 110.239 33.509 110.759 33.509H111.227V33.8735H105.245V33.509H105.766C106.338 33.509 106.806 33.3528 107.014 32.9882C107.171 32.78 107.222 32.2593 107.222 31.4782V20.6469H105.506C105.09 20.6469 104.674 20.6991 104.362 20.7511C104.049 20.8032 103.789 20.9073 103.529 21.1156C103.321 21.2719 103.113 21.5322 103.009 21.8447C102.905 22.1571 102.748 22.5737 102.697 23.0944H102.436V19.7617H114.14Z" fill="currentColor" stroke="currentColor" strokeWidth="0.133799" strokeMiterlimit="10" />
                    <path d="M125.896 20.1783V19.8137H130.889V20.1783H130.369C129.798 20.1783 129.381 20.3865 129.069 20.8552C128.913 21.0635 128.861 21.5842 128.861 22.3653V28.0933C128.861 29.4993 128.705 30.5929 128.445 31.4261C128.288 31.9468 128.029 32.3633 127.664 32.7279C127.352 33.0924 126.936 33.4048 126.52 33.6131C126.104 33.8214 125.583 34.0296 125.063 34.1338C124.543 34.2379 123.971 34.29 123.4 34.29C121.839 34.29 120.695 34.0296 119.862 33.5089C119.342 33.1965 118.977 32.832 118.665 32.4675C118.406 32.103 118.198 31.6864 118.041 31.2177C117.937 30.7491 117.833 30.2804 117.833 29.7076C117.833 29.1348 117.782 28.562 117.782 27.833V22.3133C117.782 21.8967 117.729 21.5322 117.677 21.2198C117.625 20.9072 117.521 20.7511 117.417 20.5948C117.313 20.4387 117.157 20.3345 116.949 20.2824C116.741 20.2303 116.533 20.1783 116.273 20.1783H115.753V19.8137H121.891V20.1783H121.37C121.058 20.1783 120.746 20.2303 120.591 20.3345C120.382 20.4387 120.226 20.5428 120.122 20.7511C120.018 20.9594 119.966 21.1676 119.914 21.428C119.862 21.6883 119.862 22.0009 119.862 22.3133V28.51C119.862 28.8744 119.862 29.1869 119.914 29.5514C119.966 29.9159 119.966 30.2283 120.018 30.5407C120.07 30.8532 120.174 31.1657 120.278 31.4261C120.382 31.6864 120.538 31.9468 120.695 32.2072C120.954 32.5716 121.319 32.8841 121.787 33.0924C122.255 33.3007 122.827 33.4048 123.555 33.4048C124.024 33.4048 124.439 33.3527 124.855 33.2485C125.271 33.1444 125.687 32.9882 126 32.7799C126.364 32.5716 126.676 32.3633 126.936 32.103C127.197 31.8426 127.405 31.5302 127.509 31.2177C127.768 30.5929 127.925 29.4993 127.925 27.9892V22.2611C127.925 21.3759 127.821 20.8031 127.613 20.5948C127.352 20.2824 126.936 20.1261 126.416 20.1261H125.896V20.1783Z" fill="currentColor" stroke="currentColor" strokeWidth="0.133799" strokeMiterlimit="10" />
                    <path d="M146.39 33.9255H142.593L137.807 27.3122C137.652 27.3122 137.444 27.3122 137.34 27.3122C137.183 27.3122 137.079 27.3122 136.975 27.3122C136.871 27.3122 136.767 27.3122 136.663 27.3122C136.559 27.3122 136.455 27.3122 136.351 27.3122V31.4261C136.351 32.3113 136.455 32.8841 136.663 33.0924C136.924 33.4048 137.34 33.5611 137.86 33.5611H138.432V33.9255H132.346V33.5611H132.866C133.438 33.5611 133.906 33.3527 134.166 32.9883C134.323 32.7799 134.374 32.2592 134.374 31.4781V22.3133C134.374 21.428 134.27 20.8552 134.062 20.6469C133.802 20.3345 133.386 20.1783 132.866 20.1783H132.346V19.8137H137.495C139.004 19.8137 140.096 19.9179 140.825 20.1261C141.188 20.2303 141.5 20.3865 141.812 20.5948C142.125 20.8031 142.385 21.0635 142.645 21.3239C142.853 21.5842 143.061 21.9487 143.217 22.2611C143.373 22.5737 143.426 22.9902 143.426 23.4068C143.426 23.8233 143.373 24.24 143.217 24.6565C143.061 25.0211 142.853 25.3855 142.593 25.698C142.281 26.0104 141.916 26.2708 141.5 26.5311C141.084 26.7394 140.564 26.9478 139.94 27.0519L142.853 31.1135C143.53 32.0509 144.101 32.6757 144.57 32.9883C145.038 33.3007 145.662 33.5089 146.443 33.5611V33.9255H146.39ZM136.351 26.6353C136.507 26.6353 136.611 26.6353 136.716 26.6353C136.82 26.6353 136.871 26.6353 136.975 26.6353C137.652 26.6353 138.224 26.5311 138.744 26.375C139.264 26.2187 139.68 26.0104 140.044 25.698C140.408 25.4376 140.616 25.0731 140.825 24.7087C140.98 24.3441 141.084 23.9275 141.084 23.4589C141.084 23.0422 141.033 22.6257 140.876 22.2611C140.721 21.8967 140.512 21.5842 140.252 21.3239C139.992 21.0635 139.68 20.8552 139.316 20.699C138.952 20.5428 138.536 20.4907 138.068 20.4907C137.86 20.4907 137.652 20.4907 137.34 20.5428C137.079 20.5948 136.767 20.6469 136.403 20.699V26.6353H136.351Z" fill="currentColor" stroke="currentColor" strokeWidth="0.133799" strokeMiterlimit="10" />
                    <path d="M151.54 20.5428V26.1667H154.661C155.129 26.1667 155.493 26.1146 155.753 26.0626C156.013 25.9584 156.273 25.8543 156.429 25.6981C156.585 25.5418 156.689 25.3335 156.742 25.0732C156.793 24.8128 156.846 24.5004 156.846 24.1359H157.209V29.0828H156.846C156.793 28.7183 156.742 28.4579 156.689 28.2496C156.638 28.0413 156.585 27.8852 156.533 27.781C156.481 27.6768 156.377 27.5206 156.273 27.4685C156.169 27.3644 156.065 27.3124 155.909 27.2082C155.753 27.1041 155.597 27.1041 155.337 27.052C155.129 26.9998 154.869 26.9998 154.557 26.9998H151.436V31.6865C151.436 32.3113 151.488 32.6759 151.54 32.832C151.592 32.8841 151.592 32.9362 151.644 32.9883C151.696 33.0404 151.748 33.0924 151.852 33.1445C151.956 33.1965 152.06 33.1965 152.164 33.2487C152.268 33.3007 152.476 33.3007 152.633 33.3007H155.025C155.441 33.3007 155.753 33.3007 156.065 33.2487C156.325 33.2487 156.585 33.1965 156.793 33.1445C157.001 33.0924 157.158 32.9883 157.313 32.8841C157.47 32.78 157.625 32.6237 157.833 32.4676C158.042 32.2593 158.25 31.9989 158.51 31.6865C158.718 31.374 158.978 30.9574 159.186 30.5409H159.602L158.406 34.0818H147.482V33.7173H148.002C148.159 33.7173 148.263 33.7173 148.418 33.6652C148.575 33.6131 148.679 33.6131 148.835 33.509C148.991 33.4048 149.095 33.3528 149.199 33.2487C149.303 33.1445 149.355 33.0404 149.407 32.9362C149.511 32.7279 149.511 32.2593 149.511 31.5823V22.3654C149.511 21.4802 149.407 20.9074 149.251 20.6991C148.991 20.4387 148.575 20.2824 148.002 20.2824H147.482V19.918H158.406V23.0424H158.146C158.094 22.6778 157.99 22.3654 157.938 22.105C157.886 21.8446 157.782 21.6363 157.678 21.4802C157.574 21.3239 157.47 21.1678 157.366 21.1156C157.262 21.0115 157.105 20.9594 156.897 20.8552C156.638 20.7511 156.117 20.6991 155.441 20.6991H151.54V20.5428Z" fill="currentColor" stroke="currentColor" strokeWidth="0.133799" strokeMiterlimit="10" />
                    <path d="M170.786 19.4492V24.3441H170.422C170.318 23.4068 170.058 22.6777 169.745 22.1049C169.59 21.8446 169.382 21.5842 169.121 21.3759C168.862 21.1676 168.601 20.9594 168.341 20.8031C168.081 20.6469 167.769 20.5427 167.457 20.4386C167.144 20.3344 166.832 20.2824 166.52 20.2824C166.157 20.2824 165.844 20.3344 165.532 20.4907C165.22 20.5948 164.96 20.7511 164.752 20.9594C164.543 21.1676 164.335 21.3759 164.231 21.6363C164.127 21.8966 164.023 22.157 164.023 22.4694C164.023 22.834 164.127 23.1985 164.284 23.5109C164.439 23.8233 164.7 24.0837 165.012 24.292C165.324 24.5524 165.688 24.7607 166.104 25.021C166.52 25.2294 166.989 25.4897 167.509 25.75C168.081 26.0625 168.601 26.3229 169.121 26.6353C169.641 26.8957 170.057 27.2601 170.474 27.5726C170.838 27.9371 171.149 28.3016 171.41 28.7703C171.618 29.1868 171.774 29.7596 171.774 30.3846C171.774 30.9053 171.67 31.426 171.462 31.8946C171.253 32.3633 170.941 32.7799 170.526 33.1444C170.11 33.5089 169.641 33.7692 169.121 33.9776C168.601 34.1859 167.977 34.29 167.301 34.29C167.04 34.29 166.832 34.29 166.677 34.29C166.52 34.29 166.312 34.29 166.157 34.2379C166 34.2379 165.844 34.1859 165.636 34.1338C165.48 34.0818 165.272 34.0296 165.012 33.9255C164.856 33.8734 164.7 33.8214 164.492 33.7692C164.284 33.7172 164.18 33.6651 164.023 33.6131C163.868 33.561 163.764 33.561 163.66 33.5089C163.556 33.5089 163.503 33.4568 163.452 33.4568C163.295 33.4568 163.139 33.5089 163.035 33.6131C162.931 33.7172 162.88 33.9255 162.827 34.2379H162.464V29.3951H162.827C162.931 29.9159 163.035 30.3325 163.139 30.749C163.243 31.1136 163.399 31.426 163.556 31.6864C163.711 31.9468 163.919 32.155 164.127 32.3633C164.388 32.5716 164.647 32.7799 164.96 32.9361C165.272 33.0923 165.584 33.1965 165.948 33.3007C166.312 33.4048 166.677 33.4568 167.04 33.4568C167.457 33.4568 167.873 33.4048 168.237 33.2486C168.601 33.1444 168.862 32.9361 169.121 32.7279C169.382 32.5196 169.537 32.2592 169.694 31.9988C169.798 31.7385 169.902 31.426 169.902 31.1136C169.902 30.6449 169.798 30.2804 169.641 29.9679C169.433 29.6555 169.225 29.3951 168.862 29.1348C168.497 28.8744 168.185 28.6661 167.769 28.4579C167.352 28.2496 166.885 27.9892 166.416 27.7288C165.896 27.4164 165.376 27.104 164.908 26.8436C164.439 26.5833 163.972 26.2707 163.607 25.9063C163.243 25.5938 162.931 25.1772 162.723 24.7607C162.515 24.3441 162.36 23.8233 162.36 23.1985C162.36 22.6777 162.464 22.2091 162.672 21.7925C162.88 21.3759 163.192 20.9594 163.556 20.5948C163.919 20.2303 164.335 19.97 164.856 19.7616C165.376 19.5533 165.896 19.4492 166.52 19.4492C167.248 19.4492 168.029 19.6575 168.913 20.022C169.278 20.1783 169.59 20.2824 169.745 20.2824C169.902 20.2824 170.057 20.2303 170.214 20.1261C170.37 20.022 170.422 19.8137 170.474 19.4492H170.786Z" fill="currentColor" stroke="currentColor" strokeWidth="0.133799" strokeMiterlimit="10" />
                </g>
                <defs>
                    <clipPath id="clip0_2_968">
                        <rect width="173" height="36" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        );
    }
}
