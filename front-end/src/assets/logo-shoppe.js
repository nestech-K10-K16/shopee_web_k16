import * as React from 'react';

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1249}
    height={42}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M748.752 27.192c-.821 0-1.536-.15-2.144-.448-.608-.299-1.077-.715-1.408-1.248-.331-.533-.496-1.152-.496-1.856h1.408c0 .437.101.843.304 1.216.203.363.496.656.88.88.395.213.88.32 1.456.32.757 0 1.344-.181 1.76-.544a1.73 1.73 0 0 0 .624-1.36c0-.448-.096-.805-.288-1.072a2.104 2.104 0 0 0-.784-.672c-.32-.17-.693-.32-1.12-.448a37.504 37.504 0 0 1-1.312-.432c-.864-.299-1.504-.667-1.92-1.104-.416-.448-.624-1.03-.624-1.744-.011-.597.128-1.125.416-1.584a2.87 2.87 0 0 1 1.216-1.088c.533-.267 1.163-.4 1.888-.4.715 0 1.333.133 1.856.4a2.96 2.96 0 0 1 1.232 1.104 3.02 3.02 0 0 1 .464 1.6h-1.408c0-.31-.08-.613-.24-.912-.16-.31-.405-.56-.736-.752-.32-.192-.725-.288-1.216-.288-.608-.01-1.109.144-1.504.464-.384.32-.576.763-.576 1.328 0 .48.133.848.4 1.104.277.256.661.47 1.152.64.491.16 1.056.347 1.696.56a8.197 8.197 0 0 1 1.44.672c.427.256.757.587.992.992.245.405.368.923.368 1.552 0 .533-.139 1.04-.416 1.52-.277.47-.699.853-1.264 1.152-.555.299-1.253.448-2.096.448Zm5.602-.192V15.48h1.344v4.944c.267-.49.645-.87 1.136-1.136a3.198 3.198 0 0 1 1.6-.416c.917 0 1.653.288 2.208.864.555.565.832 1.44.832 2.624V27h-1.328v-4.496c0-1.653-.667-2.48-2-2.48-.693 0-1.275.25-1.744.752-.469.49-.704 1.195-.704 2.112V27h-1.344Zm12.772.192c-.746 0-1.418-.17-2.016-.512a3.771 3.771 0 0 1-1.424-1.44c-.341-.63-.512-1.365-.512-2.208 0-.843.176-1.573.528-2.192a3.742 3.742 0 0 1 1.424-1.456 4.08 4.08 0 0 1 2.032-.512c.747 0 1.419.17 2.016.512a3.624 3.624 0 0 1 1.408 1.456c.352.619.528 1.35.528 2.192 0 .843-.176 1.579-.528 2.208a3.736 3.736 0 0 1-1.44 1.44c-.597.341-1.269.512-2.016.512Zm0-1.152c.459 0 .886-.112 1.28-.336.395-.224.715-.56.96-1.008.246-.448.368-1.003.368-1.664s-.122-1.216-.368-1.664c-.234-.448-.549-.784-.944-1.008a2.518 2.518 0 0 0-1.264-.336c-.458 0-.885.112-1.28.336-.394.224-.714.56-.96 1.008-.245.448-.368 1.003-.368 1.664s.123 1.216.368 1.664c.246.448.56.784.944 1.008.395.224.816.336 1.264.336Zm5.853 4.48V19.064h1.216l.128 1.312c.256-.384.619-.73 1.088-1.04.48-.31 1.088-.464 1.824-.464.789 0 1.477.181 2.064.544.587.363 1.04.859 1.36 1.488.331.63.496 1.344.496 2.144s-.165 1.515-.496 2.144a3.659 3.659 0 0 1-1.376 1.472c-.587.352-1.275.528-2.064.528-.651 0-1.232-.133-1.744-.4a2.782 2.782 0 0 1-1.152-1.12v4.848h-1.344Zm4.096-4.496c.533 0 1.003-.123 1.408-.368a2.71 2.71 0 0 0 .96-1.056c.235-.448.352-.97.352-1.568 0-.597-.117-1.12-.352-1.568a2.593 2.593 0 0 0-.96-1.04c-.405-.256-.875-.384-1.408-.384-.533 0-1.003.128-1.408.384a2.593 2.593 0 0 0-.96 1.04c-.235.448-.352.97-.352 1.568 0 .597.117 1.12.352 1.568.235.448.555.8.96 1.056.405.245.875.368 1.408.368ZM948.272 27.192c-1.099 0-2.064-.24-2.896-.72a5.192 5.192 0 0 1-1.936-2.048c-.459-.875-.688-1.883-.688-3.024s.229-2.144.688-3.008a5.192 5.192 0 0 1 1.936-2.048c.832-.49 1.797-.736 2.896-.736 1.109 0 2.075.245 2.896.736a5.05 5.05 0 0 1 1.936 2.048c.459.864.688 1.867.688 3.008s-.229 2.15-.688 3.024a5.05 5.05 0 0 1-1.936 2.048c-.821.48-1.787.72-2.896.72Zm0-1.184c.821 0 1.541-.181 2.16-.544a3.74 3.74 0 0 0 1.456-1.584c.352-.693.528-1.52.528-2.48s-.176-1.781-.528-2.464a3.64 3.64 0 0 0-1.456-1.568c-.619-.373-1.339-.56-2.16-.56-.821 0-1.547.187-2.176.56-.619.363-1.104.885-1.456 1.568-.341.683-.512 1.504-.512 2.464s.171 1.787.512 2.48c.352.683.837 1.21 1.456 1.584.629.363 1.355.544 2.176.544Zm10.275 1.184c-.939 0-1.685-.283-2.24-.848-.555-.576-.832-1.456-.832-2.64v-4.64h1.344v4.496c0 1.653.677 2.48 2.032 2.48.693 0 1.264-.245 1.712-.736.459-.501.688-1.21.688-2.128v-4.112h1.344V27h-1.216l-.096-1.424a2.746 2.746 0 0 1-1.104 1.184 3.11 3.11 0 0 1-1.632.432Zm6.26-.192v-7.936h1.216l.112 1.52a2.877 2.877 0 0 1 1.12-1.248c.501-.31 1.12-.464 1.856-.464v1.408h-.368c-.469 0-.901.085-1.296.256-.395.16-.709.437-.944.832-.235.395-.352.939-.352 1.632v4h-1.344Zm13.695.192c-.821 0-1.536-.15-2.144-.448-.608-.299-1.077-.715-1.408-1.248-.331-.533-.496-1.152-.496-1.856h1.408c0 .437.101.843.304 1.216.203.363.496.656.88.88.395.213.88.32 1.456.32.757 0 1.344-.181 1.76-.544a1.73 1.73 0 0 0 .624-1.36c0-.448-.096-.805-.288-1.072a2.104 2.104 0 0 0-.784-.672c-.32-.17-.693-.32-1.12-.448a37.504 37.504 0 0 1-1.312-.432c-.864-.299-1.504-.667-1.92-1.104-.416-.448-.624-1.03-.624-1.744-.011-.597.128-1.125.416-1.584a2.87 2.87 0 0 1 1.216-1.088c.533-.267 1.163-.4 1.888-.4.715 0 1.333.133 1.856.4a2.96 2.96 0 0 1 1.232 1.104 3.02 3.02 0 0 1 .464 1.6h-1.408c0-.31-.08-.613-.24-.912-.16-.31-.405-.56-.736-.752-.32-.192-.725-.288-1.216-.288-.608-.01-1.109.144-1.504.464-.384.32-.576.763-.576 1.328 0 .48.133.848.4 1.104.277.256.661.47 1.152.64.491.16 1.056.347 1.696.56a8.197 8.197 0 0 1 1.44.672c.427.256.757.587.992.992.245.405.368.923.368 1.552 0 .533-.139 1.04-.416 1.52-.277.47-.699.853-1.264 1.152-.555.299-1.253.448-2.096.448ZM987.24 27c-.725 0-1.296-.176-1.712-.528-.416-.352-.624-.987-.624-1.904V20.2h-1.376v-1.136h1.376l.176-1.904h1.168v1.904h2.336V20.2h-2.336v4.368c0 .501.101.843.304 1.024.203.17.56.256 1.072.256h.832V27h-1.216Zm6.449.192c-.747 0-1.419-.17-2.016-.512a3.764 3.764 0 0 1-1.424-1.44c-.342-.63-.512-1.365-.512-2.208 0-.843.176-1.573.528-2.192a3.735 3.735 0 0 1 1.424-1.456 4.078 4.078 0 0 1 2.032-.512c.746 0 1.418.17 2.016.512a3.637 3.637 0 0 1 1.408 1.456c.352.619.528 1.35.528 2.192 0 .843-.176 1.579-.528 2.208a3.736 3.736 0 0 1-1.44 1.44c-.598.341-1.27.512-2.016.512Zm0-1.152c.458 0 .885-.112 1.28-.336.394-.224.714-.56.96-1.008.245-.448.368-1.003.368-1.664s-.123-1.216-.368-1.664c-.235-.448-.55-.784-.944-1.008a2.521 2.521 0 0 0-1.264-.336c-.459 0-.886.112-1.28.336-.395.224-.715.56-.96 1.008-.246.448-.368 1.003-.368 1.664s.122 1.216.368 1.664c.245.448.56.784.944 1.008.394.224.816.336 1.264.336Zm5.853.96v-7.936h1.218l.11 1.52c.24-.523.62-.939 1.12-1.248.5-.31 1.12-.464 1.86-.464v1.408h-.37c-.47 0-.9.085-1.3.256-.39.16-.71.437-.94.832-.24.395-.35.939-.35 1.632v4h-1.348Zm6.678 3.52 1.97-4.288h-.47l-3.15-7.168h1.46l2.62 6.176 2.78-6.176h1.4l-5.2 11.456h-1.41ZM847.184 27V15.8h3.936c.789 0 1.44.128 1.952.384.523.245.912.587 1.168 1.024.256.427.384.907.384 1.44 0 .725-.197 1.296-.592 1.712a3.02 3.02 0 0 1-1.392.864c.416.075.795.24 1.136.496.341.256.608.576.8.96.203.384.304.805.304 1.264 0 .565-.139 1.083-.416 1.552-.277.459-.688.827-1.232 1.104-.544.267-1.205.4-1.984.4h-4.064Zm1.344-6.304h2.496c.715 0 1.264-.165 1.648-.496.384-.341.576-.81.576-1.408 0-.565-.192-1.019-.576-1.36-.373-.341-.939-.512-1.696-.512h-2.448v3.776Zm0 5.184h2.576c.768 0 1.36-.176 1.776-.528.416-.363.624-.864.624-1.504 0-.63-.219-1.13-.656-1.504-.437-.384-1.029-.576-1.776-.576h-2.544v4.112Zm8.201 1.12V15.48h1.344V27h-1.344Zm7.163.192c-.747 0-1.419-.17-2.016-.512a3.771 3.771 0 0 1-1.424-1.44c-.341-.63-.512-1.365-.512-2.208 0-.843.176-1.573.528-2.192a3.742 3.742 0 0 1 1.424-1.456 4.078 4.078 0 0 1 2.032-.512c.747 0 1.419.17 2.016.512a3.63 3.63 0 0 1 1.408 1.456c.352.619.528 1.35.528 2.192 0 .843-.176 1.579-.528 2.208a3.736 3.736 0 0 1-1.44 1.44c-.597.341-1.269.512-2.016.512Zm0-1.152a2.55 2.55 0 0 0 1.28-.336c.395-.224.715-.56.96-1.008.245-.448.368-1.003.368-1.664s-.123-1.216-.368-1.664c-.235-.448-.549-.784-.944-1.008a2.521 2.521 0 0 0-1.264-.336 2.55 2.55 0 0 0-1.28.336c-.395.224-.715.56-.96 1.008-.245.448-.368 1.003-.368 1.664s.123 1.216.368 1.664c.245.448.56.784.944 1.008.395.224.816.336 1.264.336Zm8.645-1.536c-.448 0-.859-.059-1.232-.176l-.8.752c.117.085.261.16.432.224.181.053.437.107.768.16.331.043.795.09 1.392.144 1.067.075 1.829.32 2.288.736.459.416.688.96.688 1.632 0 .459-.128.896-.384 1.312-.245.416-.629.757-1.152 1.024-.512.267-1.173.4-1.984.4-.715 0-1.349-.096-1.904-.288-.555-.181-.987-.464-1.296-.848-.309-.373-.464-.848-.464-1.424 0-.299.08-.624.24-.976.16-.341.459-.667.896-.976a4.027 4.027 0 0 1-.608-.304 3.885 3.885 0 0 1-.448-.384v-.368l1.36-1.344c-.629-.533-.944-1.237-.944-2.112 0-.523.123-.997.368-1.424a2.58 2.58 0 0 1 1.072-1.008c.469-.256 1.04-.384 1.712-.384.459 0 .875.064 1.248.192h2.928v1.008l-1.488.064c.309.448.464.965.464 1.552 0 .523-.128.997-.384 1.424a2.685 2.685 0 0 1-1.072 1.024c-.459.245-1.024.368-1.696.368Zm0-1.104c.565 0 1.013-.144 1.344-.432.341-.299.512-.725.512-1.28 0-.544-.171-.96-.512-1.248-.331-.299-.779-.448-1.344-.448-.576 0-1.035.15-1.376.448-.331.288-.496.704-.496 1.248 0 .555.165.981.496 1.28.341.288.8.432 1.376.432Zm-2.336 4.624c0 .533.224.928.672 1.184.448.267 1.008.4 1.68.4.661 0 1.189-.144 1.584-.432.405-.288.608-.672.608-1.152 0-.341-.139-.64-.416-.896-.277-.245-.789-.39-1.536-.432a20.413 20.413 0 0 1-1.52-.16c-.437.235-.725.485-.864.752-.139.277-.208.523-.208.736Z"
    />
    <path stroke="#707070" d="M1062.5 12v17" />
    <path
      fill="#000"
      fillRule="evenodd"
      d="m1124.64 25.147 4.22 4.228c.19.21.18.53-.02.729l-.74.74c-.09.1-.23.156-.37.156a.503.503 0 0 1-.37-.156l-4.23-4.228a2.918 2.918 0 0 1-.31-.38l-.79-1.057a7.396 7.396 0 0 1-4.62 1.617 7.384 7.384 0 0 1-7.22-5.744 7.404 7.404 0 0 1 4-8.324 7.379 7.379 0 0 1 8.99 2.081 7.41 7.41 0 0 1-.05 9.24l1.06.729c.16.105.32.23.45.37Zm-12.5-5.749c0 2.918 2.36 5.284 5.27 5.284 1.4 0 2.75-.557 3.74-1.548a5.323 5.323 0 0 0 1.54-3.736 5.28 5.28 0 0 0-5.28-5.284c-2.91 0-5.27 2.366-5.27 5.284Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="m1128.86 29.375.28-.251v-.007l-.01-.007-.27.265Zm-4.22-4.228-.27.262.01.003.26-.265Zm4.2 4.957-.26-.267v.002l.26.265Zm-.74.74-.26-.265.26.265Zm-.74 0 .26-.264v-.001l-.26.265Zm-4.23-4.228-.26.265.26-.265Zm-.31-.38.31-.213-.01-.006v-.006l-.3.225Zm-.79-1.057.3-.225-.24-.31-.3.242.24.293Zm-4.62 1.617v-.375.375Zm-7.22-5.744-.37.083.37-.084Zm4-8.324-.16-.338.16.338Zm8.99 2.081-.29.232.29-.232Zm-.05 9.24-.29-.236-.25.314.33.23.21-.309Zm1.06.729-.21.308.01.007.2-.316Zm-3.04-1.644.26.265-.26-.265Zm7.98 5.976-4.22-4.228-.53.53 4.22 4.228.53-.53Zm-.02 1.26c.34-.339.36-.887.03-1.246l-.55.501c.05.061.05.155-.01.212l.53.533Zm-.74.739.74-.74-.53-.53-.74.74.53.53Zm-.64.266c.24 0 .47-.096.64-.267l-.53-.528a.16.16 0 0 1-.11.045v.75Zm-.64-.267c.17.17.4.267.64.267v-.75a.16.16 0 0 1-.11-.045l-.53.528Zm-4.22-4.227 4.22 4.228.53-.53-4.22-4.228-.53.53Zm-.36-.432c.11.154.23.3.36.432l.53-.53a2.33 2.33 0 0 1-.27-.328l-.62.426Zm-.78-1.045.79 1.057.6-.45-.79-1.057-.6.45Zm-4.32 1.767c1.76 0 3.47-.599 4.85-1.699l-.47-.586a7.007 7.007 0 0 1-4.38 1.535v.75Zm-7.59-6.036a7.77 7.77 0 0 0 7.6 6.036l-.01-.75a7.02 7.02 0 0 1-6.86-5.453l-.73.167Zm4.21-8.745a7.78 7.78 0 0 0-4.21 8.745l.73-.167c-.73-3.2.85-6.482 3.81-7.902l-.33-.676Zm9.45 2.187a7.762 7.762 0 0 0-9.45-2.187l.33.676c2.95-1.42 6.49-.6 8.53 1.975l.59-.464Zm-.05 9.707a7.783 7.783 0 0 0 .05-9.707l-.59.464a7.037 7.037 0 0 1-.05 8.772l.59.47Zm.97.185-1.05-.73-.43.618 1.06.729.42-.617Zm.51.416c-.16-.16-.33-.302-.52-.423l-.4.631c.14.09.27.197.38.316l.54-.523Zm-7.5-.578c-2.7 0-4.9-2.197-4.9-4.909h-.75c0 3.125 2.53 5.66 5.65 5.66v-.75Zm3.47-1.438a4.909 4.909 0 0 1-3.47 1.438v.75c1.5 0 2.94-.596 4-1.658l-.53-.53Zm1.44-3.471c0 1.302-.52 2.55-1.44 3.471l.53.53a5.667 5.667 0 0 0 1.66-4.001h-.75Zm-4.91-4.91a4.91 4.91 0 0 1 4.91 4.91h.75c0-3.125-2.53-5.66-5.66-5.66v.75Zm-4.9 4.91c0-2.712 2.2-4.91 4.9-4.91v-.75a5.655 5.655 0 0 0-5.65 5.66h.75Z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M1243 16a5 5 0 0 1-10 0 5 5 0 0 1 10 0Zm-2 0c0-1.657-1.34-3-3-3s-3 1.343-3 3 1.34 3 3 3 3-1.343 3-3Zm6.89 13.55-1.89-3.79a5.005 5.005 0 0 0-4.47-2.76h-7.06a5.005 5.005 0 0 0-4.47 2.76l-1.89 3.79c-.16.31-.14.678.04.973.18.296.5.476.85.477h18a.995.995 0 0 0 .85-.477c.18-.295.2-.663.04-.973Zm-16.1-2.89-1.17 2.34h14.76l-1.17-2.34a2.998 2.998 0 0 0-2.68-1.66h-7.06a2.998 2.998 0 0 0-2.68 1.66Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="m1246 25.76.45-.223v-.001l-.45.224Zm1.89 3.79-.44.223v.002l.44-.225Zm-6.36-6.55v-.5.5Zm-7.06 0v-.5.5Zm-4.47 2.76-.45-.224.45.224Zm-1.89 3.79.44.225v-.002l-.44-.223Zm.04.973-.43.262.43-.262Zm.85.477v.5-.5Zm18 0v.5-.5Zm-16.38-2-.45-.224-.36.724h.81V29Zm1.17-2.34.45.224-.45-.224Zm13.59 2.34v.5h.81l-.36-.724-.45.224Zm-1.17-2.34-.45.223.45-.223Zm-2.68-1.66v-.5.5Zm-7.06 0v-.5.5Zm3.53-3.5c3.04 0 5.5-2.462 5.5-5.5h-1c0 2.485-2.01 4.5-4.5 4.5v1Zm-5.5-5.5c0 3.038 2.46 5.5 5.5 5.5v-1c-2.49 0-4.5-2.015-4.5-4.5h-1Zm5.5-5.5c-3.04 0-5.5 2.462-5.5 5.5h1c0-2.485 2.01-4.5 4.5-4.5v-1Zm5.5 5.5c0-3.038-2.46-5.5-5.5-5.5v1c2.49 0 4.5 2.015 4.5 4.5h1Zm-5.5-2.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.933-1.57-3.5-3.5-3.5v1Zm-2.5 2.5a2.5 2.5 0 0 1 2.5-2.5v-1c-1.93 0-3.5 1.567-3.5 3.5h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.933 1.57 3.5 3.5 3.5v-1Zm2.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.93 0 3.5-1.567 3.5-3.5h-1Zm5.05 9.983 1.9 3.79.89-.446-1.89-3.79-.9.446Zm-4.02-2.483c1.7 0 3.26.962 4.03 2.484l.89-.448a5.503 5.503 0 0 0-4.92-3.036v1Zm-7.06 0h7.06v-1h-7.06v1Zm-4.03 2.484a4.522 4.522 0 0 1 4.03-2.484v-1a5.503 5.503 0 0 0-4.92 3.036l.89.448Zm-1.89 3.79 1.9-3.79-.9-.447-1.89 3.79.89.446Zm.02.488a.523.523 0 0 1-.02-.487l-.89-.45c-.23.464-.21 1.017.06 1.46l.85-.523Zm.43.238c-.17 0-.34-.09-.43-.238l-.85.523c.27.443.76.713 1.28.715v-1Zm18 0h-18v1h18v-1Zm.43-.238a.512.512 0 0 1-.43.238v1a1.508 1.508 0 0 0 1.28-.715l-.85-.523Zm.02-.487c.07.155.07.339-.02.487l.85.523c.27-.443.29-.996.06-1.46l-.89.45Zm-16.38-.551 1.17-2.34-.9-.448-1.17 2.34.9.448Zm14.31-.724h-14.76v1h14.76v-1Zm-1.62-1.616 1.18 2.34.89-.448-1.17-2.34-.9.448Zm-2.23-1.384c.95.001 1.81.537 2.23 1.383l.9-.446a3.497 3.497 0 0 0-3.13-1.937v1Zm-7.06 0h7.06v-1h-7.06v1Zm-2.23 1.383a2.488 2.488 0 0 1 2.23-1.383v-1a3.497 3.497 0 0 0-3.13 1.937l.9.446Z"
    />
    <path
      fill="#000"
      d="M1174.77 25.577h11.15c.28 0 .52-.183.6-.447l2.46-8.613a.646.646 0 0 0-.1-.54.627.627 0 0 0-.5-.244h-15.03l-.44-1.98a.62.62 0 0 0-.6-.481h-3.69a.62.62 0 0 0-.62.615c0 .34.28.615.62.615h3.19c.08.35 2.11 9.471 2.22 9.996-.65.284-1.11.936-1.11 1.694a1.85 1.85 0 0 0 1.85 1.845h11.15a.62.62 0 0 0 .62-.615.62.62 0 0 0-.62-.615h-11.15a.62.62 0 0 1-.62-.615.62.62 0 0 1 .62-.615Zm12.8-8.614-2.11 7.383h-10.2l-1.64-7.383h13.95Z"
    />
    <path
      fill="#000"
      d="M1174.15 29.883a1.85 1.85 0 0 0 1.85 1.846c1.02 0 1.84-.828 1.84-1.846 0-1.018-.82-1.846-1.84-1.846a1.85 1.85 0 0 0-1.85 1.846Zm1.85-.615c.34 0 .61.276.61.615 0 .339-.27.615-.61.615a.62.62 0 0 1-.62-.615c0-.34.28-.615.62-.615ZM1182.85 29.883c0 1.018.83 1.846 1.84 1.846a1.85 1.85 0 0 0 1.85-1.846 1.85 1.85 0 0 0-1.85-1.846c-1.01 0-1.84.828-1.84 1.846Zm1.84-.615c.34 0 .62.276.62.615a.62.62 0 0 1-.62.615.611.611 0 0 1-.61-.615c0-.34.27-.615.61-.615Z"
    />
    <path
      fill="#A18A68"
      d="M14.731 14.706a2.065 2.065 0 0 1-.41-.24c-.16-.113-.387-.216-.683-.307a5.45 5.45 0 0 0-1.128-.273c-.456-.069-1.037-.08-1.743-.034v-3.453a17.52 17.52 0 0 1 3.042.342c1.048.183 1.89.479 2.529.889-.137.296-.296.627-.479.991-.182.342-.353.672-.512.991-.16.296-.296.547-.41.752a2.897 2.897 0 0 1-.206.342ZM2.94 17.44c0-1.002.171-1.902.513-2.7a6.893 6.893 0 0 1 1.367-2.085A6.418 6.418 0 0 1 6.87 11.22a8.696 8.696 0 0 1 2.495-.718v3.589c-.729.25-1.333.695-1.811 1.333-.479.615-.718 1.242-.718 1.88 0 .888.24 1.606.718 2.153.478.547 1.082 1.025 1.811 1.436v3.896a53.072 53.072 0 0 1-2.256-1.162 11.317 11.317 0 0 1-2.05-1.504 7.714 7.714 0 0 1-1.538-1.982c-.388-.752-.582-1.652-.582-2.7Zm.547 13.946a8.65 8.65 0 0 0 1.197.547c.5.16 1.014.319 1.538.478.524.137 1.048.25 1.572.342a8.6 8.6 0 0 0 1.47.137h.102v3.247h-.068c-.547 0-1.117-.035-1.71-.103-.569-.045-1.15-.136-1.742-.273a10.68 10.68 0 0 1-1.71-.547 5.897 5.897 0 0 1-1.366-.889l.717-2.94Zm7.28-9.81c.753.342 1.516.707 2.29 1.094a9.341 9.341 0 0 1 2.154 1.435 6.587 6.587 0 0 1 1.572 2.017c.41.798.616 1.789.616 2.974 0 .82-.16 1.617-.48 2.392a6.816 6.816 0 0 1-1.298 2.12c-.547.615-1.23 1.139-2.05 1.572-.821.433-1.755.718-2.803.854v-3.281c1.868-.456 2.802-1.698 2.802-3.726 0-.797-.262-1.458-.786-1.982s-1.196-1.014-2.016-1.47v-3.999Z"
    />
    <path
      fill="#000"
      d="M40.913 10.81V36h-4.101V24.652H27.31V21.85h9.502V10.81h4.101Zm-19.175 0h4.17V36h-4.17V10.81Zm25.02 12.475c0-2.028.24-3.817.718-5.366.5-1.572 1.184-2.894 2.05-3.965.889-1.094 1.926-1.925 3.11-2.495a10.343 10.343 0 0 1 3.931-1.025v3.418a5.76 5.76 0 0 0-2.187.717c-.684.388-1.276.957-1.778 1.71-.5.751-.9 1.708-1.196 2.87-.296 1.162-.456 2.541-.478 4.136.023 1.618.182 3.008.478 4.17.297 1.14.695 2.096 1.197 2.871.524.775 1.127 1.367 1.811 1.777a5.298 5.298 0 0 0 2.153.684v3.384a10.687 10.687 0 0 1-3.896-.991 9.479 9.479 0 0 1-3.145-2.495c-.866-1.094-1.55-2.427-2.05-4-.479-1.572-.718-3.372-.718-5.4Zm11.177-12.851a9.593 9.593 0 0 1 3.862.99 8.975 8.975 0 0 1 3.11 2.53c.889 1.071 1.584 2.393 2.085 3.965.501 1.55.752 3.338.752 5.366 0 2.028-.25 3.828-.752 5.4-.501 1.573-1.196 2.906-2.085 4a9.24 9.24 0 0 1-3.076 2.495c-1.185.57-2.484.9-3.896.99v-3.383a5.759 5.759 0 0 0 2.187-.718c.684-.41 1.276-.99 1.777-1.743.502-.775.9-1.732 1.197-2.87.296-1.163.455-2.553.478-4.17-.023-1.619-.182-2.997-.478-4.137-.296-1.162-.707-2.119-1.23-2.87-.502-.775-1.094-1.357-1.778-1.744a5.028 5.028 0 0 0-2.153-.718v-3.383Zm15.551.376h4.102V36h-4.102V10.81Zm7.246 0c1.071 0 2.131.17 3.18.512a8.4 8.4 0 0 1 2.802 1.538 7.673 7.673 0 0 1 2.017 2.495c.524.957.786 2.04.786 3.247 0 1.277-.217 2.439-.65 3.487a7.31 7.31 0 0 1-1.811 2.598c-.775.706-1.71 1.253-2.803 1.64-1.094.387-2.302.581-3.623.581h-1.64V23.9h2.358c.501 0 .99-.08 1.47-.239a3.94 3.94 0 0 0 1.367-.854c.41-.388.74-.923.99-1.607.251-.706.377-1.572.377-2.598 0-.41-.057-.877-.171-1.4a3.798 3.798 0 0 0-.718-1.539c-.342-.501-.832-.911-1.47-1.23-.638-.342-1.48-.513-2.529-.513H78.99v-3.11h1.743Zm13.433 0h4.102V36h-4.102V10.81Zm7.246 0c1.071 0 2.131.17 3.179.512a8.41 8.41 0 0 1 2.803 1.538 7.67 7.67 0 0 1 2.016 2.495c.524.957.786 2.04.786 3.247 0 1.277-.216 2.439-.649 3.487a7.307 7.307 0 0 1-1.812 2.598c-.774.706-1.709 1.253-2.802 1.64-1.094.387-2.302.581-3.623.581h-1.641V23.9h2.358c.502 0 .992-.08 1.47-.239a3.94 3.94 0 0 0 1.367-.854c.41-.388.741-.923.991-1.607.251-.706.376-1.572.376-2.598 0-.41-.056-.877-.17-1.4a3.806 3.806 0 0 0-.718-1.539c-.342-.501-.832-.911-1.47-1.23-.638-.342-1.481-.513-2.529-.513h-1.675v-3.11h1.743Zm13.569 0h4.17V36h-4.17V10.81Zm14.698 13.842h-9.126V21.85h9.126v2.802Zm-9.126 8.238h10.185V36h-10.185v-3.11Zm10.185-22.08v3.11h-10.185v-3.11h10.185Z"
    />
  </svg>
);
export default SvgComponent;