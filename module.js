export default function absVideo(t) {
    if (typeof (t) === 'object') {
        var premium = t;
        const def = {
            http: "http://",
            https: "https://",
            host: "api.abdursoft.com/",
            icons: {
                playBtn:
                    `<svg width="25px" height="25px"  viewBox="0 0 24 24"><path fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>`,
                adsPlayBtn:
                    `<svg width="65px" height="65px" viewBox="-0.5 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" fill="#ff0000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322" id="play-[#1003]"> </path> </g> </g> </g> </g></svg>`,
                pauseBtn:
                    `<svg  width="25px" height="25px" viewBox="0 0 24 24"><path fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" d="M14,19H18V5H14M6,19H10V5H6V19Z"></path></svg>`,
                fullScreenEnter:
                    `<svg  width="25px" height="25px" viewBox="0 0 24 24"><path fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></svg>`,
                fullScreenOut:
                    `<svg  width="27px" height="27px" viewBox="0 0 24 24"><path fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></svg>`,
                rightArrow:
                    `<svg version="1.1" dth="12px" fill="#fff" height="12px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 59.414 59.414" style="enable-background:new 0 0 59.414 59.414;" xml:space="preserve"><polygon points="15.561,0 14.146,1.414 42.439,29.707 14.146,58 15.561,59.414 45.268,29.707 "/></svg>`,
                muteBtn:
                    `<svg width="25px" height="25px" viewBox="0 0 24 24"><path fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"></path></svg>`,
                soundLower:
                    `<svg width="25px" height="25px" viewBox="0 0 24 24"><path fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"></path></svg>`,
                soundHigher:
                    `<svg width="25px" height="25px" viewBox="0 0 24 24"><path fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"></path></svg>`,
                moveForward: `<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.4314 16.9203H12.1414C11.7314 16.9203 11.3914 16.5803 11.3914 16.1703C11.3914 15.7603 11.7314 15.4203 12.1414 15.4203H14.4314C14.8614 15.4203 15.2114 15.0703 15.2114 14.6403C15.2114 14.2103 14.8614 13.8603 14.4314 13.8603H12.1414C11.9014 13.8603 11.6714 13.7403 11.5314 13.5503C11.3914 13.3603 11.3514 13.1003 11.4314 12.8703L12.1914 10.5803C12.2914 10.2703 12.5814 10.0703 12.9014 10.0703H15.9614C16.3714 10.0703 16.7114 10.4103 16.7114 10.8203C16.7114 11.2303 16.3714 11.5703 15.9614 11.5703H13.4414L13.1814 12.3603H14.4314C15.6914 12.3603 16.7114 13.3803 16.7114 14.6403C16.7114 15.9003 15.6814 16.9203 14.4314 16.9203Z" fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}"></path> <path d="M9.54041 16.9208C9.13041 16.9208 8.79041 16.5808 8.79041 16.1708V12.7808L8.60041 13.0008C8.32041 13.3108 7.85041 13.3308 7.54041 13.0608C7.24041 12.7808 7.21041 12.3108 7.49041 12.0008L8.99041 10.3308C9.20041 10.1008 9.53041 10.0208 9.82041 10.1308C10.1104 10.2408 10.3004 10.5208 10.3004 10.8308V16.1808C10.2904 16.5908 9.96041 16.9208 9.54041 16.9208Z" fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}"></path> <path d="M19.6916 7.3488C19.4416 7.0188 18.9716 6.9488 18.6416 7.1988C18.3116 7.4488 18.2416 7.9188 18.4916 8.2488C19.5716 9.6888 20.1416 11.3688 20.1416 13.1088C20.1416 17.5988 16.4916 21.2488 12.0016 21.2488C7.51156 21.2488 3.86156 17.5988 3.86156 13.1088C3.86156 8.6188 7.51156 4.9788 12.0016 4.9788C12.5816 4.9788 13.1716 5.0488 13.8116 5.1988C13.8416 5.2088 13.8716 5.1988 13.9016 5.1988C13.9316 5.1988 13.9516 5.2188 13.9716 5.2188C14.0016 5.2188 14.0216 5.2088 14.0516 5.2088C14.0816 5.2088 14.1116 5.1988 14.1516 5.1888C14.2116 5.1788 14.2616 5.1488 14.3116 5.1288C14.3416 5.1088 14.3716 5.0988 14.4016 5.0788C14.4116 5.0688 14.4316 5.0688 14.4416 5.0588C14.4716 5.0388 14.4816 5.0088 14.5016 4.9888C14.5416 4.9488 14.5716 4.9188 14.6016 4.8688C14.6316 4.8288 14.6416 4.7788 14.6616 4.7288C14.6716 4.6988 14.6916 4.6688 14.7016 4.6388C14.7016 4.6188 14.7016 4.6088 14.7016 4.5888C14.7116 4.5388 14.7116 4.4888 14.7016 4.4388C14.7016 4.3888 14.7016 4.3488 14.6916 4.2988C14.6816 4.2588 14.6616 4.2188 14.6416 4.1688C14.6216 4.1188 14.6016 4.0688 14.5716 4.0288C14.5716 4.0188 14.5716 4.0088 14.5616 3.9988L12.5816 1.5288C12.3216 1.2088 11.8516 1.1488 11.5316 1.4088C11.2116 1.6688 11.1616 2.1388 11.4116 2.4588L12.2316 3.4788C12.1516 3.4788 12.0716 3.4688 11.9916 3.4688C6.68156 3.4688 2.35156 7.7888 2.35156 13.1088C2.35156 18.4288 6.67156 22.7488 11.9916 22.7488C17.3116 22.7488 21.6316 18.4288 21.6316 13.1088C21.6416 11.0388 20.9616 9.0488 19.6916 7.3488Z" fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}"></path> </g></svg>`,
                moveBackward: `<svg viewBox="0 0 24 24" width="25px" height="25px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.96 10.8301H12.9L12.14 13.1201H14.43C15.27 13.1201 15.96 13.8001 15.96 14.6501C15.96 15.4901 15.28 16.1801 14.43 16.1801H12.14" stroke="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.54004 16.17V10.8301L8.04004 12.5001" stroke="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.02 4.46997L12 2" stroke="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.90997 7.79999C3.79997 9.27999 3.10999 11.11 3.10999 13.11C3.10999 18.02 7.09 22 12 22C16.91 22 20.89 18.02 20.89 13.11C20.89 8.19999 16.91 4.21997 12 4.21997C11.32 4.21997 10.66 4.31002 10.02 4.46002" stroke="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
                playlist:
                    `<svg fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13 16.493C13 18.427 14.573 20 16.507 20s3.507-1.573 3.507-3.507c0-.177-.027-.347-.053-.517H20V6h2V4h-3a1 1 0 0 0-1 1v8.333a3.465 3.465 0 0 0-1.493-.346A3.51 3.51 0 0 0 13 16.493zM2 5h14v2H2z"></path><path d="M2 9h14v2H2zm0 4h9v2H2zm0 4h9v2H2z"></path></g></svg>`,
                backBtn:
                    `<svg version="1.1" id="Capa_1" width="12px" height="12px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 197.402 197.402" style="enable-background:new 0 0 197.402 197.402;" xml:space="preserve"> <g> <g> <g> <polygon style="fill:${premium.iconColor !== undefined ? premium.iconColor : '#fff'};" points="146.883,197.402 45.255,98.698 146.883,0 152.148,5.418 56.109,98.698 152.148,191.98  "/> </g> </g> </g> </svg>`,
                settings:
                    `<svg width="18px" height="18px" fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 93.5 93.5" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M93.5,40.899c0-2.453-1.995-4.447-4.448-4.447H81.98c-0.74-2.545-1.756-5.001-3.035-7.331l4.998-5 c0.826-0.827,1.303-1.973,1.303-3.146c0-1.19-0.462-2.306-1.303-3.146L75.67,9.555c-1.613-1.615-4.673-1.618-6.29,0l-5,5 c-2.327-1.28-4.786-2.296-7.332-3.037v-7.07C57.048,1.995,55.053,0,52.602,0H40.899c-2.453,0-4.447,1.995-4.447,4.448v7.071 c-2.546,0.741-5.005,1.757-7.333,3.037l-5-5c-1.68-1.679-4.609-1.679-6.288,0L9.555,17.83c-1.734,1.734-1.734,4.555,0,6.289 l4.999,5c-1.279,2.33-2.295,4.788-3.036,7.333h-7.07C1.995,36.452,0,38.447,0,40.899V52.6c0,2.453,1.995,4.447,4.448,4.447h7.071 c0.74,2.545,1.757,5.003,3.036,7.332l-4.998,4.999c-0.827,0.827-1.303,1.974-1.303,3.146c0,1.189,0.462,2.307,1.302,3.146 l8.274,8.273c1.614,1.615,4.674,1.619,6.29,0l5-5c2.328,1.279,4.786,2.297,7.333,3.037v7.071c0,2.453,1.995,4.448,4.447,4.448 h11.702c2.453,0,4.446-1.995,4.446-4.448V81.98c2.546-0.74,5.005-1.756,7.332-3.037l5,5c1.681,1.68,4.608,1.68,6.288,0 l8.275-8.273c1.734-1.734,1.734-4.555,0-6.289l-4.998-5.001c1.279-2.329,2.295-4.787,3.035-7.332h7.071 c2.453,0,4.448-1.995,4.448-4.446V40.899z M62.947,46.75c0,8.932-7.266,16.197-16.197,16.197c-8.931,0-16.197-7.266-16.197-16.197 c0-8.931,7.266-16.197,16.197-16.197C55.682,30.553,62.947,37.819,62.947,46.75z"></path> </g> </g> </g></svg>`,
                snapIcon:
                    `<svg width="22px" fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" height="22px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="ðŸ”-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_camera_28_filled" fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" fill-rule="nonzero"> <path d="M16.9510797,2.50304787 C17.7274884,2.50304787 18.4490393,2.9033378 18.8600157,3.56205529 L20.3810589,6 L22.75,6 C24.5449254,6 26,7.45507456 26,9.25 L26,21.75 C26,23.5449254 24.5449254,25 22.75,25 L5.25,25 C3.45507456,25 2,23.5449254 2,21.75 L2,9.25 C2,7.45507456 3.45507456,6 5.25,6 L7.81851226,6 L9.2010861,3.62210494 C9.60389995,2.92930357 10.3448058,2.50304787 11.1462,2.50304787 L16.9510797,2.50304787 Z M14,9.50268415 C10.9624339,9.50268415 8.5,11.965118 8.5,15.0026842 C8.5,18.0402503 10.9624339,20.5026842 14,20.5026842 C17.0375661,20.5026842 19.5,18.0402503 19.5,15.0026842 C19.5,11.965118 17.0375661,9.50268415 14,9.50268415 Z M14,11.0026842 C16.209139,11.0026842 18,12.7935452 18,15.0026842 C18,17.2118232 16.209139,19.0026842 14,19.0026842 C11.790861,19.0026842 10,17.2118232 10,15.0026842 C10,12.7935452 11.790861,11.0026842 14,11.0026842 Z" id="ðŸŽ¨-Color"></path> </g> </g></svg>`,
                capCrossIcon:
                    `<svg version="1.1" fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve"> <polygon points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161  11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 " /> </svg>`,
                buffuerLoader:
                    `<svg class="waitSVG" fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" x="0px" y="0px" width="100px" height="100px" viewBox="5 5 40 40"><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(39.9522 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg>`,
                pictureInPicture:
                    `<svg viewBox="0 0 24 24" width="25px" height="25px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C17.7712 3 19.6569 3 20.8284 4.17157C22 5.34315 22 7.22876 22 11" stroke="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" stroke-width="1.5" stroke-linecap="round"></path> <path d="M13 17C13 15.1144 13 14.1716 13.5858 13.5858C14.1716 13 15.1144 13 17 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H17C15.1144 21 14.1716 21 13.5858 20.4142C13 19.8284 13 18.8856 13 17Z" stroke="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" stroke-width="1.5"></path> </g></svg>`,
                shareIcon:
                    `<svg viewBox="0 0 24 24" width="23px" height="23px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}"></path> </g></svg>`,
                shareCloseIcon:
                    `<svg viewBox="0 0 24 24" width="30px" height="30px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" stroke-width="1.5"></path> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`,
                facebookIcon:
                    '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)"></circle> <path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7208" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse"> <stop stop-color="#18ACFE"></stop> <stop offset="1" stop-color="#0163E0"></stop> </linearGradient> </defs> </g></svg>',
                twitterIcon:
                    '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="24" cy="24" r="20" fill="#1DA1F2"></circle> <path fill-rule="evenodd" clip-rule="evenodd" d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z" fill="white"></path> </g></svg>',
                redditIcon:
                    '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 2C8.27812 2 2 8.27812 2 16C2 23.7219 8.27812 30 16 30C23.7219 30 30 23.7219 30 16C30 8.27812 23.7219 2 16 2Z" fill="#FC471E"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0193 8.90951C20.0066 8.98984 20 9.07226 20 9.15626C20 10.0043 20.6716 10.6918 21.5 10.6918C22.3284 10.6918 23 10.0043 23 9.15626C23 8.30819 22.3284 7.6207 21.5 7.6207C21.1309 7.6207 20.7929 7.7572 20.5315 7.98359L16.6362 7L15.2283 12.7651C13.3554 12.8913 11.671 13.4719 10.4003 14.3485C10.0395 13.9863 9.54524 13.7629 9 13.7629C7.89543 13.7629 7 14.6796 7 15.8103C7 16.5973 7.43366 17.2805 8.06967 17.6232C8.02372 17.8674 8 18.1166 8 18.3696C8 21.4792 11.5817 24 16 24C20.4183 24 24 21.4792 24 18.3696C24 18.1166 23.9763 17.8674 23.9303 17.6232C24.5663 17.2805 25 16.5973 25 15.8103C25 14.6796 24.1046 13.7629 23 13.7629C22.4548 13.7629 21.9605 13.9863 21.5997 14.3485C20.2153 13.3935 18.3399 12.7897 16.2647 12.7423L17.3638 8.24143L20.0193 8.90951ZM12.5 18.8815C13.3284 18.8815 14 18.194 14 17.3459C14 16.4978 13.3284 15.8103 12.5 15.8103C11.6716 15.8103 11 16.4978 11 17.3459C11 18.194 11.6716 18.8815 12.5 18.8815ZM19.5 18.8815C20.3284 18.8815 21 18.194 21 17.3459C21 16.4978 20.3284 15.8103 19.5 15.8103C18.6716 15.8103 18 16.4978 18 17.3459C18 18.194 18.6716 18.8815 19.5 18.8815ZM12.7773 20.503C12.5476 20.3462 12.2372 20.4097 12.084 20.6449C11.9308 20.8802 11.9929 21.198 12.2226 21.3548C13.3107 22.0973 14.6554 22.4686 16 22.4686C17.3446 22.4686 18.6893 22.0973 19.7773 21.3548C20.0071 21.198 20.0692 20.8802 19.916 20.6449C19.7628 20.4097 19.4524 20.3462 19.2226 20.503C18.3025 21.1309 17.1513 21.4449 16 21.4449C15.3173 21.4449 14.6345 21.3345 14 21.1137C13.5646 20.9621 13.1518 20.7585 12.7773 20.503Z" fill="white"></path> </g></svg>',
                whatsapIcon:
                    '<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#FFFFFF;} .st1{fill:#3A559F;} .st2{fill:#F4F4F4;} .st3{fill:#FF0084;} .st4{fill:#0063DB;} .st5{fill:#00ACED;} .st6{fill:#FFEC06;} .st7{fill:#FF0000;} .st8{fill:#25D366;} .st9{fill:#0088FF;} .st10{fill:#314358;} .st11{fill:#EE6996;} .st12{fill:#01AEF3;} .st13{fill:#FFFEFF;} .st14{fill:#F06A35;} .st15{fill:#00ADEF;} .st16{fill:#1769FF;} .st17{fill:#1AB7EA;} .st18{fill:#6001D1;} .st19{fill:#E41214;} .st20{fill:#05CE78;} .st21{fill:#7B519C;} .st22{fill:#FF4500;} .st23{fill:#00F076;} .st24{fill:#FFC900;} .st25{fill:#00D6FF;} .st26{fill:#FF3A44;} .st27{fill:#FF6A36;} .st28{fill:#0061FE;} .st29{fill:#F7981C;} .st30{fill:#EE1B22;} .st31{fill:#EF3561;} .st32{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;} .st33{fill:#0097D3;} .st34{fill:#01308A;} .st35{fill:#019CDE;} .st36{fill:#FFD049;} .st37{fill:#16A05D;} .st38{fill:#4486F4;} .st39{fill:none;} .st40{fill:#34A853;} .st41{fill:#4285F4;} .st42{fill:#FBBC05;} .st43{fill:#EA4335;} </style> <path class="st8" d="M17,0C8.7,0,2,6.7,2,15c0,3.4,1.1,6.6,3.2,9.2l-2.1,6.4c-0.1,0.4,0,0.8,0.3,1.1C3.5,31.9,3.8,32,4,32 c0.1,0,0.3,0,0.4-0.1l6.9-3.1C13.1,29.6,15,30,17,30c8.3,0,15-6.7,15-15S25.3,0,17,0z"></path> <path class="st0" d="M25.7,20.5c-0.4,1.2-1.9,2.2-3.2,2.4C22.2,23,21.9,23,21.5,23c-0.8,0-2-0.2-4.1-1.1c-2.4-1-4.8-3.1-6.7-5.8 L10.7,16C10.1,15.1,9,13.4,9,11.6c0-2.2,1.1-3.3,1.5-3.8c0.5-0.5,1.2-0.8,2-0.8c0.2,0,0.3,0,0.5,0c0.7,0,1.2,0.2,1.7,1.2l0.4,0.8 c0.3,0.8,0.7,1.7,0.8,1.8c0.3,0.6,0.3,1.1,0,1.6c-0.1,0.3-0.3,0.5-0.5,0.7c-0.1,0.2-0.2,0.3-0.3,0.3c-0.1,0.1-0.1,0.1-0.2,0.2 c0.3,0.5,0.9,1.4,1.7,2.1c1.2,1.1,2.1,1.4,2.6,1.6l0,0c0.2-0.2,0.4-0.6,0.7-0.9l0.1-0.2c0.5-0.7,1.3-0.9,2.1-0.6 c0.4,0.2,2.6,1.2,2.6,1.2l0.2,0.1c0.3,0.2,0.7,0.3,0.9,0.7C26.2,18.5,25.9,19.8,25.7,20.5z"></path> </g></svg>',
                linkedinIcon:
                    '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="14" fill="#1275B1"></rect> <path d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z" fill="white"></path> <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white"></path> <path d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z" fill="white"></path> </g></svg>',
                upArrow:
                    `<svg width="25px" height="25px" viewBox="0 0 48 48" fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" xmlns="http://www.w3.org/2000/svg"> <rect width="48" height="48" fill="none" fill-opacity="0.01"/> <path d="M16 40H6C4.89543 40 4 39.1046 4 38V10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16" stroke="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/> <rect x="24" y="24" width="20" height="16" rx="2" fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" stroke="none" stroke-width="0" stroke-linejoin="round"/> </svg>`,
                castIcon: `<svg fill="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}" width="25px" height="25px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="${premium.iconColor !== undefined ? premium.iconColor : '#fff'}"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 6 6 C 4.897 6 4 6.897 4 8 L 4 12 L 6 12 L 6 8 L 26 8 L 26 24 L 18 24 L 18 26 L 26 26 C 27.103 26 28 25.103 28 24 L 28 8 C 28 6.897 27.103 6 26 6 L 6 6 z M 4 14 L 4 16 C 9.169375 16 13.436179 19.942273 13.949219 24.978516 C 13.983421 25.314265 14 25.655375 14 26 L 16 26 C 16 19.383 10.617 14 4 14 z M 4 18 L 4 20 C 7.309 20 10 22.691 10 26 L 12 26 C 12 21.589 8.411 18 4 18 z M 4 22 L 4 26 L 8 26 C 8 23.791 6.209 22 4 22 z"></path></g></svg>`,
                loaders: [
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><circle cx="12" cy="3" r="1" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinners12DotsScaleRotate0" attributeName="r" begin="0;svgSpinners12DotsScaleRotate2.end-0.5s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="16.5" cy="4.21" r="1" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinners12DotsScaleRotate1" attributeName="r" begin="svgSpinners12DotsScaleRotate0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="7.5" cy="4.21" r="1" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinners12DotsScaleRotate2" attributeName="r" begin="svgSpinners12DotsScaleRotate4.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="19.79" cy="7.5" r="1" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinners12DotsScaleRotate3" attributeName="r" begin="svgSpinners12DotsScaleRotate1.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="4.21" cy="7.5" r="1" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinners12DotsScaleRotate4" attributeName="r" begin="svgSpinners12DotsScaleRotate6.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="21" cy="12" r="1" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinners12DotsScaleRotate5" attributeName="r" begin="svgSpinners12DotsScaleRotate3.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="3" cy="12" r="1" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinners12DotsScaleRotate6" attributeName="r" begin="svgSpinners12DotsScaleRotate8.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="19.79" cy="16.5" r="1" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinners12DotsScaleRotate7" attributeName="r" begin="svgSpinners12DotsScaleRotate5.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="4.21" cy="16.5" r="1" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinners12DotsScaleRotate8" attributeName="r" begin="svgSpinners12DotsScaleRotatea.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="16.5" cy="19.79" r="1" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinners12DotsScaleRotate9" attributeName="r" begin="svgSpinners12DotsScaleRotate7.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="7.5" cy="19.79" r="1" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinners12DotsScaleRotatea" attributeName="r" begin="svgSpinners12DotsScaleRotateb.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="12" cy="21" r="1" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinners12DotsScaleRotateb" attributeName="r" begin="svgSpinners12DotsScaleRotate9.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><animateTransform attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="360 12 12;0 12 12"/></g></svg>`,
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>`,
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="4" cy="12" r="0" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate fill="freeze" attributeName="r" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/><animate id="svgSpinners3DotsMove0" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove1" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove0.end" dur="0.001s" values="20;4"/></circle><circle cx="4" cy="12" r="3" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate fill="freeze" attributeName="cx" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/><animate id="svgSpinners3DotsMove2" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove3" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove2.end" dur="0.001s" values="20;4"/><animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/></circle><circle cx="12" cy="12" r="3" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate fill="freeze" attributeName="cx" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/><animate id="svgSpinners3DotsMove4" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove5" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove4.end" dur="0.001s" values="20;4"/><animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/></circle><circle cx="20" cy="12" r="3" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinners3DotsMove6" fill="freeze" attributeName="r" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove7" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove6.end" dur="0.001s" values="20;4"/><animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/></circle></svg>`,
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="2.8" height="12" x="1" y="6" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect><rect width="2.8" height="12" x="5.8" y="6" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect><rect width="2.8" height="12" x="10.6" y="6" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinnersBarsScaleMiddle0" attributeName="y" begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"/><animate attributeName="height" begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect><rect width="2.8" height="12" x="15.4" y="6" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect><rect width="2.8" height="12" x="20.2" y="6" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinnersBarsScaleMiddle1" attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect></svg>`,
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="10" height="10" x="1" y="1" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}" rx="1"><animate id="svgSpinnersBlocksShuffle30" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle3b.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle31" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle38.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle32" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle39.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle33" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle3a.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="1" y="13" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}" rx="1"><animate id="svgSpinnersBlocksShuffle34" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle30.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle35" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle31.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle36" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle32.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle37" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle33.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="13" y="13" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}" rx="1"><animate id="svgSpinnersBlocksShuffle38" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle34.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle39" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle35.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle3a" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle36.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle3b" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle37.end" dur="0.2s" values="1;13"/></rect></svg>`,
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}" d="M20.27,4.74a4.93,4.93,0,0,1,1.52,4.61,5.32,5.32,0,0,1-4.1,4.51,5.12,5.12,0,0,1-5.2-1.5,5.53,5.53,0,0,0,6.13-1.48A5.66,5.66,0,0,0,20.27,4.74ZM12.32,11.53a5.49,5.49,0,0,0-1.47-6.2A5.57,5.57,0,0,0,4.71,3.72,5.17,5.17,0,0,1,9.53,2.2,5.52,5.52,0,0,1,13.9,6.45,5.28,5.28,0,0,1,12.32,11.53ZM19.2,20.29a4.92,4.92,0,0,1-4.72,1.49,5.32,5.32,0,0,1-4.34-4.05A5.2,5.2,0,0,1,11.6,12.5a5.6,5.6,0,0,0,1.51,6.13A5.63,5.63,0,0,0,19.2,20.29ZM3.79,19.38A5.18,5.18,0,0,1,2.32,14a5.3,5.3,0,0,1,4.59-4,5,5,0,0,1,4.58,1.61,5.55,5.55,0,0,0-6.32,1.69A5.46,5.46,0,0,0,3.79,19.38ZM12.23,12a5.11,5.11,0,0,0,3.66-5,5.75,5.75,0,0,0-3.18-6,5,5,0,0,1,4.42,2.3,5.21,5.21,0,0,1,.24,5.92A5.4,5.4,0,0,1,12.23,12ZM11.76,12a5.18,5.18,0,0,0-3.68,5.09,5.58,5.58,0,0,0,3.19,5.79c-1,.35-2.9-.46-4-1.68A5.51,5.51,0,0,1,11.76,12ZM23,12.63a5.07,5.07,0,0,1-2.35,4.52,5.23,5.23,0,0,1-5.91.2,5.24,5.24,0,0,1-2.67-4.77,5.51,5.51,0,0,0,5.45,3.33A5.52,5.52,0,0,0,23,12.63ZM1,11.23a5,5,0,0,1,2.49-4.5,5.23,5.23,0,0,1,5.81-.06,5.3,5.3,0,0,1,2.61,4.74A5.56,5.56,0,0,0,6.56,8.06,5.71,5.71,0,0,0,1,11.23Z"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>`,
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="0" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinnersPulse30" fill="freeze" attributeName="r" begin="0;svgSpinnersPulse32.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/><animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersPulse32.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></circle><circle cx="12" cy="12" r="0" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinnersPulse31" fill="freeze" attributeName="r" begin="svgSpinnersPulse30.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulse30.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></circle><circle cx="12" cy="12" r="0" fill="${premium.loader !== undefined ? premium.loader[1] : '#fff'}"><animate id="svgSpinnersPulse32" fill="freeze" attributeName="r" begin="svgSpinnersPulse30.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulse30.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></circle></svg>`
                ]
            },
            fn: {
                create: function create(element) {
                    return document.createElement(element);
                },
                class: function getClass(element) {
                    return document.querySelector(`.${element}`);
                },
                classAll: function getClassAll(element) {
                    return document.querySelectorAll(`.${element}`);
                },
                id: function getID(element) {
                    return document.getElementById(element);
                },
                addClass: function addClass(element, className) {
                    element.classList.add(className);
                },
                removeClass: function removeClass(element, className) {
                    element.classList.remove(className);
                },
                html: function addHtml(element, html) {
                    element.innerHTML = html;
                },
                toggleClass: function toggleClass(element, className) {
                    if (element.classList.contain(className) == true) {
                        def.fn.removeClass(element, className);
                    } else {
                        def.fn.addClass(element, className);
                    }
                },
                append: function append(parent, child) {
                    parent.appendChild(child);
                },
                remove: function remove(parent, child) {
                    parent.removeChild(child);
                },
                fontColor: function setColor(element, fill = false) {
                    let colors;
                    if (premium.fontColor == "" || premium.fontColor == undefined) {
                        colors = "#fff";
                    } else {
                        colors = premium.fontColor;
                    }
                    fill == false
                        ? (element.style.color = colors)
                        : (element.style.fill = colors);
                },
                hoverColor: function hover(element, fill = false, mute = false) {
                    let hColors;
                    if (premium.hoverColor == "" || premium.hoverColor == undefined) {
                        hColors = "red";
                    } else {
                        hColors = premium.hoverColor;
                    }
                    element.addEventListener("mouseover", () => {
                        fill == false
                            ? (element.style.color = hColors)
                            : (element.style.fill = hColors);
                    });
                    element.addEventListener("mouseleave", () => {
                        fill == false
                            ? def.fn.fontColor(element, false)
                            : def.fn.fontColor(element, true);
                        def.fn.activeColor();
                    });
                    element.addEventListener("mouleenter", () => {
                        fill == false
                            ? (element.style.color = hColors)
                            : (element.style.fill = hColors);
                    });
                },
                activeColor: function activeColor() {
                    if (isMute == true) {
                        muteSvg.style.fill = premium.hoverColor;
                    } else {
                        def.fn.fontColor(muteSvg, true);
                    }
                    if (isLoud == true) {
                        loudSvg.style.fill = premium.hoverColor;
                    } else {
                        def.fn.fontColor(loudSvg, true);
                    }
                },
                css: function css(element, css = {}) {
                    let Scss = "";
                    Object.entries(css).forEach((entry) => {
                        const [key, value] = entry;
                        Scss += `${this.styleFormate(key)}:${value};`;
                    });
                    element.style.cssText = Scss;
                },
                setCss: function setCss(css) {
                    document.head.insertAdjacentHTML("beforeend", `<style>${css}</style>`);
                },
                getCss: function getCss(objectName,keyName){
                   return typeof objectName === 'object' ? objectName : def.css[keyName]
                },
                attribute: function attr(element, attr = {}) {
                    Object.entries(attr).forEach((entry) => {
                        const [key, value] = entry;
                        element.setAttribute(key, value);
                    });
                },
                remove_attribute: function attrRemove(element, attr = {}) {
                    Object.entries(attr).forEach((entry) => {
                        const [key, value] = entry;
                        element.removeAttribute(key);
                    });
                },
                event: function listener(element, event = {}) {
                    Object.entries(event).forEach((entry) => {
                        const [key, value] = entry;
                        element.addEventListener(key, () => {
                            value;
                        }, false);
                    });
                },
                getAjax: function getAjax(url, data, callback) {
                    const response = fetch(url, {
                        method: 'get',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    });
                    callback(response.json());
                },
                postAjax: function postAjax(url, data, callback) {
                    const response = fetch(url, {
                        method: 'post',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    });
                    callback(response.json());
                },
                domain: function setDomain() {
                    let dom = window.location.host;
                    if (dom.indexOf(':') != '-1') {
                        let Dm = dom.split(':');
                        return Dm[0];
                    } else {
                        return dom;
                    }

                },
                styleFormate: function camelToKebabCase(str) {
                    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                  }
            },
            format: {
                mp3: {
                    codec: 'audio/mpeg',
                    flashCanPlay: true,
                    media: 'audio'
                },
                m4a: {
                    codec: 'audio/mp4; codecs="mp4a.40.2"',
                    flashCanPlay: true,
                    media: 'audio'
                },
                m3u8a: {
                    codec: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
                    flashCanPlay: false,
                    media: 'audio'
                },
                m3ua: {
                    codec: 'audio/mpegurl',
                    flashCanPlay: false,
                    media: 'audio'
                },
                m3u8: {
                    codec: 'audio/x-mpegurl',
                    flashCanPlay: false,
                    media: 'video'
                },
                oga: {
                    codec: 'audio/ogg; codecs="vorbis, opus"',
                    flashCanPlay: false,
                    media: 'audio'
                },
                flac: {
                    codec: 'audio/x-flac',
                    flashCanPlay: false,
                    media: 'audio'
                },
                wav: {
                    codec: 'audio/wav; codecs="1"',
                    flashCanPlay: false,
                    media: 'audio'
                },
                webma: {
                    codec: 'audio/webm; codecs="vorbis"',
                    flashCanPlay: false,
                    media: 'audio'
                },
                fla: {
                    codec: 'audio/x-flv',
                    flashCanPlay: true,
                    media: 'audio'
                },
                rtmpa: {
                    codec: 'audio/rtmp; codecs="rtmp"',
                    flashCanPlay: true,
                    media: 'audio'
                },
                m4v: {
                    codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
                    flashCanPlay: true,
                    media: 'video'
                },
                m3u8v: {
                    codec: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
                    flashCanPlay: false,
                    media: 'video'
                },
                m3uv: {
                    codec: 'audio/mpegurl',
                    flashCanPlay: false,
                    media: 'video'
                },
                ogv: {
                    codec: 'video/ogg; codecs="theora, vorbis"',
                    flashCanPlay: false,
                    media: 'video'
                },
                webmv: {
                    codec: 'video/webm; codecs="vorbis, vp8"',
                    flashCanPlay: false,
                    media: 'video'
                },
                flv: {
                    codec: 'video/x-flv',
                    flashCanPlay: true,
                    media: 'video'
                },
                rtmpv: {
                    codec: 'video/rtmp; codecs="rtmp"',
                    flashCanPlay: true,
                    media: 'video'
                }
            },
            css: {
                logoArea:{
                    position: "absolute",
                    width: '70px',
                    height: '65px',
                    top: "30px",
                    right: "30px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    zIndex: 999999
                },
                logo:{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    zIndex: 99999999,
                    overflow: "hidden"
                },
                pipControl: {
                    position: 'absolute',
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    color: "#fff",
                    padding: '5px',
                    top: '45%',
                    right: '20px',
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer',
                    display: 'flex',
                    zIndex: 999999,
                    fontSize: '20px',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                progress: {
                    width: "98%",
                    height: "3px",
                    position: "absolute",
                    bottom: "50px",
                    background: "#f9f9f9",
                    left: '1%',
                    right: '1%',
                    zIndex: 999999,
                    borderRadius: '4px',
                    cursor: "pointer",
                    overflow: 'hidden',
                    transition: "all 0.3s"
                },
                progressBuffer: {
                    width: '100%',
                    height: '100%',
                    background: 'darkgray',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    cursor: 'pointer',
                    zIndex: -2
                },
                progressTimeline: {
                    position: 'absolute',
                    width: 0,
                    height: '100%',
                    top: 0,
                    left: 0,
                    background: 'red',
                    cursor: 'pointer'
                },
                progressTooltip: {
                    width: 'auto',
                    height: '18px',
                    background: '#fff',
                    position: 'absolute',
                    bottom: '60px',
                    left: 0,
                    cursor: 'pointer',
                    zIndex: 999999,
                    color: '#000',
                    borderRadius: '8px',
                    padding: '4px 8px',
                    display: 'none',
                    fontSize: '12px',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                durationArea: {
                    display: 'flex',
                    width: '98%',
                    position: 'absolute',
                    left: '1%',
                    right: '1%',
                    bottom: '52px',
                    zIndex: 99999,
                    alignItems: 'center',
                    justifyContent: 'space-between'
                },
                playPauseControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: "#fff",
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                volumeContainer: {
                    width: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0px 4px'
                },
                volumeControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: "#fff",
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                volumeSliderArea: {
                    width: '0px',
                    height: '5px',
                    background: 'gray',
                    cursor: 'pointer',
                    transition: '0.5s',
                    marginLeft: '10px',
                    position: 'relative'
                },
                volumeSlider: {
                    width: '0px',
                    height: '5px',
                    background: 'red',
                    cursor: 'pointer',
                    transition: '0.5s',
                    position: 'absolute'
                },
                castControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: "#fff",
                    padding: '3px',
                    display: 'none',
                    width: '30px',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    textAlign: 'center'
                },
                backwardControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: "#fff",
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                forwardControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: "#fff",
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                shareControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: "#fff",
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                settingsControl: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: "#fff",
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                settingsOptions: {
                    width: '160px',
                    color: '#fff',
                    position: 'absolute',
                    bottom: '60px',
                    right: '12px',
                    padding: '2px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    transition: '0.5s',
                    zIndex: 99999999
                },
                settingsOptionBefore: {
                    width: '100%',
                    height: 'auto',
                    background: 'rgba(0,0,0,0.3)',
                    color: '#fff',
                    position: 'absolute',
                    padding: '2px',
                    bottom: 0,
                    left: 0,
                    borderRadius: '4px',
                    display: 'none',
                    alignItems: 'center',
                    flexDirection: 'column',
                    transition: '0.5s'
                },
                itemQuality: {
                    width: '100%',
                    height: '27px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '12px',
                },
                itemPlayback: {
                    width: '100%',
                    height: '27px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '12px',
                },
                itemSubtitle: {
                    width: '100%',
                    height: '27px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '12px',
                },
                itemAudio: {
                    width: '100%',
                    height: '27px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '12px',
                },
                itemLoop: {
                    width: '100%',
                    height: '27px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '12px'
                },
                settingsBack: {
                    width: '100%',
                    height: '27px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '12px'
                },
                settingsOptionAfter: {
                    width: '100%',
                    height: 'auto',
                    background: 'rgba(0,0,0,0.8)',
                    color: '#fff',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    borderRadius: '4px',
                    display: 'none',
                    alignItems: 'center',
                    flexDirection: 'column',
                    transition: '0.5s'
                },
                playlistContainerBox: {
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: "#fff",
                    width: '170px',
                    height: 'calc(100% - 60px)',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    display: 'flex',
                    transition: 'all 0.5s each',
                    overflow: 'hidden',
                    maxHeight: 'calc(100% - 60px)',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'column'
                },
                playlistContainer: {
                    background: 'rgba(0,0,0,0.41)',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: "#fff",
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    display: 'flex',
                    transition: 'all 0.5s',
                    marginRight: '-280px',
                    maxHeight: '100%',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    zIndex: 999999,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'column'
                },
                playlistController: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    display: 'none',
                    fontSize: '20px',
                    color: "#fff",
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                screenController: {
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    fontSize: '20px',
                    color: "#fff",
                    padding: '3px',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                settingsBack: {
                    width: '90%',
                    height: '20px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '12px',
                    margin: '5px 4px'
                },
                shareClose: {
                    width: '40px',
                    height: '40px',
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: '#fff',
                    display: 'flex',
                    border: 'none',
                    cursor: 'pointer',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    borderRadius: '10px',
                    textAlign: 'center'
                }
            }
        };

        var device = getDevice();
        var trackStatus = undefined,
            subtitles = undefined,
            trackCues = undefined,
            tracks = undefined,
            buttonArray = [],
            button = undefined,
            activeCC = undefined,
            cc_list = undefined,
            seeker = undefined,
            cueitem = undefined,
            maxDuration,
            currentTime = undefined,
            currentDuration = undefined,
            snap = undefined,
            snapClass = undefined,
            apiValue = undefined,
            activeApi = false,
            apiCall = 0,
            fileExtention = undefined,
            isYoutube = undefined,
            isVimeo = undefined,
            isFacebook = undefined,
            hlsFile = Array(),
            hlsItem = undefined,
            hlsSubtitle = undefined,
            hlsSubtitleUrl = Array(),
            hlsSubtitleType = Array(),
            hlsAudio = undefined,
            dashSubtitle = undefined,
            dashAudio = undefined,
            isLive = false,
            numberOfButtons = 0,
            allTrackLoaded = false,
            hls = undefined,
            vmPlayer = undefined,
            vmActive = false,
            vmDuration = undefined,
            vmCurrentTime = undefined,
            isSoundOpen = false,
            isControlOpen = false,
            isMute = false,
            isVast = false,
            isCast = false,
            isCastEnable = false,
            isMidroll = false,
            mouseMove = false,
            isPlayFalse = false,
            encrypt = premium.encrypt,
            player = undefined,
            xplayer = [],
            playerName,
            logoArea = undefined,
            playlist = [],
            playIndex = undefined,
            qualityIndex = undefined,
            speedIndex = undefined,
            m3uIndex = undefined,
            isLoop = undefined,
            activeQuality = undefined,
            activeSubtitle = undefined,
            activeAudio = undefined,
            activePlayback = undefined,
            activeLoop = undefined,
            youtubePlayer = undefined,
            dashPlayer = undefined,
            isPlaying = false,
            isVideoEnded = false,
            ytEvent = null,
            isMenu = true,
            player360 = undefined,
            video360 = undefined,
            isActiveAdd = undefined,
            hoverIndex = 999999999,
            normalIndex = 9999999,
            closeCounterNumber = 0,
            controlsBG = 'rgba(0,0,0,0.2)',
            ytQualityText = ["highres", "hd2160", "hd1440", "hd1080", "hd720", "large", "medium", "small", "tiny", "auto"],
            ytSpeed = ['0.25', '0.5', '0.75', '1', '1.25', '1.5', '1.75', '2'],
            ytQualityItem = '',
            currentEvent = {
                isPlaying: '',
                duration: '',
                currentTime: '',
                quality: [],
                qualityLabel: '',
                subtitle: [],
                audios: [],
                end: '',
                volume: '',
                mute: '',
                playback: '',
                mode: '',
                info: undefined,
                buffer: ''
            };

        let textCast = navigator.appVersion;
        let positionCast = textCast.indexOf("Chrome");
        if (positionCast > 0) {
            isCast = true;
        }
   
        let thisID = def.fn.id(premium.id);
        if(!thisID){
            console.log(`Player ID '${premium.id}' Not Found!`);
            return false;
        }
        def.fn.css(thisID, {
            'aspect-ratio': '16/9',
            background: 'rgba(0,0,0,0.8)',
            position: 'relative',
            width: '100%'
        });

        player = def.fn.create('absdiv');
        def.fn.css(player, {
            background: "rgba(0,0,0,1)",
            position: "absolute",
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: "flex",
            "flex-direction": "column",
            overflow: 'hidden'
        });
        def.fn.attribute(player, {
            'oncontextmenu': "return true",
            'id': 'absPlayer'
        });

        logoArea = def.fn.create('absdiv');
        def.fn.attribute(logoArea, {
            oncontextmenu: 'return false'
        });

        if (typeof premium.logo?.position === 'object') {
            console.log(premium.logo?.position)
            def.fn.css(logoArea, premium.logo?.position);
        } else {
            def.fn.css(logoArea, def.css.logoArea);
        }
        def.fn.append(player, logoArea);

        let logo = def.fn.create('img');
        def.fn.css(logo, typeof premium.logo?.css === 'object' ? premium.logo.css : def.css.logo);
        def.fn.attribute(logo, {
            oncontextmenu: "return false",
            src: premium.logo.url,
            alt: 'abdursoft abs video player'
        });
        premium.logo != '' ? def.fn.append(logoArea, logo) : ''

        let pipControl = def.fn.create('button');
        def.fn.css(pipControl, def.fn.getCss(premium.pipControl?.css, 'pipControl'));
        def.fn.html(pipControl, def.icons.pictureInPicture);
        premium.pip ? def.fn.append(player, pipControl) : ''

        let controls = def.fn.create('absdiv');
        def.fn.css(controls, {
            background: controlsBG,
            width: "100%",
            height: "50px",
            position: "absolute",
            left: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            zIndex: 9999999,
            transition: '0.5s'
        });
        def.fn.append(player, controls);

        let topControls = def.fn.create('absdiv');
        def.fn.css(topControls, {
            background: '#000',
            width: "100%",
            height: "0px",
            position: "absolute",
            left: 0,
            top: 0,
            display: "none",
            alignItems: "center",
            flexDirection: "column",
            zIndex: 99999,
            transition: '0.5s'
        });
        def.fn.append(player, topControls);
        def.fn.attribute(topControls, {
            oncontextmenu: 'return false'
        });

        let bottomControls = def.fn.create('absdiv');
        def.fn.css(bottomControls, {
            background: '#000',
            width: "100%",
            height: "0px",
            position: "absolute",
            left: 0,
            bottom: 0,
            display: "none",
            alignItems: "center",
            flexDirection: "column",
            zIndex: 99999,
            transition: '0.5s'
        });
        def.fn.append(player, bottomControls);
        def.fn.attribute(bottomControls, {
            oncontextmenu: 'return false'
        });


        let progress = def.fn.create('absdiv');
        def.fn.css(progress, def.fn.getCss(premium?.progress, 'progress'));
        def.fn.append(player, progress);
        def.fn.attribute(progress, {
            oncontextmenu: 'return false'
        });

        let progressBuffer = def.fn.create('absdiv');
        def.fn.css(progressBuffer, def.fn.getCss(premium?.progressBuffer, 'progressBuffer') );
        def.fn.append(progress, progressBuffer);

        let progressTimeline = def.fn.create('absdiv');
        def.fn.css(progressTimeline, def.fn.getCss(premium?.progressTimeline, 'progressTimeline'));
        def.fn.append(progress, progressTimeline);

        let progressTooltip = def.fn.create('absdiv');
        def.fn.css(progressTooltip, def.fn.getCss(premium?.progressTooltip,'progressTooltip'));
        def.fn.append(player, progressTooltip);

        let durationArea = def.fn.create('absdiv');
        def.fn.css(durationArea, def.fn.getCss(premium?.durationArea?.css, 'durationArea'));

        def.fn.append(player, durationArea);
        def.fn.attribute(durationArea, {
            oncontextmenu: 'return false'
        });

        let durationCurrent = def.fn.create('p');
        def.fn.css(durationCurrent, {
            color: '#fff',
            fontSize: '12px'
        });
        def.fn.html(durationCurrent, '00:00');
        def.fn.append(durationArea, durationCurrent);

        let durationText = def.fn.create('p');
        def.fn.css(durationText, {
            color: '#fff',
            fontSize: '12px'
        });
        def.fn.html(durationText, '00:00');
        def.fn.append(durationArea, durationText);

        let allControls = def.fn.create('absdiv');
        def.fn.css(allControls, {
            width: "98%",
            height: "100%",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'space-between',
        });
        def.fn.append(controls, allControls);
        def.fn.attribute(allControls, {
            oncontextmenu: 'return false'
        });

        let leftControls = def.fn.create('absdiv');
        def.fn.css(leftControls, {
            display: "flex",
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'flex-start'
        });
        def.fn.append(allControls, leftControls);

        let playPauseControl = def.fn.create('button');
        def.fn.css(playPauseControl, def.fn.getCss(premium?.playPauseControl, 'playPauseControl'));
        def.fn.html(playPauseControl, def.icons.playBtn);
        def.fn.append(leftControls, playPauseControl);
        playPauseControl.addEventListener('click', () => {
            togglePlayPause();
        })

        let volumeContainer = def.fn.create('absdiv');
        def.fn.css(volumeContainer, def.fn.getCss(premium?.volumeContainer, 'volumeContainer'));
        def.fn.append(leftControls, volumeContainer);

        let volumeControl = def.fn.create('button');
        def.fn.css(volumeControl, def.fn.getCss(premium?.volumeControl, 'volumeControl'));
        def.fn.html(volumeControl, def.icons.soundLower);
        def.fn.append(volumeContainer, volumeControl);

        let volumeSliderArea = def.fn.create('absdiv');
        def.fn.css(volumeSliderArea, def.fn.getCss(premium?.volumeSliderArea, 'volumeSliderArea'));
        def.fn.append(volumeContainer, volumeSliderArea);

        let volumeSlider = def.fn.create('absdiv');
        def.fn.css(volumeSlider, def.fn.getCss(premium?.volumeSlider, 'volumeSlider'));
        def.fn.attribute(volumeSlider, {
            max: 100,
            min: 0,
            current: 20
        });
        def.fn.append(volumeSliderArea, volumeSlider);
        thisID.append(player);

        let castControl = def.fn.create('button');
        def.fn.css(castControl, def.fn.getCss(premium?.castControl, 'castControl'));
        def.fn.html(castControl, def.icons.castIcon);
        def.fn.append(leftControls, castControl);

        let speedPlacement = def.fn.create('button');
        def.fn.css(speedPlacement, def.fn.getCss(premium?.speedPlacement, 'castControl'));
        def.fn.html(speedPlacement, def.icons.castIcon);
        def.fn.append(leftControls, speedPlacement);

        let backwardControl = def.fn.create('button');
        def.fn.css(backwardControl, def.fn.getCss(premium?.backwardControl, 'backwardControl'));
        def.fn.html(backwardControl, def.icons.moveBackward);
        premium.backward == true ? def.fn.append(leftControls, backwardControl) : '';

        let forwardControl = def.fn.create('button');
        def.fn.css(forwardControl, def.fn.getCss(premium?.forwardControl, 'forwardControl'));
        def.fn.html(forwardControl, def.icons.moveForward);
        premium.forward == true ? def.fn.append(leftControls, forwardControl) : '';

        let rightControls = def.fn.create('absdiv');
        def.fn.css(rightControls, {
            display: 'flex',
            gap: '10px',
            alignItems: 'center'
        });
        def.fn.append(allControls, rightControls);

        let shareControl = def.fn.create('button');
        def.fn.css(shareControl, def.fn.getCss(premium?.shareControl,'shareControl'));
        def.fn.html(shareControl, def.icons.shareIcon);
        premium.share === true ? def.fn.append(rightControls, shareControl) : true;

        let settingsControl = def.fn.create('button');
        def.fn.css(settingsControl, def.fn.getCss(premium?.settingsControl, 'settingsControl'));
        def.fn.html(settingsControl, def.icons.settings);
        def.fn.append(rightControls, settingsControl);

        let settingsOptions = def.fn.create('absdiv');
        def.fn.css(settingsOptions, def.fn.getCss(premium?.settingsOptions, 'settingsOptions'));
        def.fn.append(player, settingsOptions);
        def.fn.attribute(settingsOptions, {
            oncontextmenu: 'return false'
        });

        let settingsOptionBefore = def.fn.create('absdiv');
        def.fn.css(settingsOptionBefore, def.fn.getCss(premium?.settingsOptionBefore, 'settingsOptionBefore'));
        def.fn.append(settingsOptions, settingsOptionBefore);

        let itemQuality = def.fn.create('absdiv');
        def.fn.css(itemQuality, def.fn.getCss(premium?.itemQuality, 'itemQuality'));
        def.fn.html(itemQuality, `<p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>Quality</p><p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p>`);
        def.fn.append(settingsOptionBefore, itemQuality);

        let itemPlayback = def.fn.create('absdiv');
        def.fn.css(itemPlayback, def.fn.getCss(premium?.itemPlayback, 'itemPlayback'));
        def.fn.html(itemPlayback, `<p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>Playback</p><p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p>`);
        def.fn.append(settingsOptionBefore, itemPlayback);

        let itemSubtitle = def.fn.create('absdiv');
        def.fn.css(itemSubtitle, def.fn.getCss(premium?.itemSubtitle, 'itemSubtitle'));
        def.fn.html(itemSubtitle, `<p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>Subtitle</p><p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important'>${def.icons.rightArrow}</p>`);
        def.fn.append(settingsOptionBefore, itemSubtitle);

        let itemAudio = def.fn.create('absdiv');
        def.fn.css(itemAudio, def.fn.getCss(premium?.itemAudio, 'itemAudio'));
        def.fn.html(itemAudio, `<p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>Audio</p><p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p>`);
        def.fn.append(settingsOptionBefore, itemAudio);

        let itemLoop = def.fn.create('absdiv');
        def.fn.css(itemLoop, def.fn.getCss(premium?.itemLoop, 'itemLoop'));
        def.fn.html(itemLoop, `<p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>Loop</p><p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p>`);
        def.fn.append(settingsOptionBefore, itemLoop);

        let settingsBack = def.fn.create('absdiv');
        def.fn.css(settingsBack, def.fn.getCss(premium?.settingsBack, 'settingsBack'));
        def.fn.html(settingsBack, `<p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.backBtn}</p><p style='padding:0 !important;font-size:12px;font-family:sans-serif;margin:0 !important;'>Back</p>`);

        let settingsOptionAfter = def.fn.create('absdiv');
        def.fn.css(settingsOptionAfter, def.fn.getCss(premium?.settingsOptionAfter, 'settingsOptionAfter'));

        def.fn.attribute(settingsOptionAfter, {
            oncontextmenu: 'return false',
            onselectstart: 'return false'
        })
        def.fn.append(settingsOptions, settingsOptionAfter);


        let settingsOptionsItem = def.fn.create('absdiv');
        def.fn.css(settingsOptionsItem, {
            width: '100%',
            height: 'auto',
            background: "rgba(0,0,0,0,3)"
        });

        let playlistContainerBox = def.fn.create('absdiv');
        def.fn.css(playlistContainerBox, def.fn.getCss(premium?.playlistContainerBox, 'playlistContainerBox'));
        def.fn.attribute(playlistContainerBox, {
            oncontextmenu: 'return false',
            onselectstart: 'return false'
        })
        def.fn.append(player, playlistContainerBox);

        let playlistContainer = def.fn.create('absdiv');
        def.fn.css(playlistContainer, def.fn.getCss(premium?.playlistContainer, 'playlistContainer'));
        def.fn.append(playlistContainerBox, playlistContainer);

        let playlistController = def.fn.create('button');
        def.fn.css(playlistController, def.fn.getCss(premium?.playlistController, 'playlistController'));
        def.fn.html(playlistController, def.icons.playlist);
        def.fn.append(rightControls, playlistController);

        let screenController = def.fn.create('button');
        def.fn.css(screenController, def.fn.getCss(premium?.screenController, 'screenController'));
        def.fn.html(screenController, def.icons.fullScreenEnter);
        def.fn.append(rightControls, screenController);
        screenController.addEventListener('click', () => {
            toggleFullscreen();
        })

        let errorMsg = def.fn.create('h3');
        def.fn.css(errorMsg, {
            textAlign: 'center',
            position: 'absolute',
            zIndex: 99999999,
            left: '50%',
            top: '50%',
            'transform': 'translate(-50%,-50%)',
            color: 'red'
        });
        def.fn.append(player, errorMsg);
        def.fn.attribute(errorMsg, {
            'oncontextmenu': 'return false'
        })

        settingsBack = def.fn.create('absdiv');
        def.fn.css(settingsBack, def.fn.getCss(premium?.settingsBack, 'settingsBack'));
        def.fn.html(settingsBack, '<p style="font-family:sans-serif;margin:0 !important;">Back</p><p style="font-family:sans-serif;margin:0 !important;">' + def.icons.backBtn + '</p>');

        let video = def.fn.create('video');
        def.fn.css(video, {
            width: '100%',
            height: '100%',
            position: 'absolute'
        });
        def.fn.attribute(video, {
            preload: 'metadata',
            tabindex: -1,
            disableremoteplayback: 'true',
            'webkit-playsinline': 'true',
            playsinline: 'true',
            controlsList: 'no download',
            oncontextmenu: 'return false',
            disablepictureinpicture: 1
        });
        def.fn.append(player, video);

        let ytPlayer = def.fn.create('absdiv');
        def.fn.attribute(ytPlayer, {
            id: 'ytIframe'
        });
        def.fn.css(ytPlayer, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'none',
            zIndex: 998
        });
        def.fn.append(player, ytPlayer);

        player360 = def.fn.create('absdiv');
        def.fn.css(player360, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
            background: 'transparent',
            cursor: 'pointer',
            zIndex: 9999
        });
        def.fn.append(player, player360);

        let youtubeClick = def.fn.create('absdiv');
        def.fn.css(youtubeClick, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
            background: 'transparent',
            zIndex: 99999
        });
        def.fn.append(player, youtubeClick);
        youtubeClick.addEventListener('click', () => {
            isNotMobile(togglePlayPause);
            isControlOpen = false;
            settingsOptionAfter.style.display = "none";
            settingsOptionBefore.style.display = "none";
        })

        let vimeoPlayer = def.fn.create('absdiv');
        def.fn.attribute(vimeoPlayer, {
            id: 'vmFrame'
        });
        def.fn.css(vimeoPlayer, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'none',
            overflow: 'hidden'
        });
        def.fn.append(player, vimeoPlayer);

        let vimeoClick = def.fn.create('absdiv');
        def.fn.css(vimeoClick, {
            width: '100%',
            height: 'calc(100% - 60px)',
            position: 'absolute',
            display: 'none',
            background: 'transparent',
            zIndex: 998
        });
        def.fn.append(player, vimeoClick);
        def.fn.attribute(vimeoClick, {
            oncontextmenu: 'return false'
        });
        vimeoClick.addEventListener('click', () => {
            isNotMobile(togglePlayPause);
            isControlOpen = false;
            settingsOptionAfter.style.display = "none";
            settingsOptionBefore.style.display = "none";
        })

        let adsContainer = def.fn.create('absdiv');
        def.fn.attribute(adsContainer, {
            id: 'adsContainer'
        });
        def.fn.css(adsContainer, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'none',
            background: '#000',
            zIndex: 9999999
        });
        def.fn.append(player, adsContainer);
        def.fn.attribute(adsContainer, {
            oncontextmenu: 'return false'
        });

        let adsContent = def.fn.create('absdiv');
        def.fn.attribute(adsContent, {
            id: 'adsContent'
        });
        def.fn.css(adsContent, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'none'
        });
        def.fn.append(adsContainer, adsContent);

        let adsContentVideo = def.fn.create('video');
        def.fn.css(adsContentVideo, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'none',
            zIndex: 99999999
        });
        def.fn.append(player, adsContentVideo);
        def.fn.attribute(adsContentVideo, {
            preload: 'metadata',
            tabindex: -1,
            disableremoteplayback: 'true',
            'webkit-playsinline': 'true',
            playsinline: 'true',
            controlsList: 'no download',
            oncontextmenu: 'return false',
            muted: 1,
            autoplay: 1
        });

        let adsTimer = def.fn.create('absdiv');
        def.fn.css(adsTimer, {
            position: 'absolute',
            right: 0,
            bottom: '40px',
            width: 'auto',
            height: '35px',
            background: 'rgba(0,0,0,0.9)',
            padding: '4px 6px',
            color: '#fff',
            display: 'none',
            zIndex: 9999999999,
            fontSize: '12px',
            'font-family': 'sans-serif',
            alignItems: 'center',
            justifyContent: 'center',
        });
        def.fn.append(player, adsTimer);
        def.fn.attribute(adsTimer, {
            oncontextmenu: 'return false'
        });

        let adsHandler = def.fn.create('svg');
        def.fn.css(adsHandler, {
            width: '100px',
            height: '100px',
            position: 'absolute',
            display: 'none',
            color: '#fff',
            cursor: 'pointer',
            zIndex: 999999,
            fontSize: '50px',
            left: '50%',
            top: '45%'
        });
        def.fn.html(adsHandler, def.icons.adsPlayBtn);
        def.fn.append(player, adsHandler);

        let loader = def.fn.create('svg');
        def.fn.attribute(adsContent, {
            id: 'loader'
        });
        def.fn.css(loader, {
            width: '100px',
            height: '100px',
            position: 'absolute',
            display: 'none',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)'
        });
        def.fn.html(loader, def.icons.loaders[premium.loader !== undefined ? premium.loader[0] - 1 : 0]);
        def.fn.append(player, loader);

        let shareArea = def.fn.create('absdiv');
        def.fn.css(shareArea, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'none',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 99999999
        });
        def.fn.append(player, shareArea);

        let shareClose = def.fn.create('button');
        def.fn.css(shareClose, def.fn.getCss(premium?.shareClose, 'shareClose'));
        def.fn.append(shareArea, shareClose);
        def.fn.html(shareClose, def.icons.shareCloseIcon);

        let shareInner = def.fn.create('absdiv');
        def.fn.css(shareInner, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
            gap: '15px',
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        });
        def.fn.append(shareArea, shareInner);

        if (document.pictureInPictureEnabled) {
            pipControl.addEventListener("click", async () => {
                let pip = video.getAttribute('disablepictureinpicture');
                if (pip) {
                    video.removeAttribute('disablepictureinpicture');
                } else {
                    video.setAttribute('disablepictureinpicture', 1);
                }
                try {
                    if (video !== document.pictureInPictureElement) {
                        await video.requestPictureInPicture();
                    } else {
                        await document.exitPictureInPicture();
                    }
                } catch (error) {
                    console.error("PiP Error:", error);
                }
            });
        } else {
            console.log("PIP NOT ENABLED IN YOUR BROWSER")
            pipControl.style.display = 'none';
        }

        progress.addEventListener("click", (e) => {
            toggleScrubbing(e);
        });

        progress.addEventListener('mouseover', (e) => {
            scrubbing(e);
        });

        progress.addEventListener('mousemove', (e) => {
            scrubbing(e);
        });

        progress.addEventListener('touchover', (e) => {
            scrubbing(e);
        })

        progress.addEventListener('mouseleave', () => {
            progressTooltip.style.display = 'none';
            progress.style.height = "3px";
        });

        progress.addEventListener('touchend', () => {
            progressTooltip.style.display = 'none';
            progress.style.height = "3px";
        });



        def.fn.addClass(youtubeClick, 'abs_right_option');
        def.fn.addClass(youtubeClick, 'abs_option');
        rightOptions('.abs_right_option', player);

        volumeContainer.addEventListener('mouseenter', () => {
            if (volumeSlider != undefined) {
                def.fn.css(volumeSlider, {
                    width: volumeSlider.getAttribute('current') + 'px',
                    height: '5px',
                    background: 'red',
                    cursor: 'pointer',
                    transition: '0.5s',
                    position: 'absolute'
                });

                def.fn.css(volumeSliderArea, {
                    width: '100px',
                    height: '5px',
                    background: 'gray',
                    cursor: 'pointer',
                    transition: '0.5s',
                    position: 'relative'
                });
            }
        });
        volumeContainer.addEventListener('touchstart', () => {
            if (isSoundOpen == false) {
                def.fn.css(volumeSlider, {
                    width: volumeSlider.getAttribute('current') + 'px',
                    height: '5px',
                    background: 'red',
                    cursor: 'pointer',
                    transition: '0.5s',
                    position: 'absolute'
                });

                def.fn.css(volumeSliderArea, {
                    width: '100px',
                    height: '5px',
                    background: 'gray',
                    cursor: 'pointer',
                    transition: '0.5s',
                    position: 'relative'
                });
            }

            if (isSoundOpen == true) {
                def.fn.css(volumeSlider, {
                    width: '0px',
                    height: '5px',
                    background: 'red',
                    cursor: 'pointer',
                    transition: '0.5s'
                });

                def.fn.css(volumeSliderArea, {
                    width: '0px',
                    height: '5px',
                    background: 'gray',
                    cursor: 'pointer',
                    transition: '0.5s'
                });
            }
            if (isSoundOpen == false) {
                isSoundOpen = true;
            } else {
                isSoundOpen = false;
            }
            touchvolumeHide();
        });

        volumeContainer.addEventListener('mouseleave', () => {
            if (volumeSlider != undefined) {
                def.fn.css(volumeSlider, {
                    width: '0px',
                    height: '5px',
                    background: 'red',
                    cursor: 'pointer',
                    transition: '0.5s',
                });

                def.fn.css(volumeSliderArea, {
                    width: '0px',
                    height: '5px',
                    background: 'gray',
                    cursor: 'pointer',
                    transition: '0.5s',
                    position: 'relative'
                });
            }
        });

        volumeControl.addEventListener('click', () => {
            toggleMute();
        })

        volumeSliderArea.addEventListener("click", (e) => {
            const rect = e.target.getBoundingClientRect();
            const soundWidth = Math.min(Math.max(0, e.x - rect.x), rect.width);
            volumeSlider.setAttribute("current", soundWidth);
            volumeSlider.style.cssText = `width: ${soundWidth}px;height:5px;background:red;cursor:pointer;transition:0.5s;position:absolute;`;
            if (Math.ceil(soundWidth) > 0 && Math.ceil(soundWidth) < 50) {
                volumeControl.innerHTML = def.icons.soundLower;
            } else if (
                Math.ceil(soundWidth) > 49 &&
                Math.ceil(soundWidth) <= 100
            ) {
                volumeControl.innerHTML = def.icons.soundHigher;
            }
            if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                if (premium.v360) {
                    video360.volume = soundWidth / 100;
                } else {
                    video.volume = soundWidth / 100;
                }
            } else if (isYoutube == 'yTb') {
                youtubePlayer.setVolume((soundWidth));
            } else if (playerName == 'vimeo') {
                vmPlayer.setVolume(soundWidth / 100);
            }
            if (isMute) {
                toggleMute();
            }
            localStorage.setItem('abs_active_sound', soundWidth);
        });

        function soundControls(amount) {
            let soundWidth = localStorage.getItem('abs_active_sound') ?? 0;
            soundWidth = parseInt(soundWidth) + (amount);
            if (soundWidth < 0) {
                soundWidth = 0;
                localStorage.setItem('abs_active_sound', 0);
            } else if (soundWidth >= 100) {
                soundWidth = 100;
                localStorage.setItem('abs_active_sound', 100);
            } else {
                localStorage.setItem('abs_active_sound', soundWidth);
            }
            volumeSlider.setAttribute("current", soundWidth);
            if (Math.ceil(soundWidth) > 0 && Math.ceil(soundWidth) < 50) {
                volumeControl.innerHTML = def.icons.soundLower;
            } else if (
                Math.ceil(soundWidth) > 49 &&
                Math.ceil(soundWidth) <= 100
            ) {
                volumeControl.innerHTML = def.icons.soundHigher;
            }
            if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                if (premium.v360) {
                    video360.volume = soundWidth / 100;
                } else {
                    video.volume = soundWidth / 100;
                }
            } else if (isYoutube == 'yTb') {
                youtubePlayer.setVolume((soundWidth));
            } else if (playerName == 'vimeo') {
                vmPlayer.setVolume(soundWidth / 100);
            }
        }

        backwardControl.addEventListener('click', () => {
            seekBackward();
        })

        forwardControl.addEventListener('click', () => {
            seekForward();
        });

        shareControl.addEventListener('click', () => {
            shareArea.style.display = 'flex';
            shareControler();
        });

        shareClose.addEventListener('click', () => {
            def.fn.html(shareInner, "");
            shareArea.style.display = 'none';
        })

        settingsControl.addEventListener('click', () => {
            if (isControlOpen == false) {
                isControlOpen = true;
                settingsOptionAfter.style.display = "none";
                settingsOptionBefore.style.display = "flex";
            } else {
                isControlOpen = false;
                settingsOptionAfter.style.display = "none";
                settingsOptionBefore.style.display = "none";
            }
        });

        settingsBack.addEventListener("click", () => {
            settingsOptionBefore.style.display = "flex";
            settingsOptionAfter.style.display = "none";
        });

        playlistController.addEventListener('click', () => {
            togglePlaylist();
        })

        itemPlayback.addEventListener("click", () => {
            settingsOptionBefore.style.display = "none";
            settingsOptionAfter.style.display = "flex";

            let playbackSpeed = "";
            if (premium.playback != "" && Array.isArray(premium?.playback?.speed)) {
                if(premium.playback.placement){

                }else{
                    for (let p = 0; p < premium.playback.length; p++) {
                        playbackSpeed += `<absdiv class="abs_playback ${activePlayback == p ? 'abs_active' : ''}" play-rate='${premium.playback[p]}' index='${p}' style='width:90%;color:#fff;height:28px; padding:3px 0px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${premium.playback[p]}x</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p></absdiv>`;
                    }
                }
            } else {
                const playbacks = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
                for (let p = 0; p < playbacks.length; p++) {
                    playbackSpeed += `<absdiv class="abs_playback ${activePlayback == p ? 'abs_active' : ''}" play-rate='${playbacks[p]}' index='${p}' style='width:90%;color:#fff;height:28px;padding:3px 0px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${playbacks[p]}x</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${buttons.rightArrow}</p></absdiv>`;
                }
            }

            def.fn.html(settingsOptionAfter, playbackSpeed);
            def.fn.append(settingsOptionAfter, settingsBack);
            const allPlaybacks = document.querySelectorAll(".abs_playback");
            allPlaybacks.forEach((item, index) => {
                setcallBack(item, togglePlayback);
            })
        });

        itemLoop.addEventListener("click", () => {
            settingsOptionBefore.style.display = "none";
            settingsOptionAfter.style.display = "flex";
            let loopItem = "";
            const loops = ['No','Yes'];
            for (let l = 0; l < loops.length; l++) {
                loopItem += `<absdiv class="abs_loop ${activeLoop == l ? 'abs_active' : ''}" data-id='${l
                    }' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${loops[l]}</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow
                    }</p></absdiv>`;
            }
            def.fn.html(settingsOptionAfter, loopItem);
            def.fn.append(settingsOptionAfter, settingsBack);

            const allLoops = document.querySelectorAll(".abs_loop");
            allLoops.forEach((item, index) => {
                setcallBack(item, togglePlaybackLoop);
            })
        });

        const hoverItems = [playPauseControl, castControl, volumeControl, backwardControl, forwardControl, shareControl, playlistController, settingsControl, screenController];

        if(device.os !== 'Android' && device.os !== 'Ios' && device.os !== 'Ipad'){
            hoverItems.forEach(item => {
                item.addEventListener('mouseover', () => {
                    item.style.background = "rgba(219, 30, 30, 0.88)";
                    item.style.borderRadius = "5px";
                })
    
                item.addEventListener('touchstart', () => {
                    item.style.background = "rgba(219, 30, 30, 0.88)";
                    item.style.borderRadius = "5px";
                })
    
                item.addEventListener('mouseout', () => {
                    item.style.background = "none";
                    item.style.borderRadius = "0";
                })
                item.addEventListener('mouseleave', () => {
                    item.style.background = "none";
                    item.style.borderRadius = "0";
                })
                item.addEventListener('touchend', () => {
                    item.style.background = "none";
                    item.style.borderRadius = "0";
                })
                item.addEventListener('touchcancel', () => {
                    console.log('canceled')
                    item.style.background = "none";
                    item.style.borderRadius = "0";
                })
            })
        }

        if (player.offsetHeight < 400) {
            def.fn.css(settingsOptionAfter, {
                width: '100%',
                height: 'auto',
                background: 'rgba(0,0,0,0.3)',
                color: '#fff',
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderRadius: '4px',
                display: 'none',
                alignItems: 'center',
                flexDirection: 'column',
                maxHeight: '150px',
                overflowY: 'auto',
                overflowX: 'hidden',
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none',
                '@::-webkit-scrollbar': 'none',
                transition: '0.5s'
            });
        }

        const settingItems = [itemPlayback, itemAudio, itemLoop, itemQuality, itemSubtitle, settingsBack, player360];

        settingItems.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                item.style.background = "rgba(0,0,0,0.6)";
                item.style.color = "orange";
                item.style.padding = '3px 2px';
                item.style.borderRadius = '4px';
                item.style.paddingLeft = '4px';
                item.style.transition = '0.1s'
            })
            item.addEventListener('mouseleave', () => {
                item.style.background = "none";
                item.style.padding = '0px';
                item.style.color = "#fff";
                item.style.borderRadius = '0px';
                item.style.paddingLeft = '0px';
                item.style.transition = '0.1s'
            })
        });

        const controlsItem = [player, video, controls, durationArea, youtubeClick, vimeoClick, progressTimeline, playlistContainerBox];
        controlsItem.forEach((item, index) => {
            if (item != undefined && item != null) {
                item.addEventListener('mouseenter', () => { openControls() });
                item.addEventListener('mouseover', () => { isMouseMove() });
                item.addEventListener('mousemove', () => { isMouseMove() });
                item.addEventListener('touchstart', () => { openControls() });

                item.addEventListener('mouseleave', () => { closeCounterNumber = 0; });
                item.addEventListener('touchend', () => { closeCounterNumber = 0; });
            }
        });

        const fullscreenControllers = [youtubeClick, video, video360, vimeoPlayer];
        fullscreenControllers.forEach((item) => {
            if (item != undefined && item != null) {
                item.addEventListener('dblclick', () => {
                    toggleFullscreen();
                })
            }
        })

        if (premium.poster != '' | premium.poster != undefined) {
            addPoster();
        }

        let css = `.abs_active{color : orange !important;background:rgba(0,0,0,0.41) !important;}.abs_option{width:100%;height:100%;position:absolute;top:0;z-index:1;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.5);font-size:2vw}.contextMenu{--menu-border:rgba(255,255,255,.08);--menu-bg:linear-gradient(45deg,rgba(10,20,28,.2) 0%,rgba(10,20,28,.7) 100%);--item-border:rgba(255,255,255,.1);--item-color:#fff;--item-bg-hover:rgba(255,255,255,.1);height:0;overflow:hidden;background:var(--menu-bg);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);position:fixed;top:var(--top);left:var(--left);-webkit-animation:menuAnimation 0.4s 0s both;animation:menuAnimation 0.4s 0s both;transform-origin:left;list-style:none;margin:4px;padding:0;display:flex;flex-direction:column;z-index:999999999;box-shadow:0 0 0 1px var(--menu-border),0 2px 2px rgba(0,0,0,.03),0 4px 4px rgba(0,0,0,.04),0 10px 8px rgba(0,0,0,.05),0 12px 12px rgba(0,0,0,.06),0 30px 30px rgba(0,0,0,.07),0 70px 65px rgba(0,0,0,.09)}.contextMenu-item{padding:4px}.contextMenu-item[data-absdivider="top"]{border-top:1px solid}.contextMenu-item[data-absdivider="bottom"]{border-bottom:1px solid}.contextMenu-item[data-absdivider="top-bottom"]{border-top:1px solid;border-bottom:1px solid}.contextMenu-item[data-absdivider]{border-color:var(--item-border)}.contextMenu-button{color:var(--item-color);background:0;border:0;white-space:nowrap;width:100%;border-radius:4px;padding:6px 24px 6px 7px;text-align:left;display:flex;align-items:center;font-size:12px;width:100%;-webkit-animation:menuItemAnimation 0.2s 0s both;animation:menuItemAnimation 0.2s 0s both;font-family:"Inter",sans-serif;cursor:pointer}.contextMenu-button:hover{background-color:var(--item-bg-hover)}.contextMenu[data-theme="light"]{--menu-bg:linear-gradient(45deg,rgba(255,255,255,.45) 0%,rgba(255,255,255,.85) 100%);--menu-border:rgba(0,0,0,.08);--item-border:rgba(0,0,0,.1);--item-color:rgb(10,20,28);--item-bg-hover:rgba(10,20,28,.09)}@-webkit-keyframes menuAnimation{0%{opacity:0;transform:scale(.5)}100%{height:var(--height);opacity:1;border-radius:8px;transform:scale(1)}}@keyframes menuAnimation{0%{opacity:0;transform:scale(.5)}100%{height:var(--height);opacity:1;border-radius:8px;transform:scale(1)}}@-webkit-keyframes menuItemAnimation{0%{opacity:0;transform:translateX(-10px)}100%{opacity:1;transform:translateX(0)}}@keyframes menuItemAnimation{0%{opacity:0;transform:translateX(-10px)}100%{opacity:1;transform:translateX(0)}}absdiv::-webkit-scrollbar {display: none;}.abs_active>*{color : orange !important;}`;
        def.fn.setCss(css);

        function disableselect(e) { return false }
        thisID.onselectstart = (e) => {
            e.preventDefault();
        }
        thisID.onmousedown = disableselect;

        if (Array.isArray(premium.src)) {
            playlist = premium.src;
            var items = [];
            var urls = [];
            playlist.forEach((item, index) => {
                if (item && typeof item === 'object' && item.constructor === Object) {
                    if (item.url != '' && item.title != '') {
                        urls.push(item.url);
                        if (index == 0) {
                            playIndex = index;
                            __init(urls[index],item.poster);
                        }
                        var box = def.fn.create('absdiv');
                        if (index == (items.length - 1)) {
                            def.fn.css(box, {
                                display: 'flex',
                                width: '100%',
                                height: '35px',
                                margin: '4px 0px',
                                position: 'relative',
                                cursor: 'pointer',
                                'padding-bottom': '120px',
                                alignItems: 'center',
                                justifyContent: 'flex-start'
                            });
                        } else {
                            def.fn.css(box, {
                                display: 'flex',
                                width: '100%',
                                height: '35px',
                                margin: '4px 0px',
                                position: 'relative',
                                cursor: 'pointer',
                                alignItems: 'center',
                                justifyContent: 'flex-start'
                            });
                        }
                        def.fn.attribute(box, {
                            'data-id': index
                        });

                        var img = def.fn.create('img');
                        def.fn.css(img, {
                            width: '30px',
                            height: '30px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            borderRadius: '50%'
                        });

                        def.fn.attribute(img, {
                            src: item.poster
                        })

                        def.fn.append(box, img);
                        var title = def.fn.create('p');

                        def.fn.css(title, {
                            fontSize: '12px',
                            color: '#fff',
                            'font-family': 'sans-serif',
                            marginLeft: '4px'
                        });
                        def.fn.html(title, item.title.slice(0, 20));
                        def.fn.attribute(img, { loading: 'lazy' });
                        def.fn.append(box, title);
                        playlistController.style.display = 'flex';
                        def.fn.append(playlistContainer, box);
                        setcallBack(box, playlistActiveEvent, playlistActive);
                        playlistActive(playIndex);
                    }
                } else {
                    console.log('Please insert object data');
                }
            });
        } else {
            __init(premium.src);
        }

        if (Array.isArray(premium.subtitle)) {
            subtitles = premium.subtitle;
            let captions = [];
            let tracksControler = '';
            tracksControler = `<absdiv data-id='${100}' srclang='native' kind='off' class='abs_subtitle ${activeSubtitle == 100 ? 'abs_active' : ''}' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>Off</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p></absdiv>`;
            subtitles.forEach((item, index) => {
                if (item && typeof item === 'object' && item.constructor === Object) {
                    let itemTextTrack = `<track srclang='${item.srclang}' kind='${item.kind}' label='${item.label}' data-id='${index}' src='${item.src}' />`;
                    tracksControler += `<absdiv data-id='${index}' srclang='${item.srclang}' kind='${item.kind}' class='abs_subtitle ${activeSubtitle == index ? 'abs_active' : ''}' style='width:90%;color:#fff;height:28px; padding:2px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${item.label}</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p></absdiv>`;
                    captions.push(itemTextTrack);
                } else {
                    return;
                }
            });

            itemSubtitle.addEventListener('click', () => {
                loadTextTracks();
            })

            function loadTextTracks() {
                if (playerName == 'mp4' | playerName == 'mkv' | playerName == 'flv') {
                    def.fn.html(settingsOptionAfter, '');
                    def.fn.html(video, captions);

                    def.fn.html(settingsOptionAfter, tracksControler);
                    def.fn.append(settingsOptionAfter, settingsBack);
                    settingsOptionBefore.style.display = "none";
                    settingsOptionAfter.style.display = "flex";

                    const hlsCaptions = document.querySelectorAll(".abs_subtitle");
                    hlsCaptions.forEach((item, index) => {
                        setcallBack(item, textTrackChange);
                    })
                }
            }


            function textTrackChange(e) {
                let kind = e.getAttribute('kind');
                let value = e.getAttribute('srclang');
                activeSubtitle = e.getAttribute("data-id");
                if (value === 'off') {
                    hideTextTracks();
                } else {
                    hideTextTracks();

                    for (var i = 0; i < video.textTracks.length; i++) {
                        if (video.textTracks[i].kind === kind) {
                            if (video.textTracks[i].language === value) {
                                video.textTracks[i].mode = 'showing';
                            }
                        }
                    }
                }

                const hlsCaptions = document.querySelectorAll(".abs_subtitle");
                for (let i = 0; i < hlsCaptions.length; i++) {
                    def.fn.removeClass(hlsCaptions[i], 'abs_active');
                    if (activeSubtitle == hlsCaptions[i].getAttribute('data-id')) {
                        def.fn.addClass(hlsCaptions[i], 'abs_active');
                    }
                }
            }

            function hideTextTracks() {
                for (var s = 0; s < video.textTracks.length; s++) {
                    video.textTracks[s].mode = 'hidden';
                }
            }
        } else {
            console.log(premium.subtitle);
        }


        function launchIntoFullscreen(element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
            def.fn.html(screenController, def.icons.fullScreenOut);
            try {
                screen.orientation.lock('landscape');
            } catch (error) {
                console.log(error);
            }
        }

        function exitFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            def.fn.html(screenController, def.icons.fullScreenEnter);
            try {
                screen.orientation.lock('portrait');
            } catch (error) {
                console.log(error);
            }
        }
        var fullscreen = false;

        function toggleFullscreen() {
            if (fullscreen) {
                exitFullscreen();
            } else {
                launchIntoFullscreen(player);
            }
            fullscreen = !fullscreen;
        }


        function togglePlayback(e) {
            activePlayback = e.getAttribute("index");
            const removePlayback = document.querySelectorAll(".abs_playback");
            for (let i = 0; i < removePlayback.length; i++) {
                def.fn.removeClass(removePlayback[i], 'abs_active');
                if (activePlayback == removePlayback[i].getAttribute('index')) {
                    def.fn.addClass(removePlayback[i], 'abs_active');
                }
            }

            def.fn.addClass(e, 'abs_active');
            if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                if (premium.v360) {
                    video360.playbackRate = e.getAttribute('play-rate');
                } else {
                    video.playbackRate = e.getAttribute("play-rate");
                }
            } else if (isYoutube == 'yTb') {
                youtubePlayer.setPlaybackRate(Number(getSpeedIndex(ytSpeed, e.getAttribute("play-rate"))));
            } else if (playerName == 'vimeo') {
                vmPlayer.setPlaybackRate(e.getAttribute('play-rate'));
            }
        }


        function togglePlaybackLoop(e) {
            activeLoop = e.getAttribute('data-id');
            const allLoops = document.querySelectorAll(".abs_loop");
            for (let a = 0; a < allLoops.length; a++) {
                def.fn.removeClass(allLoops[a], 'abs_active');
                if (activeLoop == allLoops[a].getAttribute('data-id')) {
                    def.fn.addClass(allLoops[a], 'abs_active');
                }
            }

            if ((fileExtention == "mp4") || (fileExtention == "webm") || (fileExtention == "ogg") || fileExtention == "m3u8" || fileExtention == 'mpd') {
                if (premium.v360) {
                    if (e.getAttribute("data-id") == 1) {
                        def.fn.attribute(video360, {
                            loop: true
                        });
                    } else {
                        def.fn.remove_attribute(video360, {
                            loop: false
                        });
                    }
                } else {
                    if (e.getAttribute("data-id") == 1) {
                        def.fn.attribute(video, {
                            loop: true
                        });
                    } else {
                        def.fn.remove_attribute(video, {
                            loop: false
                        });
                    }
                }
            } else if (playerName == 'youtube' && youtubePlayer != null) {
                if (e.getAttribute("data-id") == 1) {
                    youtubePlayer.setLoop(true);
                } else {
                    youtubePlayer.setLoop(false);
                }
            } else if (playerName == 'vimeo') {
                if (e.getAttribute("data-id") == 1) {
                    vmPlayer.setLoop(true);
                } else {
                    vmPlayer.setLoop(false);
                }
            }
        }

        function videoListener() {
            if (premium.v360) {
                videoEvent(video360);
            } else {
                videoEvent(video);
            }
        }

        function videoEvent(videoItem) {
            videoItem.addEventListener("waiting", () => {
                loader.style.display = "block";
            });

            videoItem.addEventListener('click', () => {
                togglePlayPause();
            });

            videoItem.addEventListener('playing', () => {
                isPlaying = true;
                loader.style.display = 'none';
            });

            videoItem.addEventListener('ended', () => {
                video.currentTime = 0;
                if (isVideoEnded == false) {
                    videoEnded();
                }
                isVideoEnded = true;
                def.fn.html(playPauseControl, def.icons.playBtn);
            });

            videoItem.addEventListener("timeupdate", () => {
                isPlaying = true;
                def.fn.html(playPauseControl, def.icons.pauseBtn);
                getCurrentDuration();
            });

            videoItem.addEventListener("loadeddata", () => {
                getFullDuration();
            });

            videoItem.addEventListener('pause', () => {
                def.fn.html(playPauseControl, def.icons.playBtn);
            })

            videoItem.addEventListener("progress", () => {
                const duration = videoItem.duration;
                if (duration > 0) {
                    for (let i = 0; i < video.buffered.length; i++) {
                        if (
                            videoItem.buffered.start(videoItem.buffered.length - 1 - i) <
                            videoItem.currentTime
                        ) {
                            progressBuffer.style.width = `${(videoItem.buffered.end(videoItem.buffered.length - 1 - i) * 100) /
                                duration
                                }%`;
                            break;
                        }
                    }
                }
            });
        }


        function touchvolumeHide() {
            let tv = 0;
            const tvTimer = setInterval(() => {
                tv++;
                if (tv >= 4) {
                    clearInterval(tvTimer);
                    tv = 0;
                    if (volumeSlider != undefined) {
                        def.fn.css(volumeSlider, {
                            width: '0px',
                            height: '5px',
                            background: 'red',
                            cursor: 'pointer',
                            transition: '0.5s'
                        });

                        def.fn.css(volumeSliderArea, {
                            width: '0px',
                            height: '5px',
                            background: 'gray',
                            cursor: 'pointer',
                            transition: '0.5s'
                        });
                        isSoundOpen = false;
                    }
                }
            })
        }

        function __init(url,poster=null) {
            fileExtention = extChecker(url);
            isYoutube = APIYoutube(url);
            isVimeo = APIVimeo(url);
            setDefaultVolume();

            if ((fileExtention == "mp4") | (fileExtention == "webm") | (fileExtention == "ogg") | (fileExtention == 'm4s')) {
                isVideoEnded = false;
                if (premium.v360) {
                    v360();
                } else {
                    if (encrypt == true) {
                        video.src = isEncrypt(url);
                    } else {
                        video.src = url;
                    }
                    video.setAttribute("type", typeGenerator(fileExtention));
                    video.load();
                    poster !== null ? video.setAttribute("poster", poster) : true;
                    videoListener();
                }
                playerName = 'mp4';
            }

            if (fileExtention == 'mkv') {
                isVideoEnded = false;
                if (isCast) {
                    video.setAttribute("type", typeGenerator(fileExtention));
                    video.src = url;
                    video.load();
                    videoListener();
                } else {
                    console.log("Your browser doesn't support the mkv file. Open with Google Chrome");
                }
                playerName = 'mp4';
                poster !== null ? video.setAttribute("poster", poster) : true;
            }

            if (fileExtention == 'flv') {
                isVideoEnded = false;
                videoListener();
                function loadFlv() {
                    (function loadVimeoScript() {
                        const tag = document.createElement('script');
                        tag.src = "https://bilibili.github.io/flv.js/dist/flv.js";
                        const firstScriptTag = document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                        tag.onload = setupFLV;
                    })();
                    def.fn.attribute(video, {
                        type: 'video/x-flv;audio/mp4;codecs=mp3'
                    });

                    function setupFLV() {
                        var flvPlayer = flvjs.createPlayer({
                            type: 'flv',
                            url: url
                        });
                        flvPlayer.attachMediaElement(video);
                        flvPlayer.load();
                        flvPlayer.play();
                    }

                }
                if (document.readyState !== "loading") {
                    console.info(`document.readyState ==>`, document.readyState);
                    loadFlv();
                } else {
                    document.addEventListener("DOMContentLoaded", function () {
                        console.info(`DOMContentLoaded ==>`, document.readyState);
                        loadFlv();
                    });
                }
                poster !== null ? video.setAttribute("poster", poster) : true;
                playerName = 'flv';
            }

            if (fileExtention == "m3u8") {
                isVideoEnded = false;
                videoListener();
                poster !== null ? video.setAttribute("poster", poster) : true;
                playerName = 'hls';
                let hlsData = undefined;
                let scriptsPromise = (async () => {
                    await loadScript(
                        "https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.2.7/hls.min.js"
                    );
                    if (Hls.isSupported()) {
                        var hls = new Hls({
                            debug: false,
                        });
                        if (encrypt == true) {
                            hls.loadSource(isEncrypt(url));
                        } else {
                            hls.loadSource(url);
                        }
                        hls.attachMedia(video);
                        hls.currentLevel = 0;

                        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                            ext = "application/x-mpegURL";
                        });
                        hls.on(
                            Hls.Events.MANIFEST_PARSED,
                            function onAudioTrackLoaded(event, data) {
                                hlsData = data;
                            }
                        );

                        function hlsAudioTrack() {
                            hlsAudio = '';
                            if (hlsData != undefined) {
                                hlsData.audioTracks.forEach((item, index) => {
                                    const items = `<absdiv data-id='${index}' class='abs_audio ${activeAudio == index ? 'abs_active' : ''}' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='${index}'>${item.name +
                                        " " +
                                        item.groupId
                                        }</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p></absdiv>`;
                                    hlsAudio += items;
                                })
                                def.fn.html(settingsOptionAfter, hlsAudio);
                                settingsOptionBefore.style.display = "none";
                                settingsOptionAfter.style.display = "flex";
                                def.fn.append(settingsOptionAfter, settingsBack);
                            } else {
                                return false;
                            }
                        }

                        itemAudio.addEventListener("click", () => {
                            hlsAudioTrack();

                            const audios = document.querySelectorAll(".abs_audio");
                            audios.forEach((item, index) => {
                                setcallBack(item, hlsToggleAudio);
                            })
                        });

                        function hlsToggleAudio(e) {
                            activeAudio = e.getAttribute("data-id");
                            const audios = document.querySelectorAll(".abs_audio");
                            for (let i = 0; i < audios.length; i++) {
                                def.fn.removeClass(audios[i], 'abs_active');
                                if (activeAudio == audios[i].getAttribute('data-id')) {
                                    def.fn.addClass(audios[i], 'abs_active');
                                }
                            }

                            def.fn.addClass(e, 'abs_active');
                            hls.audioTrack = e.getAttribute("data-id");
                        }

                        function hlsSubtitleTracks() {
                            hlsSubtitle = '';
                            def.fn.html(settingsOptionAfter, '');
                            if (hlsData != undefined) {
                                hlsData.subtitleTracks.forEach((item, index) => {
                                    const itemSub = `<absdiv data-id='${index}' class='abs_subtitle ${activeSubtitle == index ? 'abs_active' : ''}' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${item.name}</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p></absdiv>`;
                                    hlsSubtitle += itemSub;
                                    hlsSubtitleUrl.push(item.url);
                                    hlsSubtitleType.push(item.type);
                                });
                                def.fn.html(settingsOptionAfter, hlsSubtitle);
                                def.fn.append(settingsOptionAfter, settingsBack);
                                settingsOptionBefore.style.display = "none";
                                settingsOptionAfter.style.display = "flex";

                                const hlsCaptions = document.querySelectorAll(".abs_subtitle");
                                hlsCaptions.forEach((item, index) => {
                                    setcallBack(item, hlsToggleCaption);
                                })
                            } else {
                                return false;
                            }
                        }

                        itemSubtitle.addEventListener("click", () => {
                            hlsSubtitleTracks();
                        });

                        function hlsToggleCaption(e) {
                            activeSubtitle = e.getAttribute("data-id");
                            const hlsCaptions = document.querySelectorAll(".abs_subtitle");
                            for (let i = 0; i < hlsCaptions.length; i++) {
                                def.fn.removeClass(hlsCaptions[i], 'abs_active');
                                if (activeSubtitle == hlsCaptions[i].getAttribute('data-id')) {
                                    def.fn.addClass(hlsCaptions[i], 'abs_active');
                                }
                            }

                            def.fn.addClass(e, 'abs_active');
                            hls.subtitleTrack = e.getAttribute("data-id");
                        }

                        function setHLSLevel(level) {
                            let nLevel = "";
                            level >= 160 && level < 239 ? (nLevel = 160) : "auto";
                            level >= 240 && level < 359 ? (nLevel = 240) : "auto";
                            level >= 360 && level < 479 ? (nLevel = 360) : "auto";
                            level >= 480 && level < 539 ? (nLevel = 480) : "auto";
                            level >= 540 && level < 719 ? (nLevel = 540) : "auto";
                            level >= 720 && level < 1079 ? (nLevel = 720) : "auto";
                            level >= 1080 && level < 1379 ? (nLevel = 1080) : "auto";
                            level >= 1380 && level < 1780 ? (nLevel = 1444) : "auto";

                            return nLevel;
                        }

                        function setHLSBandwidth(band) {
                            if (band != undefined && band != '') {
                                const stBand = band.toString();
                                let newBand;
                                band <= 999999
                                    ? (newBand = stBand.substr(0, 3))
                                    : (newBand = stBand.substr(0, 4));
                                return newBand;
                            } else {
                                return 360;
                            }
                        }

                        function hlsQuality() {
                            hlsItem = '';
                            def.fn.html(settingsOptionAfter, '');
                            if (hlsData != undefined) {
                                hlsItem += `<absdiv data-id='0' class='abs_quality ${activeQuality == 0 || activeQuality == undefined ? 'abs_active' : ''}' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='0'>Auto</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='0'>${def.icons.rightArrow}</p></absdiv>`;
                                hlsData.levels.forEach((item, index) => {
                                    hlsFile.push(item.url[0]);
                                    const items = `<absdiv data-id='${index + 1
                                        }' class='abs_quality ${activeQuality == (index + 1) ? 'abs_active' : ''}' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='margin:0!important;font-size:12px;'>${setHLSLevel(item.height) +
                                        " <span style='font-size:12px;color:orange;font-family:sans-serif;'>(" +
                                        setHLSBandwidth(item.attrs["BANDWIDTH"]) +
                                        ")</span>kbps"
                                        }</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' >${def.icons.rightArrow}</p></absdiv>`;
                                    hlsItem += items;
                                });
                                def.fn.html(settingsOptionAfter, hlsItem);
                                settingsOptionBefore.style.display = "none";
                                settingsOptionAfter.style.display = "flex";
                                def.fn.append(settingsOptionAfter, settingsBack);

                                const qualities = document.querySelectorAll(".abs_quality");
                                qualities.forEach((item, index) => {
                                    setcallBack(item, hlsToggleQuality);
                                })
                            } else {
                                return false;
                            }
                        }

                        itemQuality.addEventListener("click", () => {
                            hlsQuality();
                        });

                        function hlsToggleQuality(e) {
                            activeQuality = e.getAttribute("data-id");
                            const qualities = document.querySelectorAll(".abs_quality");
                            for (let i = 0; i < qualities.length; i++) {
                                def.fn.removeClass(qualities[i], 'abs_active');
                                if (activeQuality == qualities[i].getAttribute('data-id')) {
                                    def.fn.addClass(qualities[i], 'abs_active');
                                }
                            }

                            def.fn.addClass(e, 'abs_active');
                            if (e.getAttribute("data-id") == 0) {
                                hls.autoLevelEnabled;
                                console.log("auto level enabled");
                            } else {
                                hls.currentLevel = e.getAttribute("data-id") - 1;
                            }
                        }
                    }
                })();
            }

            if (fileExtention == 'm3u') {
                fetch(url)
                    .then((response) => response.text())
                    .then((response) => {
                        var items = [];
                        var urls = [];


                        response.split("\n").map(function (item, index) {
                            if (item.indexOf("#EXTM3U") == -1) {
                                if (item.indexOf("#EXTINF:-1") != -1) {
                                    var et_txt = item.split(",");
                                    var info = et_txt[0].split(" ");
                                    var file_txt = item.replace('#EXTINF:-1', '');
                                    items.push({
                                        g_name: groupSanitiser(file_txt, 'tvg-id'),
                                        logo: groupSanitiser(file_txt, 'tvg-logo'),
                                        group: groupSanitiser(file_txt, 'group-title'),
                                        name: nameSanitizer(et_txt[1])
                                    });
                                } else {
                                    var ur = item.split("\r");
                                    if (ur[0].indexOf("EXTVLCOPT") == -1) {
                                        if (ur[0].length >= 1) {
                                            urls.push(ur[0]);
                                        }
                                    }
                                }
                            }

                            function sanitizeText(txt) {
                                if (txt != undefined && txt != '') {
                                    var san = txt.split("=");
                                    var sant = san[1];
                                    var index = sant.slice(1, -1);
                                    return index;
                                } else {
                                    return ' ';
                                }
                            }

                            function nameSanitizer(txt) {
                                if (txt != undefined && txt != '') {
                                    var san = txt.split("(");
                                    var sant = san[0].split("[");
                                    return sant[0].replace('\r', '');
                                } else {
                                    return ' ';
                                }
                            }

                            function groupSanitiser(txt, group_name) {
                                if (txt != undefined && txt != '') {
                                    let result = txt.indexOf(group_name + '="');
                                    let ntxt = txt.slice(result);
                                    let newIndex = ntxt.split(group_name + '="');
                                    let group_txt = newIndex[1].split('"');
                                    return group_txt[0];
                                } else {
                                    return ' ';
                                }
                            }
                        });
                        items.forEach((item, index) => {
                            if (index == 0) {
                                m3uIndex = index;
                                __init(urls[index],item.logo);
                            }
                            var box = def.fn.create('absdiv');
                            if (index == (items.length - 1)) {
                                def.fn.css(box, {
                                    display: 'flex',
                                    width: '100%',
                                    height: '35px',
                                    margin: '4px 0px',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    'padding-bottom': '120px',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start'
                                });
                            } else {
                                def.fn.css(box, {
                                    display: 'flex',
                                    width: '100%',
                                    height: '35px',
                                    margin: '4px 0px',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start'
                                });
                            }
                            def.fn.attribute(box, {
                                'data-id': index
                            });

                            box.addEventListener('click', () => {
                                m3uIndex = index;
                                __init(urls[index],item.logo);
                                m3uActive(index);
                            })
                            var img = def.fn.create('img');
                            def.fn.css(img, {
                                width: '30px',
                                height: '30px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                borderRadius: '50%'
                            });
                            def.fn.attribute(img, {
                                src: item.logo
                            })
                            def.fn.append(box, img);
                            var title = def.fn.create('p');
                            def.fn.css(title, {
                                fontSize: '12px',
                                color: '#fff',
                                'font-family': 'sans-serif',
                                marginLeft: '4px'
                            });
                            def.fn.html(title, item.name.slice(0, 20));
                            def.fn.attribute(img, { loading: 'lazy' });
                            def.fn.append(box, title);
                            playlistController.style.display = 'flex';
                            def.fn.append(playlistContainer, box);
                            m3uActive(m3uIndex);
                        });

                        function m3uActive(item) {
                            var allM3u = playlistContainer.querySelectorAll('absdiv');
                            allM3u.forEach(element => {
                                if (element.getAttribute('data-id') == item) {
                                    element.style.background = 'rgba(0,0,0,0.8)';
                                } else {
                                    element.style.background = 'none';
                                }
                            });
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }

            if (fileExtention == 'mpd' || fileExtention == 'dash') {
                console.log('Dash video start');
                playerName = 'dash';
                isVideoEnded = false;
                videoListener();
                poster !== null ? video.setAttribute("poster", poster) : true;
                function loadDash() {
                    (function loadVimeoScript() {
                        const tag = document.createElement('script');
                        tag.src = "https://cdn.dashjs.org/v3.1.0/dash.all.min.js";
                        const firstScriptTag = document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                        tag.onload = setupDash;
                    })();
                    def.fn.attribute(video, {
                        type: 'video/webm'
                    });
                    function playerSettigs() {
                        return dashPlayer.getSettings();
                    }
                    function setupDash() {
                        dashPlayer = dashjs.MediaPlayer().create();
                        dashPlayer.initialize(
                            video,
                            url,
                            false
                        );

                        dashPlayer.setInitialMediaSettingsFor('audio', {
                            lang: 'et-ET'
                        })
                        dashPlayer.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, function _onStreamActivated(e) {
                            var streamInfo = e.streamInfo;
                            updateDuration(streamInfo.manifestInfo.isDynamic);
                            isLive = streamInfo.manifestInfo.isDynamic;

                            function dashQuality() {
                                let videoLevels = dashPlayer.getBitrateInfoListFor && dashPlayer.getBitrateInfoListFor('video') || [];

                                if (videoLevels != undefined && Array.isArray(videoLevels)) {
                                    dashItem = '';
                                    def.fn.html(settingsOptionAfter, '');
                                    dashItem = `<absdiv data-id='0' class='abs_quality ${activeQuality == 0 || activeQuality == undefined ? 'abs_active' : ''}' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='0'>Auto</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='0'>${def.icons.rightArrow}</p></absdiv>`;
                                    videoLevels.forEach((item, index) => {
                                        const items = `<absdiv data-id='${index + 2
                                            }' class='abs_quality ${activeQuality == (index + 2) ? 'abs_active' : ''}' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='margin:0!important;'>${item.height +
                                            " <span style='font-size:12px;color:orange;font-family:sans-serif;'>(" +
                                            setDashSBandwidth(item.bitrate) +
                                            ")</span>kbps"
                                            }</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' >${def.icons.rightArrow}</p></absdiv>`;
                                        dashItem += items;
                                    });
                                    def.fn.html(settingsOptionAfter, dashItem);
                                    settingsOptionBefore.style.display = "none";
                                    settingsOptionAfter.style.display = "flex";
                                    def.fn.append(settingsOptionAfter, settingsBack);

                                    const qualities = document.querySelectorAll(".abs_quality");
                                    qualities.forEach((item, index) => {
                                        setcallBack(item, dashToggleQuality);
                                    })
                                }
                            }

                            itemQuality.addEventListener("click", () => {
                                dashQuality();
                            });

                            function dashToggleQuality(e) {
                                activeQuality = e.getAttribute("data-id");
                                const qualities = document.querySelectorAll(".abs_quality");
                                for (let i = 0; i < qualities.length; i++) {
                                    def.fn.removeClass(qualities[i], 'abs_active');
                                    if (activeQuality == qualities[i].getAttribute('data-id')) {
                                        def.fn.addClass(qualities[i], 'abs_active');
                                    }
                                }

                                def.fn.addClass(e, 'abs_active');
                                if (e.getAttribute("data-id") == 0) {
                                    dashBitrateSwitch('video', 0);
                                    console.log("auto level enabled");
                                } else {
                                    dashBitrateSwitch('video', e.getAttribute('data-id') - 1);
                                }
                            }

                            function dashTrack() {
                                let dashAudios = dashPlayer.getTracksFor('audio');
                                dashAudio = '';
                                def.fn.html(settingsOptionAfter, '');
                                if (dashAudios.length != undefined && Array.isArray(dashAudios)) {
                                    dashAudio = '';
                                    dashAudios.forEach((item, index) => {
                                        const items = `<absdiv data-id='${index + 1}' class='abs_audio ${activeAudio == index ? 'abs_active' : ''}' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${item.lang +
                                            " " +
                                            setDashSBandwidth(item.bitrateList[0].bandwidth)
                                            }</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p></absdiv>`;
                                        dashAudio += items;
                                    });
                                    def.fn.html(settingsOptionAfter, dashAudio);
                                    settingsOptionBefore.style.display = "none";
                                    settingsOptionAfter.style.display = "flex";
                                    def.fn.append(settingsOptionAfter, settingsBack);

                                    const audios = document.querySelectorAll(".abs_audio");
                                    audios.forEach((item, index) => {
                                        setcallBack(item, dashToggleAudio);
                                    })
                                }
                            }
                            itemAudio.addEventListener("click", () => {
                                dashTrack();
                            });

                            function dashToggleAudio(e) {
                                activeAudio = e.getAttribute("data-id");
                                const audios = document.querySelectorAll(".abs_audio");
                                for (let i = 0; i < audios.length; i++) {
                                    def.fn.removeClass(audios[i], 'abs_active');
                                    if (activeAudio == audios[i].getAttribute('data-id')) {
                                        def.fn.addClass(audios[i], 'abs_active');
                                    }
                                }

                                def.fn.addClass(e, 'abs_active');
                                dashPlayer.setCurrentTrack(dashPlayer.getTracksFor('audio')[e.getAttribute("data-id")]);
                            }


                        });

                        dashPlayer.on(dashjs.MediaPlayer.events.TEXT_TRACKS_ADDED, function _onTracksAdded(e) {
                            console.log('tracks loaded');
                            dashSubtitle = '';
                            def.fn.html(settingsOptionAfter, '');
                            function dashCaption() {
                                let dashSubtitles = e.tracks;
                                if (dashSubtitles.length != undefined && Array.isArray(dashSubtitles)) {
                                    dashSubtitles.forEach((item, index) => {
                                        const itemSub = `<absdiv data-id='${index}' class='abs_subtitle ${activeSubtitle == index ? 'abs_active' : ''}' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${item.name}</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p></absdiv>`;
                                        dashSubtitle += itemSub;
                                    })
                                    def.fn.html(settingsOptionAfter, dashSubtitle);
                                    def.fn.append(settingsOptionAfter, settingsBack);
                                    settingsOptionBefore.style.display = "none";
                                    settingsOptionAfter.style.display = "flex";

                                    const hlsCaptions = document.querySelectorAll(".abs_subtitle");
                                    hlsCaptions.forEach((item, index) => {
                                        setcallBack(item, dashToggleCaption);
                                    })
                                }
                            }

                            itemSubtitle.addEventListener("click", () => {
                                dashCaption();
                            });

                            function dashToggleCaption(e) {
                                activeSubtitle = e.getAttribute("data-id");
                                const hlsCaptions = document.querySelectorAll(".abs_subtitle");
                                for (let i = 0; i < hlsCaptions.length; i++) {
                                    def.fn.removeClass(hlsCaptions[i], 'abs_active');
                                    if (activeSubtitle == hlsCaptions[i].getAttribute('data-id')) {
                                        def.fn.addClass(hlsCaptions[i], 'abs_active');
                                    }
                                }

                                def.fn.addClass(e, 'abs_active');
                                dashPlayer.setTextTrack(e.getAttribute("data-id"));
                            }
                        })



                        function dashBitrateSwitch(type, index) {
                            var cfg = {
                                'streaming': {
                                    'abr': {
                                        'autoSwitchBitrate': {}
                                    }
                                }
                            };
                            if (index > 0) {
                                cfg.streaming.abr.autoSwitchBitrate[type] = false;
                                dashPlayer.updateSettings(cfg);
                                dashPlayer.setQualityFor(type, index, false);
                            } else {
                                cfg.streaming.abr.autoSwitchBitrate[type] = true;
                                dashPlayer.updateSettings(cfg);
                            }
                        }

                        function setDashSBandwidth(band) {
                            if (band != undefined && band != '') {
                                const stBand = band.toString();
                                let newBand;
                                band <= 999999
                                    ? (newBand = stBand.substr(0, 3))
                                    : (newBand = stBand.substr(0, 4));
                                return newBand;
                            } else {
                                return 360;
                            }
                        }
                        var updateDuration = function (dynamic) {
                            if (dynamic == true) {
                                def.fn.html(durationText, "<span style='color:red;width:30px;height:30px;border-radius:50%;'></span> <span style='font-size:12px;color:orange'>LIVE</span>");
                            }
                        };
                    }
                }
                if (document.readyState !== "loading") {
                    console.info(`document.readyState ==>`, document.readyState);
                    loadDash();
                } else {
                    document.addEventListener("DOMContentLoaded", function () {
                        console.info(`DOMContentLoaded ==>`, document.readyState);
                        loadDash();
                    });
                }
            }

            if (isYoutube == "yTb") {
                playerName = 'youtube';
                console.log("Youtube Start")
                function loadVideo() {
                    video.style.display = 'none';
                    ytPlayer.style.display = 'flex';
                    topControls.style.display = 'flex';
                    bottomControls.style.display = 'flex';
                    let dashItem = '',
                        dashAudio = '',
                        dashSubtitle = '',
                        hlsItem = '',
                        hlsAudio = '',
                        hlsSubtitle = '';
                    openControls();
                    controlResizer();
                    isVideoEnded = false;
                    let ytActualQuality = 'medium';
                    if (playerName == 'youtube' && youtubePlayer != null) {
                        loadingVideo(ytEvent, youtubeID(url));
                        setTimeout(function () {
                            youtubePlayer.playVideo();
                        }, 300);
                        getFullDuration();
                    } else {
                        (function loadYoutubeIFrameApiScript() {
                            const tag = document.createElement("script");
                            tag.src = "https://www.youtube.com/iframe_api";

                            const firstScriptTag = document.getElementsByTagName("script")[0];
                            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                            tag.onload = setupPlayer;
                        })();
                    }

                    function setupPlayer() {
                        window.YT.ready(function () {
                            youtubePlayer = new window.YT.Player("ytIframe", {
                                height: "390",
                                width: "640",
                                videoId: youtubeID(url),
                                playerVars: {
                                    autohide: 0,
                                    cc_load_policy: 0,
                                    controls: 0,
                                    disablekb: 1,
                                    iv_load_policy: 3,
                                    modestbranding: 0,
                                    rel: 0,
                                    showinfo: 0,
                                    start: 0,
                                    autoplay: 1,
                                    end:0,
                                    enablejsapi: 1,
                                    playerapiid: "absYtPlayer",
                                    html5: 1,
                                    playsinline:1
                                },
                                events: {
                                    onReady: onPlayerReady,
                                    onPlaybackQualityChange: onPlayerPlaybackQualityChange,
                                    onStateChange: onPlayerStateChange,
                                }
                            });
                        });
                    }


                    function youTubePlayerActive() {
                        currentEvent.info = youtubePlayer.playerInfo;
                        currentEvent.isPlaying = youtubePlayer.getPlayerState();
                        currentEvent.duration = youtubePlayer.getDuration();
                        currentEvent.currentTime = youtubePlayer.getCurrentTime();
                        currentEvent.volume = youtubePlayer.getVolume();
                        currentEvent.subtitle = youtubePlayer.cuePlaylist();
                        currentEvent.buffer = currentEvent.info.videoLoadedFraction;
                        getCurrentDuration();
                        getFullDuration();
                        currentEventChecker();
                        getBuffer();

                        if (playerName == 'youtube' && currentEvent.info != undefined && currentEvent.info.videoData != undefined) {
                            if (currentEvent.info.videoData.isLive == true) {
                                isLive = true;
                            }
                        }
                        setTimeout(youTubePlayerActive, 1000);
                    }


                    ytPlayer.addEventListener('mousedown', (e) => {
                        e.preventDefault();
                        if (e.button == 2) {
                            return false
                        }
                    });


                    function ytQualities() {
                        let data = currentEvent.info.availableQualityLevels;
                        currentEvent.qualityLabel = '';
                        currentEvent.quality = [];
                        def.fn.html(settingsOptionAfter, '');
                        if (Array.isArray((data)) && currentEvent.qualityLabel == '') {
                            for (let q = 0; q < data.length; q++) {
                                switch (data[q]) {
                                    case 'highres':
                                        currentEvent.quality.push(4320);
                                        currentEvent.qualityLabel += `<absdiv data-id='4320' class='ytQuality ${activeQuality == '4320' ? 'abs_active' : ''}' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='4320'>4320p<sup data-id="4320">8k</sup></p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='4320'>${def.icons.rightArrow}</p></absdiv>`
                                        break;
                                    case 'hd2160':
                                        currentEvent.quality.push(2160);
                                        currentEvent.qualityLabel += `<absdiv data-id='2160' class='ytQuality ${activeQuality == '2160' ? 'abs_active' : ''}' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='2160'>2160p<sup data-id="2160">4k</sup></p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='2160'>${def.icons.rightArrow}</p></absdiv>`
                                        break;
                                    case 'hd1440':
                                        currentEvent.quality.push(1440);
                                        currentEvent.qualityLabel += `<absdiv data-id='1440' class='ytQuality ${activeQuality == '1440' ? 'abs_active' : ''}' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='1440'>1440p<sup data-id="1440">2k</sup></p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='1440'>${def.icons.rightArrow}</p></absdiv>`
                                        break;
                                    case 'hd1080':
                                        currentEvent.quality.push(1080);
                                        currentEvent.qualityLabel += `<absdiv data-id='1080' class='ytQuality ${activeQuality == '1080' ? 'abs_active' : ''}' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='1080'>1080p<sup data-id="1080">hd</sup></p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='1080'>${def.icons.rightArrow}</p></absdiv>`
                                        break;
                                    case 'hd720':
                                        currentEvent.quality.push(720);
                                        currentEvent.qualityLabel += `<absdiv data-id='720' class='ytQuality ${activeQuality == '720' ? 'abs_active' : ''}' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='720'>720p<sup data-id="720">hd</sup></p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='720'>${def.icons.rightArrow}</p></absdiv>`
                                        break;
                                    case 'large':
                                        currentEvent.quality.push(480);
                                        currentEvent.qualityLabel += `<absdiv data-id='480' class='ytQuality ${activeQuality == '480' ? 'abs_active' : ''}' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='480'>480p<sup></sup></p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='480'>${def.icons.rightArrow}</p></absdiv>`
                                        break;
                                    case 'medium':
                                        currentEvent.quality.push(360);
                                        currentEvent.qualityLabel += `<absdiv data-id='360' class='ytQuality ${activeQuality == '360' ? 'abs_active' : ''}' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='360'>360p</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='360'>${def.icons.rightArrow}</p></absdiv>`
                                        break;
                                    case 'small':
                                        currentEvent.quality.push(240);
                                        currentEvent.qualityLabel += `<absdiv data-id='240' class='ytQuality ${activeQuality == '240' ? 'abs_active' : ''}' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='240'>240p</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='240'>${def.icons.rightArrow}</p></absdiv>`
                                        break;
                                    case 'tiny':
                                        currentEvent.quality.push(144);
                                        currentEvent.qualityLabel += `<absdiv data-id='144' class='ytQuality ${activeQuality == '144' ? 'abs_active' : ''}' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='144'>144p</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='144'>${def.icons.rightArrow}</p></absdiv>`
                                        break;
                                    default:
                                        currentEvent.quality.push(100);
                                        currentEvent.qualityLabel += `<absdiv data-id='100' class='ytQuality ${activeQuality == '100' ? 'abs_active' : ''}' style='width:90%;color:#fff;height:20px; margin:3px 0px;padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='100'>auto</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;' data-id='100'>${def.icons.rightArrow}</p></absdiv>`
                                }
                            }
                        }
                        settingsOptionBefore.style.display = "none";
                        settingsOptionAfter.style.display = "flex";
                        def.fn.html(settingsOptionAfter, currentEvent.qualityLabel);
                        def.fn.append(settingsOptionAfter, settingsBack);

                        const qualities = document.querySelectorAll(".ytQuality");
                        qualities.forEach((item, index) => {
                            setcallBack(item, ytToggleQuality);
                            if (item.getAttribute('data-id') == activeQuality) {
                                def.fn.addClass(item, 'abs_active');
                            }
                        })
                    }

                    function setYtQuality(q) {
                        let quality;
                        switch (q) {
                            case '4320':
                                quality = 'highres';
                                break;
                            case '2160':
                                quality = 'hd2160';
                                break;
                            case '1440':
                                quality = 'hd1440';
                                break;
                            case '1080':
                                quality = 'hd1080';
                                break;
                            case '720':
                                quality = 'hd720';
                                break;
                            case '480':
                                quality = 'large';
                                break;
                            case '360':
                                quality = 'medium';
                                break;
                            case '240':
                                quality = 'small';
                                break;
                            case '144':
                                quality = 'tiny';
                                break;
                            case '100':
                                quality = 'auto';
                                break;
                        }
                        return quality;
                    }

                    function currentEventChecker() {
                        if (currentEvent.isPlaying == 5 || currentEvent.isPlaying == -1 || currentEvent.isPlaying == 2 || currentEvent.isPlaying == '') {
                            isPlaying = false;
                            if (playerName == 'youtube') {
                                controlResizer();
                                playPauseControl.innerHTML = def.icons.playBtn;
                            }
                        } else {
                            if (playerName == 'youtube') {
                                isPlaying = true;
                                playPauseControl.innerHTML = def.icons.pauseBtn;
                            }
                        }

                        if (currentEvent.isPlaying == 0 && isVideoEnded == false) {
                            if (playerName == 'youtube') {
                                isVideoEnded = true;
                                videoEnded();
                            }
                        }
                    }

                    itemQuality.addEventListener("click", () => {
                        ytQualities();
                    })

                    itemSubtitle.addEventListener('click', () => {
                        console.log('clicked');
                    })

                    function ytToggleQuality(e) {
                        activeQuality = e.getAttribute('data-id');
                        const qualities = document.querySelectorAll(".ytQuality");
                        for (let q = 0; q < qualities.length; q++) {
                            def.fn.removeClass(qualities[q], 'abs_active');
                            if (qualities[q].getAttribute('data-id') == activeQuality) {
                                ytActualQuality = setYtQuality(qualities[q].getAttribute('data-id'));
                                def.fn.addClass(qualities[q], 'abs_active');
                                qualities[q].style.color = "orange";
                                youtubePlayer.pauseVideo();
                                youtubePlayer.playerInfo.playbackQuality = setYtQuality(qualities[q].getAttribute('data-id'));
                                youtubePlayer.setPlaybackQuality(getQualityIndex(ytQualityText, setYtQuality(qualities[q].getAttribute('data-id'))))
                                youtubePlayer.loadVideoById({
                                    'videoId': youtubeID(url),
                                    'startSeconds': currentEvent.currentTime,
                                    'suggestedQuality': setYtQuality(qualities[q].getAttribute('data-id'))
                                });
                                youtubePlayer.playVideo();
                            }
                        }
                    }

                    function onPlayerPlaybackQualityChange(event) {
                        event.target.setPlaybackQuality(ytActualQuality);
                        youtubePlayer.setPlaybackQuality(ytActualQuality);
                    }

                    function setNewQuality(q) {
                        youtubePlayer.loadVideoById({
                            'videoId': youtubePlayer.videoId,
                            'startSeconds': 0,
                            'suggestedQuality': q
                        });
                        youtubePlayer.playVideo();
                    }

                    function loadingVideo(event, q) {
                        event.target.cueVideoById({
                            'videoId': q,
                            'startSeconds': 0
                        });
                        youtubePlayer.playVideo();
                    }

                    function onPlayerReady(event) {
                        ytEvent = event;
                        youTubePlayerActive();
                        getFullDuration()
                        togglePlayPause()
                        loadingVideo(event, youtubeID(url));

                    }

                    function onPlayerStateChange(event) {
                        var videoStatuses = Object.entries(window.YT.PlayerState);
                        const state = event.target.getPlayerState();
                    }

                    setDefaultVolume();
                }

                if (document.readyState !== "loading") {
                    console.info(`document.readyState ==>`, document.readyState);
                    loadVideo();
                } else {
                    document.addEventListener("DOMContentLoaded", function () {
                        console.info(`DOMContentLoaded ==>`, document.readyState);
                        loadVideo();
                    });
                }

                function youtubeID(URL) {
                    let url;
                    if (encrypt == true) {
                        url = atob(URL);
                    } else {
                        url = URL;
                    }
                    const regex =
                        /(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/\S*?[^\w\s-])((?!videoseries)[\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/;
                    const newValue = url.match(regex);
                    if (regex.test(url)) {
                        return newValue[1];
                    }
                }
            }

            if (isVimeo && isVimeo != '') {
                playerName = 'vimeo';
                console.log("Vimeo video start");
                function loadVimeo() {
                    isVideoEnded = false;
                    video.style.display = 'none';
                    vimeoPlayer.style.display = 'block';
                    vimeoClick.style.display = 'block';
                    let vmqualityLabel = '';

                    (function loadVimeoScript() {
                        const tag = document.createElement('script');
                        tag.src = "https://player.vimeo.com/api/player.js";
                        const firstScriptTag = document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                        tag.onload = setupVimeo;
                    })();

                    function setupVimeo() {
                        const vmOptions = {
                            id: isVimeo,
                            width: vimeoPlayer.offsetWidth,
                            height: vimeoPlayer.offsetHeight,
                            controls: false,
                            responsive: true,
                        };

                        vmPlayer = new Vimeo.Player('vmFrame', vmOptions);

                        vmPlayer.on('play', function () {
                            vmActive = true;
                            isPlaying = true;
                            durationCurrent.innerHTML = formatDuration(vmCurrentTime);
                        });
                        vmPlayer.on('pause', function () {
                            vmActive = false;
                            durationCurrent.innerHTML = formatDuration(vmCurrentTime);
                        });

                        function getVmQuality() {
                            vmqualityLabel = '';
                            def.fn.html(settingsOptionAfter, '');
                            vmPlayer.getQualities().then(function (qualities) {
                                qualities.forEach((item, index) => {
                                    vmqualityLabel += `<absdiv data-id='${item.id}' class='vmQuality ${activeQuality == item.id ? 'abs_active' : ''}' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${item.label}</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p></absdiv>`
                                });
                                def.fn.html(settingsOptionAfter, vmqualityLabel);
                                settingsOptionBefore.style.display = "none";
                                settingsOptionAfter.style.display = "flex";
                                def.fn.append(settingsOptionAfter, settingsBack);

                                const vqualities = settingsOptionAfter.querySelectorAll(".vmQuality");
                                vqualities.forEach((item, index) => {
                                    setcallBack(item, vmQualitySet);
                                    if (item.getAttribute('data-id') == activeQuality) {
                                        def.fn.addClass(item, 'abs_active');
                                    }
                                })
                            }).catch(function (error) {
                                console.log(error)
                            });
                        }

                        itemQuality.addEventListener("click", () => {
                            if (playerName == 'vimeo') {
                                getVmQuality();
                            }
                        });

                        function vmSubtitles() {
                            vmPlayer.getTextTracks().then(function (tracks) {
                                hlsSubtitle = '';
                                tracks.forEach((item, index) => {
                                    const itemSub = `<absdiv data-id='${item.language}' class='abs_subtitle ${activeSubtitle == item.language ? 'abs_active' : ''}' style='width:90%;color:#fff;height:28px; padding:5px 2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;'><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${item.label}</p><p style='font-size:12px;font-family:sans-serif;margin:0 !important;'>${def.icons.rightArrow}</p></absdiv>`;
                                    hlsSubtitle += itemSub;
                                });

                                settingsOptionBefore.style.display = "none";
                                settingsOptionAfter.style.display = "flex";
                                def.fn.html(settingsOptionAfter, hlsSubtitle);
                                def.fn.append(settingsOptionAfter, settingsBack);

                                const qualities = document.querySelectorAll(".abs_subtitle");
                                qualities.forEach((item, index) => {
                                    setcallBack(item, vmSubtitleSet);
                                    if (item.getAttribute('data-id') == activeQuality) {
                                        def.fn.addClass(item, 'abs_active');
                                    }
                                })
                            }).catch(function (error) {
                                console.log(error)
                            });
                        }

                        itemSubtitle.addEventListener("click", () => {
                            if (playerName == 'vimeo') {
                                vmSubtitles();
                            }
                        })

                        vmPlayer.disableTextTrack().then(function () {
                            console.log('Disabled captions')
                        }).catch(function (error) {
                            console.log(error)
                        });

                        vmPlayer.getDuration().then(function (duration) {
                            vmDuration = duration
                            getFullDuration(vmDuration);
                            durationText.innerHTML = formatDuration(vmDuration);
                        }).catch(function (error) {
                            console.log(error);
                        });

                        vmPlayer.on('timeupdate', function (crTime) {
                            vmCurrentTime = crTime.seconds;
                            durationCurrent.innerHTML = formatDuration(vmCurrentTime);
                            getCurrentDuration();
                            buffered();
                        });

                        vmPlayer.on('ended', function (data) {
                            isVideoEnded = true;
                            videoEnded();
                        })

                        let vmsoundWidth = localStorage.getItem('abs_active_sound') ?? 20;
                        vmPlayer.setVolume(vmsoundWidth / 100).then(function (volume) {
                            return;
                        }).catch(function (error) {
                            console.log(error);
                        });

                        function buffered() {
                            vmPlayer.getBuffered().then(function (buffered) {
                                if (playerName == 'vimeo') {
                                    progressBuffer.style.width = parseInt(buffered[0][1] * progress.offsetWidth) / vmDuration + buffered[0][1] + "px";
                                }
                            }).catch(function (error) {
                                console.log(error);
                            });
                        }

                        function vmQualitySet(e) {
                            activeQuality = e.getAttribute('data-id');
                            const qualities = document.querySelectorAll(".vmQuality");
                            qualities.forEach((item, index) => {
                                def.fn.removeClass(item, 'abs_active');
                                if (item.getAttribute('data-id') == activeQuality) {
                                    def.fn.addClass(item, 'abs_active');
                                }
                            })

                            vmPlayer.setQuality(activeQuality).then(function (quality) {
                                console.log(quality);
                            }).catch(function (error) {
                                console.log(error)
                            });
                        }

                        function vmSubtitleSet(e) {
                            activeSubtitle = e.getAttribute('data-id');
                            const qualities = document.querySelectorAll(".abs_subtitle");
                            qualities.forEach((item, index) => {
                                def.fn.removeClass(item, 'abs_active');
                                if (item.getAttribute('data-id') == activeSubtitle) {
                                    def.fn.addClass(item, 'abs_active');
                                }
                            })

                            vmPlayer.enableTextTrack(activeSubtitle).then(function (track) {
                                console.log(track);
                            }).catch(function (error) {
                                console.log(error)
                            });
                        }
                    }

                }
                if (document.readyState !== "loading") {
                    console.info(`document.readyState ==>`, document.readyState);
                    loadVimeo();
                } else {
                    document.addEventListener("DOMContentLoaded", function () {
                        console.info(`DOMContentLoaded ==>`, document.readyState);
                        loadVimeo();
                    });
                }
            }

            if (isCast && isCastEnable == false) {
                isCastEnable = true;
                console.log("Cast starting");
                castControl.style.display = 'flex';
                function loadCast() {
                    (function loadAdsScript() {
                        const tag = document.createElement('script');
                        tag.src = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";
                        const firstScriptTag = document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                        tag.onload = setupCast;
                    })();

                    function setupCast() {
                        var initializeCastApi = function () {
                            console.log('initializeCastApi');

                            var sessionRequest = new chrome.cast.SessionRequest(
                                chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
                            var apiConfig = new chrome.cast.ApiConfig(
                                sessionRequest, sessionListener, receiverListener);
                            chrome.cast.initialize(apiConfig, onInitSuccess, onError);
                        };

                        if (!chrome.cast || !chrome.cast.isAvailable) {
                            setTimeout(initializeCastApi, 1000);
                        }

                        function onInitSuccess() {
                            console.log('onInitSuccess');
                        }

                        function onError(e) {
                            console.log('onError', e);
                        }

                        function sessionListener(e) {
                            console.log('sessionListener', e);
                        }

                        function receiverListener(availability) {
                            console.log('receiverListener', availability);

                            if (availability === chrome.cast.ReceiverAvailability.AVAILABLE) {
                                console.log("cast disabled");
                            }
                        }

                        function onSessionRequestSuccess(session) {
                            console.log('onSessionRequestSuccess', session);

                            var mediaInfo = new chrome.cast.media.MediaInfo(
                                url,
                                "video/mp4");
                            var request = new chrome.cast.media.LoadRequest(mediaInfo);
                            session.loadMedia(request, onMediaLoadSuccess, onError);
                        }

                        function onMediaLoadSuccess(e) {
                            console.log('onMediaLoadSuccess', e);
                        }
                        castControl.addEventListener('click', () => {
                            chrome.cast.requestSession(onSessionRequestSuccess, onError);
                        })
                    }
                }

                if (document.readyState !== "loading") {
                    console.info(`document.readyState ==>`, document.readyState);
                    loadCast();
                } else {
                    document.addEventListener("DOMContentLoaded", function () {
                        console.info(`DOMContentLoaded ==>`, document.readyState);
                        loadCast();
                    });
                }
            }

            function v360() {
                if (premium.v360) {
                    console.log("load360 video")
                    function load360() {
                        openControls();
                        (function loadYoutubeIFrameApiScript() {
                            const tag = document.createElement("script");
                            tag.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

                            const firstScriptTag = document.getElementsByTagName("script")[0];
                            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                            tag.onload = setupPlayer;
                        })();

                        function setupPlayer() {
                            const scene = new THREE.Scene();
                            const width = video.offsetWidth;
                            const height = video.offsetHeight;
                            const camera = new THREE.PerspectiveCamera(75, width / height, 1, 100);
                            const renderer = new THREE.WebGLRenderer();
                            renderer.setSize(width, height);
                            player360.appendChild(renderer.domElement);
                            youtubeClick.style.display = 'none';
                            const geometry = new THREE.SphereGeometry(15, 32, 16);
                            video360 = document.createElement('video');
                            video360.src = url;
                            video360.playsInline = true;
                            video360.crossOrigin = "anonymous";
                            const texture = new THREE.VideoTexture(video360);
                            const material = new THREE.MeshBasicMaterial({ map: texture });
                            material.side = THREE.BackSide;
                            const mesh = new THREE.Mesh(geometry, material);
                            scene.add(mesh);
                            renderer.setAnimationLoop(() => renderer.render(scene, camera));
                            const clamp = (v, min, max) => Math.max(min, Math.min(v, max));
                            renderer.domElement.addEventListener('wheel', e => {
                                camera.fov = clamp(camera.fov + e.deltaY / 10, 10, 120);
                                camera.updateProjectionMatrix();
                            });
                            let mouseDown = false;
                            renderer.domElement.addEventListener('mousedown', e => {
                                if (e.button === 0) mouseDown = true;
                            });
                            window.addEventListener('mouseup', e => {
                                if (e.button === 0) mouseDown = false;
                            });
                            window.addEventListener('mousemove', e => {
                                if (!mouseDown) return;
                                const { movementX, movementY } = e;
                                const rotateX = movementY / 100;
                                const rotateY = movementX / 100;
                                camera.rotateX(rotateX);
                                camera.rotateY(rotateY);
                            });
                        }
                    }

                    if (document.readyState !== "loading") {
                        console.info(`document.readyState ==>`, document.readyState);
                        load360();
                    } else {
                        document.addEventListener("DOMContentLoaded", function () {
                            console.info(`DOMContentLoaded ==>`, document.readyState);
                            load360();
                        });
                    }
                }
            }


            function runADS() {
                forcePause();
                if (premium.vast && premium.vast != '') {
                    console.log("Video ad start");
                    isVast = true;
                    adsLogic();
                    controls.style.display = 'none';
                    adsHandler.style.display = 'block';
                    progress.style.display = 'none';
                    durationArea.style.display = 'none';
                    function loadAds() {
                        (function loadAdsScript() {
                            const tag = document.createElement('script');
                            tag.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
                            const firstScriptTag = document.getElementsByTagName('script')[0];
                            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                            tag.onload = setupAds;
                        })();

                        function setupAds() {

                            let adsManager;
                            let adsLoader;
                            let adDisplayContainer;
                            let intervalTimer;
                            let videoContent;

                            function init() {
                                videoContent = adsContentVideo;
                                videoContent.volume = 0.2;
                                isActiveAdd = true;
                                if (isVast == true) {
                                    adsHandler.addEventListener('click', () => {
                                        playAds();
                                    });
                                    adsHandler.addEventListener('click', () => {
                                        onContentResumeRequested();
                                    })
                                }

                                setUpIMA();
                            }

                            function setUpIMA() {
                                try {
                                    createAdDisplayContainer();
                                    google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED);
                                    adsLoader = new google.ima.AdsLoader(adDisplayContainer);
                                    adsLoader.addEventListener(
                                        google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                                        onAdsManagerLoaded, false);
                                    adsLoader.addEventListener(
                                        google.ima.AdErrorEvent.Type.AD_ERROR, onAdError, false);

                                    const contentEndedListener = function () {
                                        adsLoader.contentComplete();
                                    };
                                    videoContent.onended = contentEndedListener;

                                    const adsRequest = new google.ima.AdsRequest();
                                    adsRequest.adTagUrl = premium.vast;

                                    adsRequest.linearAdSlotWidth = adsContainer.offsetWidth;
                                    adsRequest.linearAdSlotHeight = adsContainer.offsetHeight;

                                    adsRequest.nonLinearAdSlotWidth = adsContainer.offsetWidth;
                                    adsRequest.nonLinearAdSlotHeight = adsContainer.offsetHeight;

                                    adsLoader.requestAds(adsRequest);
                                } catch (error) {
                                    isActiveAdd = false;
                                    closeCounter();
                                }
                            }


                            function createAdDisplayContainer() {

                                adDisplayContainer = new google.ima.AdDisplayContainer(
                                    document.getElementById('loader'), videoContent);
                            }


                            function playAds() {
                                if (isVast == true) {
                                    videoContent.load();
                                    adDisplayContainer.initialize();
                                    adsContainer.style.display = 'block';
                                    adsContent.style.display = 'block';
                                    adsContentVideo.style.zIndex = 99999999;
                                    adsContentVideo.style.display = 'block';
                                    try {
                                        adsManager.init(adsContainer.offsetWidth, adsContainer.offsetHeight, google.ima.ViewMode.NORMAL);
                                        adsManager.start();
                                    } catch (adError) {
                                        isActiveAdd = false;
                                        contentRelease();
                                    }
                                }
                            }


                            function onAdsManagerLoaded(adsManagerLoadedEvent) {
                                const adsRenderingSettings = new google.ima.AdsRenderingSettings();
                                adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
                                adsManager =
                                    adsManagerLoadedEvent.getAdsManager(videoContent, adsRenderingSettings);

                                adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);
                                adsManager.addEventListener(
                                    google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, onContentPauseRequested);
                                adsManager.addEventListener(
                                    google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
                                    onContentResumeRequested);
                                adsManager.addEventListener(
                                    google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAdEvent);

                                adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, onAdEvent);
                                adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, onAdEvent);
                                adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, onAdEvent);
                                adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, onAdEvent);
                            }

                            function onAdEvent(adEvent) {
                                const ad = adEvent.getAd();
                                if (adEvent.type == 'loaded') {
                                    if (!ad.isLinear()) {
                                        videoContent.play();
                                    }
                                } else if (adEvent.type == 'start') {
                                    if (ad.isLinear()) {
                                        intervalTimer = setInterval(
                                            function () {
                                            },
                                            300);
                                    }
                                } else if (adEvent.type == 'complete' || adEvent.type == 'allAdsCompleted') {
                                    contentRelease();
                                    if (ad.isLinear()) {
                                        clearInterval(intervalTimer);
                                    }
                                    isActiveAdd = false;
                                } else if (adEvent.type == 'click') {
                                    onContentResumeRequested();
                                }
                            }


                            function onAdError(adErrorEvent) {
                                contentRelease();
                                isActiveAdd = false;
                                if (adsManager) {
                                    adsManager.destroy();
                                }
                            }


                            function onContentPauseRequested() {
                                videoContent.play();
                            }

                            function onContentResumeRequested() {
                                videoContent.play();
                            }

                            init();

                        }
                    }

                    function xmlVast() {
                        var vast = (premium.encrypt) ? atob(premium.vast) : premium.vast;
                        fetch(vast)
                            .then((response) => response.text())
                            .then((response) => {
                                if (response && response != "" && response != 'notFound') {
                                    isActiveAdd = true;
                                    let myXml = new DOMParser().parseFromString(response, "text/xml");
                                    let ads = myXml.firstChild.innerHTML ?? undefined;
                                    let adsXml = new DOMParser().parseFromString(ads, "text/xml") ?? undefined;
                                    let allAds = adsXml.querySelectorAll("Creative") ?? undefined;
                                    if (allAds != undefined) {
                                        allAds.forEach((item, index) => {
                                            let time = xmlLinkparser(item.querySelector('Duration').textContent) ?? undefined;
                                            let vastAds = xmlLinkparser(item.querySelector("MediaFile").innerHTML) ?? undefined;
                                            let vastAdsType = item.querySelector("MediaFile").getAttribute('type') ?? undefined;
                                            let vastReffer = xmlLinkparser(item.querySelector("ClickThrough").innerHTML) ?? undefined;
                                            let impressions = xmlLinkparser(adsXml.querySelector("Impression").innerHTML) ?? undefined;
                                            let Plays = xmlLinkparser(adsXml.querySelector("Plays").innerHTML) ?? undefined;
                                            let Clicks = xmlLinkparser(adsXml.querySelector("ClickTracking").innerHTML) ?? undefined;
                                            let vastImg = xmlLinkparser(item.querySelector("ClickTracking").innerHTML) ?? undefined;
                                            vastStart(vastAds, vastAdsType, vastReffer, vastImg, time, Clicks, Plays);
                                            vastImpressions(impressions)
                                        });
                                    }
                                } else {
                                    isActiveAdd = false;
                                    contentRelease();
                                    console.warn("No XML ads found");
                                }
                            }).catch(error => {
                                isActiveAdd = false;
                                contentRelease();
                                console.warn("ads running errors = " + error);
                                alert('AdBlocker Detected');
                            })

                        function xmlLinkparser(link) {
                            let oldLink = link.replace('<![CDATA[', '');
                            let newLink = oldLink.replace(']]>', '');
                            return newLink.trim();
                        }

                        function vastImpressions(url) {
                            def.fn.getAjax(url, {}, (response) => {
                                console.log(response)
                            })
                        }

                        function clickHandler(url, clicks) {
                            if (window.open(url, '_blank')) {
                                def.fn.getAjax(clicks + "&data=1", {}, (response) => {
                                    console.log(response)
                                })
                            }
                        }

                        function vastStart(ads, type, url, img, duration, clicks, Plays) {
                            if (ads != undefined) {
                                def.fn.attribute(adsContentVideo, {
                                    src: ads,
                                    type: type,
                                    poster: img
                                });
                                let isClick = 'false';
                                let isAdsRunning = false;
                                adsHandler.style.display = 'none';
                                adsContainer.style.display = 'block';
                                adsContent.style.display = 'block';
                                adsContentVideo.style.display = 'block';
                                adsTimer.style.display = 'flex';
                                adsContentVideo.style.zIndex = 99999999;
                                let adsTime = duration.substring(duration.lastIndexOf(":") + 1);
                                adsContentVideo.play() ? true : adsContentVideo.load();
                                try {
                                    adsContentVideo.muted = true;
                                    adsContentVideo.play();
                                } catch (error) {
                                    console.log(error)
                                    adsHandler.style.display = 'block';
                                    adsHandler.addEventListener('click', () => {
                                        adsHandler.style.display = 'none';
                                        adsContentVideo.play();
                                    })
                                }
                                adsContentVideo.addEventListener('click', () => {
                                    if (isAdsRunning == true) {
                                        clickHandler(url, clicks)
                                    } else {
                                        adsContentVideo.play();
                                    }
                                });
                                adsContentVideo.addEventListener('ended', () => {
                                    isActiveAdd = false;
                                    contentRelease();
                                    def.fn.getAjax(Plays, {}, (response) => {
                                        console.log(response);
                                    });
                                });
                                adsContentVideo.addEventListener('timeupdate', () => {
                                    isAdsRunning = true;
                                    let adsCurrentTime = Math.floor(adsContentVideo.currentTime);
                                    def.fn.html(adsTimer, adsTime - adsCurrentTime);
                                })
                            }
                        }
                    }

                    if (document.readyState !== "loading") {
                        console.info(`document.readyState ==>`, document.readyState);
                        let adsExt = extChecker(premium.vast);
                        if (!adsExt) {
                            loadAds();
                        } else {
                            if (adsExt.indexOf('xml') != -1) {
                                xmlVast();
                            } else {
                                loadAds();
                            }
                        }
                    } else {
                        document.addEventListener("DOMContentLoaded", function () {
                            console.info(`DOMContentLoaded ==>`, document.readyState);
                            let adsExt = extChecker(premium.vast);
                            if (adsExt && adsExt.indexOf('xml') != -1) {
                                xmlVast();
                            } else {
                                loadAds();
                            }
                        });
                    }
                } else {
                    isVast = false;
                    forcePlay();
                }
            }

            function adsWaterFall() {
                if (premium.vast != '') {
                    isVast = true;
                    runADS();
                }
            } adsWaterFall();


            function adsLogic() {
                const adsCounter = setInterval(() => {
                    if (currentDuration == 50 && isMidroll == false) {
                        isMidroll = true;
                        clearInterval(adsCounter);
                        runADS();
                    }
                }, 1000)
            }

            if (xplayer.indexOf(playerName) == -1) {
                xplayer.push(playerName);
            }
            hideXplayer(url);
        }

        function hideXplayer(url) {
            stopPlayer();
            if (playerName == 'youtube' && youtubePlayer != undefined && isYoutube == 'yTb' | isYoutube != undefined) {
                def.fn.id('ytIframe').style.display = 'flex';
                video.style.display = 'none';
                vimeoPlayer.style.display = 'none';
                setTimeout(function () {
                    youtubePlayer.playVideo();
                }, 300);
            }

            if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                video.style.display = 'flex';
                def.fn.id('ytIframe').style.display = 'none';
                vimeoPlayer.style.display = 'none';
                vimeoClick.style.display = 'none';
                setTimeout(function () {
                    video.play();
                }, 300);
            }

            if (playerName == 'vimeo') {
                def.fn.id('ytIframe').style.display = 'none';
                video.style.display = 'none';
                vimeoPlayer.style.display = 'block';
                vimeoClick.style.display = 'block';

                if (vmPlayer != undefined && vmPlayer != null) {
                    vmPlayer.loadVideo(url).then(function (url) {
                        vmPlayer.play();
                    });
                    setTimeout(function () {
                        vmPlayer.play();
                    }, 300);
                }
                setTimeout(function () {
                    vmPlayer.play();
                }, 500);
            }
        }

        function stopPlayer() {
            xplayer.forEach(xxplayer => {
                if (xxplayer == 'mp4' | xxplayer == 'hls' | xxplayer == 'dash' | xxplayer == 'flv' | xxplayer == 'mkv') {
                    video.pause();
                }

                if (xxplayer == 'vimeo' && vmPlayer != undefined) {
                    vmPlayer.pause();
                }

                if (xxplayer == 'youtube' && youtubePlayer != undefined && isYoutube == 'yTb' | isYoutube != undefined) {
                    youtubePlayer.pauseVideo();
                }
            });
        }

        function videoEnded() {
            if (playIndex < playlist.length) {
                playIndex++;
                isVideoEnded = false;
                __init(playlist[playIndex].url);
                playlistActive(playIndex);
            } else {
                playIndex = 0;
                forcePause();
                def.fn.html(playPauseControl, def.icons.playBtn);
                return;
            }
        }

        function playlistActive(item) {
            var allM3u = playlistContainer.querySelectorAll('absdiv');
            allM3u.forEach(element => {
                if (element.getAttribute('data-id') == item) {
                    element.classList.add('abs_active');
                } else {
                    element.classList.remove('abs_active');
                }
            });
        }

        function playlistActiveEvent(e) {
            playIndex = e.getAttribute('data-id');
            __init(urls[playIndex]);
            playlistActive(playIndex);
        }

        function togglePlaylist() {
            if (playlistContainer.style.marginRight == '-280px') {
                playlistContainer.style.marginRight = '0px';
            } else {
                playlistContainer.style.marginRight = '-280px'
            }
        }

        function destroyPlayer(texts) {
            forcePause();
            const removeList = [video, ytPlayer, vimeoPlayer, adsHandler, controls, progress, youtubeClick, vimeoClick, adsContainer, durationArea, player360, loader];

            removeList.forEach(item => {
                if (item && item != undefined) {
                    item.remove();
                }
            })
            def.fn.attribute(player, {
                'oncontextmenu': 'return false'
            });
            errorMsg.textContent = texts;
            return false;
        }

        function isValidApi() {
            if (!activeApi) {
                destroyPlayer("Invalid API Key");
            }
        }

        function checkApi() {
            apiCall++;
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const response = JSON.parse(this.responseText);
                    if (response.status !== 1) {
                        destroyPlayer(response.message)
                    }
                }
            };
            xhttp.open("GET", "https://abdursoft.com/license/verify/api/" + premium.api_key + '/' + window.location.hostname);
            xhttp.send();
        }
        const apiInterval = setInterval(() => {
            checkApi();
            if (apiCall == 2) {
                clearInterval(apiInterval);
                apiCall = 0;
            }
        }, 1000);

        function contentRelease() {
            isVast = false;
            if ((fileExtention == "mp4") | (fileExtention == "webm") | (fileExtention == "ogg") | fileExtention == "m3u8" || fileExtention == 'mpd') {
                video.style.display = 'block';
            } else if (isYoutube == "yTb") {
                ytPlayer.style.display = 'flex';
            } else if (playerName == 'vimeo') {
                vimeoPlayer.style.display = 'block';
            } else {
                return;
            }

            controls.style.display = 'flex';
            progress.style.display = 'flex';
            adsContainer.style.display = 'none';
            adsContent.style.display = 'none';
            adsContentVideo.style.display = 'none';
            adsTimer.style.display = 'none';
            adsHandler.style.display = 'none';
            forcePlay();
        }

        let closeControle = setInterval(() => {
            closeCounterNumber++;
            if (closeCounterNumber >= 5) {
                if (isMenu && isPlaying) {
                    closeControle;
                }
                closeControls();
            }
        }, 1000);

        function closeCounter() {
            if (isMenu && isPlaying) {
                closeControle;
            }
        }

        function isMouseMove() {
            closeCounterNumber = 0;
            openControls();
        }

        function openControls() {
            if ((!isActiveAdd | isActiveAdd === undefined) && !isVast) {
                def.fn.css(controls, {
                    background: controlsBG,
                    width: "100%",
                    height: "50px",
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    zIndex: normalIndex,
                    transition: '0.5s'
                });
                def.fn.css(durationArea, {
                    display: 'flex',
                    width: '98%',
                    position: 'absolute',
                    left: '1%',
                    right: '1%',
                    bottom: '58px',
                    zIndex: 99999,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: '0.5s'
                });
                progress.style.bottom = '50px';
                isMenu = true;
            }
            closeCounter();
        }

        function closeControls() {
            if (isPlaying && isMenu) {
                def.fn.css(controls, {
                    background: controlsBG,
                    width: "100%",
                    height: "0",
                    position: "absolute",
                    left: 0,
                    bottom: '-60px',
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    zIndex: 999999,
                    transition: '0.5s'
                });
                def.fn.css(durationArea, {
                    display: 'flex',
                    width: '98%',
                    position: 'absolute',
                    left: '1%',
                    right: '1%',
                    bottom: '5px',
                    zIndex: 99999,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: '0.5s'
                });
                progress.style.bottom = '0px';
                !isMenu;
            } else {
                return false;
            }
        }

        function getSpeedIndex(items, i) {
            for (let l = 0; l < items.length; l++) {
                if (items[l] == i) {
                    return items[l]
                }
            }
        }

        function getQualityIndex(items, i) {
            for (let l = 0; l < items.length; l++) {
                if (items[l] == i) {
                    return l;
                }
            }
        }

        function scrubbing(e) {
            let sTime = 0;
            let times = Math.round(e.offsetX);
            const rect = progress.getBoundingClientRect();
            const percent = e.x - rect.x;
            if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                sTime = (percent * (video.duration ?? 0)) / progress.offsetWidth;
            } else if (playerName == 'youtube') {
                sTime = percent * (currentEvent.duration ?? 0) / progress.offsetWidth;
            } else if (playerName == 'vimeo') {
                sTime = (percent * (vmDuration ?? 0)) / progress.offsetWidth;
            }
            progress.style.height = "6px";
            progressTooltip.style.display = 'flex';
            progressTooltip.style.marginLeft = (times - (progressTooltip.offsetWidth / 3)) + "px";
            if (isLive) {
                def.fn.html(progressTooltip, "00:00");
            } else {
                def.fn.html(progressTooltip, formatDuration(sTime));
            }
        }


        function toggleScrubbing(e) {
            if (!isLive) {
                const rect = progress.getBoundingClientRect();
                const percent = e.x - rect.x;

                if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                    video.currentTime = (percent * (video.duration ?? 0)) / progress.offsetWidth;
                } else if (playerName == 'youtube') {
                    youtubePlayer.seekTo(percent * (currentEvent.duration ?? 0) / progress.offsetWidth, true)
                } else if (playerName == 'vimeo') {
                    vmPlayer.setCurrentTime((percent * (vmDuration ?? 0)) / progress.offsetWidth);
                }
            }
        }


        function getFullDuration() {
            if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                if (premium.v360) {
                    durationText.innerHTML = formatDuration(video360.duration) ?? '00';
                    maxDuration = video360.duration ?? '00';
                } else {
                    durationText.innerHTML = formatDuration(video.duration) ?? '00';
                    maxDuration = video.duration ?? '00';
                }
            } else if (playerName == 'youtube') {
                durationText.innerHTML = formatDuration(currentEvent.duration) ?? '00';
                maxDuration = currentEvent.duration ?? '00';
            } else if (playerName == 'vimeo') {
                durationText.innerHTML = formatDuration(vmDuration) ?? '00';
                maxDuration = vmDuration ?? '00';
            }
        }

        function nextDuration() {
            if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                return video.duration;
            } else if (playerName == 'youtube') {
                return currentEvent.duration;
            } else if (playerName == 'vimeo') {
                return vmDuration;
            }
        }

        function getCurrentDuration() {
            if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                durationCurrent.innerHTML = formatDuration(video.currentTime);
                var size = parseInt(
                    (video.currentTime * progress.offsetWidth) / video.duration
                );
                currentDuration = Math.ceil(video.currentTime);
                progressTimeline.style.width = size + "px";
            }
            if (playerName == 'youtube') {
                durationCurrent.innerHTML = formatDuration(parseInt(currentEvent.currentTime));
                var size = parseInt(
                    (currentEvent.currentTime * progress.offsetWidth) / currentEvent.duration
                );
                currentDuration = parseInt(currentEvent.currentTime);
                progressTimeline.style.width = size + "px";
            }
            if (playerName == 'vimeo') {
                var size = parseInt((vmCurrentTime * progress.offsetWidth) / vmDuration);
                progressTimeline.style.width = size + "px";
                currentDuration = Math.ceil(vmCurrentTime);
            }

            if (Math.ceil(maxDuration) != Math.ceil(nextDuration()) || isLive == true) {
                def.fn.html(durationText, "<span style='color:red'></span> <span style='font-size:12px;color:orange'>LIVE</span>");
            }

            if (currentDuration >= 1) {
                removePoster();
            }
        }

        function getBuffer() {
            const duration = currentEvent.duration;
            if (duration > 0 && playerName == 'youtube') {
                progressBuffer.style.width = parseInt(currentEvent.currentTime * progress.offsetWidth) / currentEvent.duration + currentEvent.buffer + "px"

            }
        }

        function handleTimelineUpdate(e) {
            const rect = timelineContainer.getBoundingClientRect();
            const percent =
                Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
            const previewImgNumber = Math.max(
                1,
                Math.floor((percent * video.duration) / 10)
            );
            timelineContainer.style.setProperty("--preview-position", percent);

            if (isScrubbing) {
                e.preventDefault();
                timelineContainer.style.setProperty("--progress-position", percent);
            }
        }

        const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
            minimumIntegerDigits: 2,
        });

        function formatDuration(time) {
            if (!time) {
                return "00:00:00";
            } else {
                const seconds = Math.floor(time % 60);
                const minutes = Math.floor(time / 60) % 60;
                const hours = Math.floor(time / 3600);
                if (hours === 0) {
                    return `${minutes ?? 0}:${leadingZeroFormatter.format(seconds ?? 0)}`;
                } else {
                    return `${hours ?? 0}:${leadingZeroFormatter.format(
                        minutes ?? 0
                    ) ?? '00'}:${leadingZeroFormatter.format(seconds) ?? '00'}`;
                }
            }

        }

        function seekBackward() {
            if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                if (video.currentTime - 15 >= 0) {
                    durationCurrent.innerHTML = formatDuration(video.currentTime - 15);
                    var size = parseInt(
                        ((video.currentTime - 15) * progress.offsetWidth) / video.duration
                    );
                    video.currentTime = video.currentTime - 15;
                    currentDuration = Math.ceil(video.currentTime);
                    progressTimeline.style.width = size + "px";
                } else {
                    durationCurrent.innerHTML = formatDuration(0);
                    var size = parseInt(
                        (0 * progress.offsetWidth) / video.duration
                    );
                    video.currentTime = 0;
                    currentDuration = Math.ceil(0);
                    progressTimeline.style.width = size + "px";
                }
            }
            if (playerName == 'youtube') {
                if (currentEvent.currentTime - 15 >= 0) {
                    durationCurrent.innerHTML = formatDuration(parseInt(currentEvent.currentTime - 15));
                    var size = parseInt(
                        ((currentEvent.currentTime - 15) * progress.offsetWidth) / currentEvent.duration
                    );
                    currentDuration = parseInt(currentEvent.currentTime - 15);
                    progressTimeline.style.width = size + "px";
                    youtubePlayer.seekTo(currentEvent.currentTime - 15);
                } else {
                    durationCurrent.innerHTML = formatDuration(parseInt(0));
                    var size = parseInt(
                        (0 * progress.offsetWidth) / currentEvent.duration
                    );
                    currentDuration = parseInt(0);
                    progressTimeline.style.width = size + "px";
                    youtubePlayer.seekTo(0);
                }
            }
            if (playerName == 'vimeo') {
                if ((vmCurrentTime - 15) >= 0) {
                    var size = parseInt(((vmCurrentTime - 15) * progress.offsetWidth) / vmDuration);
                    progressTimeline.style.width = size + "px";
                    currentDuration = Math.ceil(vmCurrentTime - 15);
                    vmPlayer.setCurrentTime(vmCurrentTime - 15);
                } else {
                    var size = parseInt((0 * progress.offsetWidth) / vmDuration);
                    progressTimeline.style.width = size + "px";
                    currentDuration = Math.ceil(0);
                    vmPlayer.setCurrentTime(0);
                }
            }
        }

        function seekForward() {
            if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                if (video.currentTime + 15 <= video.duration) {
                    durationCurrent.innerHTML = formatDuration(video.currentTime + 15);
                    var size = parseInt(
                        ((video.currentTime + 15) * progress.offsetWidth) / video.duration
                    );
                    video.currentTime = video.currentTime + 15;
                    currentDuration = Math.ceil(video.currentTime);
                    progressTimeline.style.width = size + "px";
                } else {
                    durationCurrent.innerHTML = formatDuration(video.duration);
                    var size = parseInt(
                        (video.duration * progress.offsetWidth) / video.duration
                    );
                    video.currentTime = video.duration;
                    currentDuration = Math.ceil(video.duration);
                    progressTimeline.style.width = size + "px";
                }
            }
            if (playerName == 'youtube') {
                if (currentEvent.currentTime + 15 <= currentEvent.duration) {
                    durationCurrent.innerHTML = formatDuration(parseInt(currentEvent.currentTime + 15));
                    var size = parseInt(
                        ((currentEvent.currentTime + 15) * progress.offsetWidth) / currentEvent.duration
                    );
                    currentDuration = parseInt(currentEvent.currentTime + 15);
                    progressTimeline.style.width = size + "px";
                    youtubePlayer.seekTo(currentEvent.currentTime + 15);
                } else {
                    durationCurrent.innerHTML = formatDuration(parseInt(currentEvent.duration));
                    var size = parseInt(
                        (currentEvent.duration * progress.offsetWidth) / currentEvent.duration
                    );
                    currentDuration = parseInt(currentEvent.duration);
                    progressTimeline.style.width = size + "px";
                    youtubePlayer.seekTo(currentEvent.duration);
                }
            }
            if (playerName == 'vimeo') {
                if ((vmCurrentTime + 15) <= vmDuration) {
                    var size = parseInt(((vmCurrentTime + 15) * progress.offsetWidth) / vmDuration);
                    progressTimeline.style.width = size + "px";
                    currentDuration = Math.ceil(vmCurrentTime + 15);
                    vmPlayer.setCurrentTime(vmCurrentTime + 15);
                } else {
                    var size = parseInt((vmDuration * progress.offsetWidth) / vmDuration);
                    progressTimeline.style.width = size + "px";
                    currentDuration = Math.ceil(vmDuration);
                    vmPlayer.setCurrentTime(vmDuration);
                }
            }
        }

        function setMuteicon() {
            if (isMute) {
                def.fn.html(volumeControl, def.icons.muteBtn);
            } else {
                def.fn.html(volumeControl, def.icons.soundLower);
            }
        }

        function setDefaultVolume() {
            let soundWidth = localStorage.getItem('abs_active_sound') ?? 20;
            volumeSlider.setAttribute("current", soundWidth);
            if (Math.ceil(soundWidth) > 0 && Math.ceil(soundWidth) < 50) {
                volumeControl.innerHTML = def.icons.soundLower;
            } else if (
                Math.ceil(soundWidth) > 49 &&
                Math.ceil(soundWidth) <= 100
            ) {
                volumeControl.innerHTML = def.icons.soundHigher;
            }
            if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                if (premium.v360) {
                    video360.volume = soundWidth / 100;
                } else {
                    video.volume = soundWidth / 100;
                }
            } else if (youtubePlayer != undefined && (isYoutube == 'yTb' | isYoutube != undefined)) {
                youtubePlayer.setVolume((soundWidth));
            } else if (vmPlayer != undefined && playerName == 'vimeo') {
                vmPlayer.setVolume(soundWidth / 100);
            }

        }

        function toggleMute() {
            if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                isMute == false ? video.muted = true : video.muted = false;
            } else if (youtubePlayer != undefined && (isYoutube == 'yTb' | isYoutube != undefined)) {
                isMute == false ? youtubePlayer.mute() : youtubePlayer.unMute();
            } else if (vmPlayer != undefined && (playerName == 'vimeo' | isVimeo != undefined)) {
                isMute == false ? vmPlayer.setMuted(true) : vmPlayer.setMuted(false);
            }
            isMute = !isMute;
            setMuteicon();
        }

        function togglePlayPause() {
            if (isVast == false) {
                if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                    if (premium.v360) {
                        if (video360.paused) {
                            video360.play();
                            isPlaying = true;
                            def.fn.html(playPauseControl, def.icons.pauseBtn);
                            newEvents('play');
                        } else {
                            video360.pause();
                            isPlaying = false;
                            def.fn.html(playPauseControl, def.icons.playBtn);
                        }
                    } else {
                        if (video.paused) {
                            video.play();
                            isPlaying = true;
                            def.fn.html(playPauseControl, def.icons.pauseBtn);
                        } else {
                            video.pause();
                            isPlaying = false;
                            def.fn.html(playPauseControl, def.icons.playBtn);
                        }
                    }
                    youtubeRemover();
                }
                if (playerName == 'youtube') {
                    if (currentEvent.isPlaying != '1') {
                        youtubePlayer.playVideo();
                        isPlaying = true;
                        def.fn.html(playPauseControl, def.icons.pauseBtn);
                        youtubeRemover();
                    } else {
                        youtubePlayer.pauseVideo();
                        isPlaying = false;
                        controlResizer();
                        def.fn.html(playPauseControl, def.icons.playBtn);
                    }
                }
                if (playerName == 'vimeo') {
                    if (vmActive == false) {
                        vmPlayer.play();
                        isPlaying = true;
                        def.fn.html(playPauseControl, def.icons.pauseBtn);
                    } else {
                        vmPlayer.pause();
                        isPlaying = false;
                        def.fn.html(playPauseControl, def.icons.playBtn)
                    }
                    youtubeRemover();
                }
            }
            !isMute ? setDefaultVolume() : true;
        }

        function forcePause() {
            if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                video.pause();
                isPlaying = false;
                def.fn.html(playPauseControl, def.icons.playBtn);
            }
            if (youtubePlayer && (isYoutube == 'yTb' | isYoutube != undefined)) {
                youtubePlayer.pauseVideo() ?? 'pause event error';
                isPlaying = false;
                def.fn.html(playPauseControl, def.icons.playBtn);
            }
            if (vmPlayer != undefined && (playerName == 'vimeo' | isVimeo != undefined)) {
                vmPlayer.pause();
                isPlaying = false;
                def.fn.html(playPauseControl, def.icons.playBtn)
            }
            setDefaultVolume();
        }

        function forcePlay() {
            if (playerName == 'mp4' | playerName == 'hls' | playerName == 'dash' | playerName == 'flv' | playerName == 'mkv') {
                video.play();
                def.fn.html(playPauseControl, def.icons.pauseBtn);
            }
            if (youtubePlayer && (isYoutube && isYoutube == 'yTb')) {
                console.log(youtubePlayer)
                youtubePlayer.playVideo() ?? 'play event error';
                def.fn.html(playPauseControl, def.icons.pauseBtn);
            }
            if (vmPlayer != undefined && (playerName == 'vimeo' | isVimeo != undefined)) {
                vmPlayer.play();
                def.fn.html(playPauseControl, def.icons.pauseBtn)
            }
            isPlaying = true;
            setDefaultVolume();
        }

        function setcallBack(item, callback, aftercallback = null) {
            item.addEventListener("mouseenter", () => {
                item.style.background = "rgba(0,0,0,0.6)";
                item.style.color = "orange";
                item.style.borderRadius = '4px';
                item.style.paddingLeft = '4px';
                item.style.transition = '0.1s'
            });
            item.addEventListener("mouseleave", () => {
                item.style.background = "none";
                item.style.color = "#fff";
                item.style.borderRadius = '0px';
                item.style.paddingLeft = '0px';
                item.style.transition = '0.1s'
            });
            item.addEventListener("mouseover", () => {
                item.style.background = "rgba(0,0,0,0.6)";
                item.style.color = "orange";
                item.style.borderRadius = '4px';
                item.style.paddingLeft = '4px';
                item.style.transition = '0.1s'
            });
            item.addEventListener("click", () => {
                callback(item);
            });

            if (aftercallback != null) {
                aftercallback(item);
            }
        }


        function addPoster() {
            youtubeClick.style.background = `url('${premium.poster}') no-repeat center`;
            youtubeClick.style.backgroundSize = 'cover';
        }

        function removePoster() {
            youtubeClick.style.background = `transparent`;
        }

        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'f':
                    toggleFullscreen();
                    break;
                case 'm':
                    toggleMute();
                    break;
                case ' ':
                    togglePlayPause();
                    break;
                case 'p':
                    togglePlaylist();
                    break;
                case 'Enter':
                    toggleFullscreen();
                    break;
                case 'ArrowRight':
                    seekForward();
                    break;
                case 'ArrowLeft':
                    seekBackward();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    soundControls(15);
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    soundControls(-15);
                    break;
            }
        })

        function getFileInfo() {
            const nvideo = ['mp4', 'webm', 'ogg', 'm3u8', 'mpd'];
            if (nvideo.indexOf(fileExtention) >= 0) {
                return 'video';
            } else if (isYoutube == "yTb") {
                return 'youtube'
            }
        }

        function typeGenerator(ext) {
            if (ext == "mp4") {
                return "video/mp4";
            } else if (ext == "webm") {
                return "video/webm";
            } else if (ext == "ogg") {
                return "video/ogg";
            } else if (ext == 'mkv') {
                return "video/x-matroska";
            } else if (ext == "m3u8") {
                return "application/x-mpegURL";
            } else if (ext == "mpd") {
                return "application/vnd.apple.mpegurl";
            }
        }
        function extractFacebookID(url) {
            const regex =
                /(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:facebook)?\.com\/(?:\S+)(?:v=|videos\/|%2Fvideos%2F)(\d+)/;
            const newValue = url.match(regex);
            setTimeout(() => {
                if (regex.test(url)) {
                    return newValue[1];
                }
            }, 300);
        }

        function extChecker(indexFile) {
            let newUrl = undefined;
            if (encrypt == true) {
                newUrl = atob(indexFile);
            } else {
                newUrl = indexFile;
            }

            if (newUrl) {
                var exts = newUrl.substring(newUrl.lastIndexOf(".") + 1);
                var ext = exts.slice(0, 4).toLowerCase();
                if (ext == 'm3u8') {
                    return 'm3u8';
                } else if (ext == 'webm') {
                    return 'webm';
                } else {
                    switch (ext.slice(0, 3)) {
                        case 'mp4':
                            return 'mp4';
                        case 'ogg':
                            return 'ogg';
                        case 'avi':
                            return 'avi';
                        case 'mkv':
                            return 'mkv';
                        case 'mp3':
                            return 'mp3';
                        case 'wav':
                            return 'wav';
                        case 'm3u':
                            return 'm3u';
                        case 'mpd':
                            return 'mpd';
                        case 'xml':
                            return 'xml';
                        case 'flv':
                            return 'flv';
                        default:
                            return 'mp4';
                    }
                }
            }
        }

        function isEncrypt($url) {
            return atob($url)
        }

        function driveGenerator(fileURL) {
            let fileURI = fileURL[0];
            if (fileURI.indexOf("drive") > -1) {
                return "dLINK";
            } else {
                return "Your video format in not supported!";
            }
        }

        function youtubedl(fileURL) {
            let fileURI = fileURL[0];
            if (fileURI.indexOf("googlevideo.com") > -1) {
                return "yTDL";
            } else {
                return "Your video format in not supported!";
            }
        }

        function APIYoutube(fileURL) {
            let fileURI;
            if (encrypt == true) {
                fileURI = atob(fileURL);
            } else {
                fileURI = fileURL;
            }
            if (
                fileURI.indexOf("youtube.com") > -1 ||
                fileURI.indexOf("youtu.be") > -1
            ) {
                // return 'yTDL';
                const regex =
                    /(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/\S*?[^\w\s-])((?!videoseries)[\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/;
                const newValue = fileURI.match(regex);
                // youTubePlayerChangeVideoId(newValue[1]);
                return "yTb";
            } else {
                return "fail";
            }
        }

        function APIVimeo(fileURI) {
            var url;
            if (encrypt == true) {
                url = atob(fileURI);
            } else {
                url = fileURI;
            }
            if (url.indexOf("vimeo.com") > -1) {
                const last = url.split('/');
                const vimeoURLID = last[last.length - 1];
                return vimeoURLID;
            } else {
                return false;
            }
        }

        async function loadScript(src) {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.type = "text/javascript";
                script.onload = () => {
                    resolve();
                };
                script.onerror = () => {
                    console.log("Failed to load script", src);
                    reject();
                };
                script.src = src;
                document.head.appendChild(script);
            });
        }

        function controlResizer() {
            let documents = document.querySelector('body');
            if (documents.offsetWidth < 667 && playerName == 'youtube' && isPlaying) {
                topControls.style.height = '0px';
                bottomControls.style.height = '0px';
            } else {
                if (!isPlaying && playerName == 'youtube') {
                    topControls.style.height = '58px';
                    bottomControls.style.height = '58px';
                }
            }
        }

        function youtubeRemover() {
            topControls.style.height = '0px';
            bottomControls.style.height = '0px';
        }

        function shareControler() {
            let shares = [def.icons.facebookIcon, def.icons.whatsapIcon, def.icons.twitterIcon, def.icons.linkedinIcon, def.icons.redditIcon];
            shares.forEach((item, index) => {
                let shareOption = def.fn.create('button');
                def.fn.css(shareOption, {
                    background: 'none',
                    width: '80px',
                    height: '80px',
                    border: 'none',
                    cursor: 'pointer'
                })
                def.fn.html(shareOption, item);
                shareOption.addEventListener('click', () => {
                    shareRedirect(index);
                });

                def.fn.append(shareInner, shareOption);
            });
        }

        function shareRedirect(index) {
            let url = document.location.href;
            switch (index) {
                case 0:
                    shareOpen(`https://www.facebook.com/sharer.php?u=${url}`);
                    break;
                case 1:
                    shareOpen(`https://api.whatsapp.com/send?text=${url}`)
                    break;
                case 2:
                    shareOpen(`https://twitter.com/share?url=${url}&text=Favorite-videos&via=hd&hashtags=absVideo`);
                    break;
                case 3:
                    shareOpen(`https://www.linkedin.com/shareArticle?url=${url}&title=Favorite-videos`)
                    break;
                case 4:
                    shareOpen(`https://reddit.com/submit?url=${url}&title=Favorite-videos`);
                    break;
                default:
                    console.log('embedded')
            }
        }

        function shareOpen(url) {
            window.open(url, ' _blank');
        }


        function loadAnalytics() {
            console.log('loading analytics');
            if (premium.analytics) {
                (function loadVimeoScript() {
                    const tag = document.createElement('script');
                    tag.src = "https://www.googletagmanager.com/gtag/js?id=" + premium.analytics.tag;
                    const firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                    tag.onload = setupAnalytics;
                })();

                function setupAnalytics() {
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', premium.analytics.tag);
                }

                function newEvents(eventName) {
                    gtag('event', eventName, {
                        'app_name': premium.analytics.appName,
                        'screen_name': document.title ?? 'Home'
                    });

                }
            }
        } loadAnalytics();


        function getDevice() {
            var unknown = '-';
            var screenSize = '';
            var width = '';
            var height = '';
            if (screen.width) {
                width = (screen.width) ? screen.width : '';
                height = (screen.height) ? screen.height : '';
                screenSize += '' + width + " x " + height;
            }
            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;
            var browser = navigator.appName;
            var version = '' + parseFloat(nVer);
            var nameOffset, verOffset, ix;
            if ((verOffset = nAgt.indexOf('YaBrowser')) != -1) {
                browser = 'Yandex';
                version = nAgt.substring(verOffset + 10);
            }
            else if ((verOffset = nAgt.indexOf('SamsungBrowser')) != -1) {
                browser = 'Samsung';
                version = nAgt.substring(verOffset + 15);
            }
            else if ((verOffset = nAgt.indexOf('UCBrowser')) != -1) {
                browser = 'UC Browser';
                version = nAgt.substring(verOffset + 10);
            }
            else if ((verOffset = nAgt.indexOf('OPR')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 4);
            }
            else if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
            else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
                browser = 'Microsoft Legacy Edge';
                version = nAgt.substring(verOffset + 5);
            }
            else if ((verOffset = nAgt.indexOf('Edg')) != -1) {
                browser = 'Microsoft Edge';
                version = nAgt.substring(verOffset + 4);
            }
            else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(verOffset + 5);
            }
            else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                browser = 'Chrome';
                version = nAgt.substring(verOffset + 7);
            }
            else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                browser = 'Safari';
                version = nAgt.substring(verOffset + 7);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
            else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                browser = 'Firefox';
                version = nAgt.substring(verOffset + 8);
            }
            else if (nAgt.indexOf('Trident/') != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(nAgt.indexOf('rv:') + 3);
            }
            else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                browser = nAgt.substring(nameOffset, verOffset);
                version = nAgt.substring(verOffset + 1);
                if (browser.toLowerCase() == browser.toUpperCase()) {
                    browser = navigator.appName;
                }
            }
            if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

            var majorVersion = parseInt('' + version, 10);
            if (isNaN(majorVersion)) {
                version = '' + parseFloat(nVer);
                majorVersion = parseInt(nVer, 10);
            }
            var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);
            var cookieEnabled = (navigator.cookieEnabled) ? true : false;

            if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
                document.cookie = 'testcookie';
                cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
            }

            var os = unknown;
            var clientStrings = [
                { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
                { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
                { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
                { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
                { s: 'Windows Vista', r: /Windows NT 6.0/ },
                { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
                { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
                { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
                { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
                { s: 'Windows 98', r: /(Windows 98|Win98)/ },
                { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
                { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
                { s: 'Windows CE', r: /Windows CE/ },
                { s: 'Windows 3.11', r: /Win16/ },
                { s: 'Android', r: /Android/ },
                { s: 'Open BSD', r: /OpenBSD/ },
                { s: 'Sun OS', r: /SunOS/ },
                { s: 'Chrome OS', r: /CrOS/ },
                { s: 'Linux', r: /(Linux|X11(?!.*CrOS))/ },
                { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
                { s: 'Mac OS X', r: /Mac OS X/ },
                { s: 'Mac OS', r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
                { s: 'QNX', r: /QNX/ },
                { s: 'UNIX', r: /UNIX/ },
                { s: 'BeOS', r: /BeOS/ },
                { s: 'OS/2', r: /OS\/2/ },
                { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
            ];
            for (var id in clientStrings) {
                var cs = clientStrings[id];
                if (cs.r.test(nAgt)) {
                    os = cs.s;
                    break;
                }
            }

            var osVersion = unknown;

            if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
            }

            switch (os) {
                case 'Mac OS':
                case 'Mac OS X':
                case 'Android':
                    osVersion = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(nAgt)[1];
                    break;

                case 'iOS':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;
            }
            var flashVersion = 'no check';
            if (typeof swfobject != 'undefined') {
                var fv = swfobject.getFlashPlayerVersion();
                if (fv.major > 0) {
                    flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
                }
                else {
                    flashVersion = unknown;
                }
            }

            return {
                screen: screenSize,
                browser: browser,
                browserVersion: version,
                browserMajorVersion: majorVersion,
                mobile: mobile,
                os: os,
                osVersion: osVersion,
                cookies: cookieEnabled,
                flashVersion: flashVersion
            };
        }

        function isNotMobile(callback){
            if(device.os !== 'Android' && device.os !== 'Ios' && device.os !== 'Ipad'){
                callback();
            }
        }

        checkApi();

        window.addEventListener('load', () => {
            controlResizer();
        })

        window.addEventListener('resize', () => {
            controlResizer();
        })


        function rightOptions(item, container) {
            isPlayFalse = true;
            class ContextMenu {
                constructor({ target = null, menuItems = [], mode = null, box = null }) {
                    this.target = target;
                    this.menuItems = menuItems;
                    this.mode = mode;
                    this.box = box;
                    this.targetNode = this.getTargetNode();
                    this.menuItemsNode = this.getMenuItemsNode();
                    this.isOpened = false;
                }

                getTargetNode() {
                    const nodes = this.box.querySelectorAll(this.target);
                    if (nodes && nodes.length !== 0) {
                        return nodes;
                    } else {
                        console.error(`getTargetNode :: "${this.target}" target not found`);
                        return [];
                    }
                }

                getMenuItemsNode() {
                    const nodes = [];

                    if (!this.menuItems) {
                        console.error("getMenuItemsNode :: Please enter menu items");
                        return [];
                    }

                    this.menuItems.forEach((data, index) => {
                        const item = this.createItemMarkup(data);
                        item.firstChild.setAttribute(
                            "style",
                            `animation-delay: ${index * 0.08}s`
                        );
                        nodes.push(item);
                    });

                    return nodes;
                }

                createItemMarkup(data) {
                    const button = document.createElement("BUTTON");
                    const item = document.createElement("LI");

                    button.innerHTML = data.content;
                    button.classList.add("contextMenu-button");
                    item.classList.add("contextMenu-item");

                    if (data.absdivider) item.setAttribute("data-absdivider", data.absdivider);
                    item.appendChild(button);

                    if (data.events && data.events.length !== 0) {
                        Object.entries(data.events).forEach((event) => {
                            const [key, value] = event;
                            button.addEventListener(key, value);
                        });
                    }

                    return item;
                }

                renderMenu() {
                    const menuContainer = document.createElement("UL");

                    menuContainer.classList.add("contextMenu");
                    menuContainer.setAttribute("data-theme", this.mode);

                    this.menuItemsNode.forEach((item) => menuContainer.appendChild(item));

                    return menuContainer;
                }

                closeMenu(menu) {
                    if (this.isOpened) {
                        this.isOpened = false;
                        isPlayFalse = false;
                        menu.remove();
                    }
                }

                init() {
                    const contextMenu = this.renderMenu();
                    document.addEventListener("click", () => this.closeMenu(contextMenu));
                    window.addEventListener("blur", () => this.closeMenu(contextMenu));
                    document.addEventListener("contextmenu", (e) => {
                        this.targetNode.forEach((target) => {
                            if (!e.target.contains(target)) {
                                contextMenu.remove();
                            }
                        });
                    });

                    this.targetNode.forEach((target) => {
                        target.addEventListener("contextmenu", (e) => {
                            e.preventDefault();
                            this.isOpened = true;

                            const { clientX, clientY } = e;
                            this.box.appendChild(contextMenu);
                            const positionY =
                                clientY + contextMenu.scrollHeight >= window.innerHeight
                                    ? window.innerHeight - contextMenu.scrollHeight - 20
                                    : clientY;
                            const positionX =
                                clientX + contextMenu.scrollWidth >= window.innerWidth
                                    ? window.innerWidth - contextMenu.scrollWidth - 20
                                    : clientX;

                            contextMenu.setAttribute(
                                "style",
                                `--width: ${contextMenu.scrollWidth}px;
                              --height: ${contextMenu.scrollHeight}px;
                              --top: ${positionY}px;
                              --left: ${positionX}px;
                              --z-index: 999999999`

                            );
                        });
                    });
                }
            }

            const hostURL = "https://abdursoft.com/";
            const menuItems = [
                {
                    content: `Copy URL`,
                    events: {
                        click: (e) => {
                            navigator.clipboard.writeText(window.location.href);
                        }
                    },
                },
                {
                    content: `ABS Player`,
                    events: {
                        click: (e) => {
                            window.open(hostURL + "plugins/abs-video", "_blank");
                        },
                    },
                },
                {
                    content: `More Plugins`,
                    events: {
                        click: (e) => {
                            window.open(hostURL + "plugins/all", '_blank');
                        }
                    },
                },
                {
                    content: `V 1.0.9`,
                    absdivider: "top", // top, bottom, top-bottom
                },
            ];

            const dark = new ContextMenu({
                target: item,
                menuItems,
                mode: 'dark',
                box: container
            });
            dark.init();
            function removeMessage() {
                const message = container.querySelector(".right-click");
                if (message) message.remove();
            }
            window.addEventListener("click", removeMessage);
            window.addEventListener("contextmenu", removeMessage);
        }

        return {
            new: (url) => {
                __init(url);
            }
        }
    } else {
        console.warn('Only object data allowed');
    }
};