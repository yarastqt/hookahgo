import { Variants, motion } from 'framer-motion'
import { FC } from 'react'

import styles from './topology.module.css'

const pathVariants: Variants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1.1,
    transition: {
      ease: 'easeIn',
      delay: 1,
      duration: 2,
    },
  },
}

export const Topology: FC = () => {
  return (
    <motion.svg className={styles.root} viewBox="0 0 1284 1284">
      <motion.path
        d="M1267.02 328.27C1356.67 -4.34533 1024.59 -38.2016 784.936 62.2311C645.111 113.882 553.285 -46.7491 380.067 17.3569C206.851 81.4629 414.502 283.398 149.46 387.035C-115.583 490.674 13.8086 954.374 245.46 959.716C477.111 965.058 413.459 1043.05 645.111 1221.48C876.762 1399.91 1267.02 1152.03 1169.98 890.267C1072.94 628.501 1169.98 688.333 1267.02 328.27Z"
        stroke="var(--color-text-primary)"
        stroke-width="3"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M768.453 587.129C778.797 555.448 730.349 504.341 691.393 526.152C655.72 546.125 619.394 532.655 595.394 541.559C532.211 565.001 555.453 577.409 527.208 605.25C492.838 639.128 476.438 727.84 555.453 727.84C620.438 727.84 600.993 760.157 649.655 774.478C698.316 788.797 753.502 764.421 753.502 700.248C753.502 676.15 751.226 639.893 768.453 587.129Z"
        stroke="var(--color-text-primary)"
        stroke-width="3"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M1221.7 350.187C1304.14 44.9292 997.846 9.5046 776.439 102.79C646.082 151.562 559.301 4.30808 399.65 63.3958C236.436 123.805 427.322 308.509 183.807 405.257C-60.2651 502.554 55.8725 932.164 273.648 937.021C490.148 941.877 430.515 1015.72 645.53 1179.23C860.546 1342.74 1220.34 1115.18 1132.12 871.378C1043.9 631.217 1131.92 682.313 1221.7 350.187Z"
        stroke="var(--color-text-primary)"
        stroke-width="3"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M1176.38 372.105C1251.61 94.2047 971.102 57.2118 767.941 143.35C647.052 189.242 565.317 55.3663 419.231 109.436C266.019 166.148 440.143 333.623 218.153 423.48C-4.94836 514.434 97.9354 909.954 301.834 914.325C503.183 918.696 447.569 988.387 645.95 1136.98C844.329 1285.57 1173.67 1078.33 1094.27 852.488C1014.87 633.934 1093.86 676.295 1176.38 372.105Z"
        stroke="var(--color-text-primary)"
        stroke-width="3"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M1131.07 394.024C1199.08 143.48 944.36 104.92 759.443 183.911C648.023 226.923 571.333 106.425 438.811 155.476C295.604 208.493 452.962 358.737 252.5 441.703C50.369 526.316 139.999 887.747 330.023 891.632C516.219 895.517 464.624 961.056 646.369 1094.73C828.114 1228.4 1126.99 1041.48 1056.41 833.6C985.836 636.651 1055.79 670.278 1131.07 394.024Z"
        stroke="var(--color-text-primary)"
        stroke-width="3"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M1085.75 415.944C1146.56 192.76 917.616 152.63 750.945 224.473C648.993 264.605 577.349 157.486 458.392 201.519C325.188 250.838 465.78 383.854 286.846 459.929C105.685 538.2 182.061 865.54 358.209 868.94C529.254 872.34 481.677 933.726 646.786 1052.48C811.896 1171.23 1080.31 1004.63 1018.56 814.713C956.801 639.37 1017.73 664.261 1085.75 415.944Z"
        stroke="var(--color-text-primary)"
        stroke-width="3"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M1040.43 438.975C1094.03 243.148 890.871 201.451 742.445 266.145C649.962 303.398 583.363 209.657 477.972 248.672C354.771 294.294 478.6 410.081 321.191 479.265C161.001 551.194 224.123 844.445 386.394 847.359C542.288 850.272 498.73 907.506 647.205 1011.34C795.679 1115.17 1033.63 968.888 980.699 796.937C927.767 643.2 979.665 659.356 1040.43 438.975Z"
        stroke="var(--color-text-primary)"
        stroke-width="3"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M995.108 463.319C1041.5 294.851 864.127 251.584 733.946 309.133C650.931 343.505 589.377 263.142 497.552 297.139C384.353 339.064 491.416 437.62 355.537 499.914C216.316 565.501 266.185 824.662 414.579 827.091C555.322 829.519 515.783 882.6 647.622 971.515C779.461 1060.43 986.953 934.462 942.842 780.473C898.732 648.344 941.601 655.763 995.108 463.319Z"
        stroke="var(--color-text-primary)"
        stroke-width="3"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M949.787 487.738C988.968 346.626 837.381 301.792 725.445 352.192C651.898 383.685 595.39 316.701 517.129 345.679C413.935 383.907 504.233 465.235 389.88 520.638C271.631 579.884 308.246 804.954 442.764 806.896C568.355 808.84 532.835 857.767 648.038 931.763C763.241 1005.76 940.272 900.11 904.984 764.085C869.695 653.561 903.536 652.246 949.787 487.738Z"
        stroke="var(--color-text-primary)"
        stroke-width="3"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M904.464 512.26C936.435 398.507 810.633 352.104 716.943 395.357C652.863 423.97 601.402 370.365 536.706 394.324C443.514 428.855 517.049 492.953 424.223 541.465C326.942 594.37 350.303 785.35 470.946 786.808C581.385 788.265 549.885 833.04 648.453 892.117C747.02 951.193 893.59 865.863 867.124 747.802C840.658 658.884 865.469 648.833 904.464 512.26Z"
        stroke="var(--color-text-primary)"
        stroke-width="3"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M859.138 536.937C883.899 450.542 783.883 402.571 708.436 438.678C653.826 464.41 607.409 424.183 556.279 443.124C473.09 473.958 529.861 520.826 458.562 562.448C382.252 609.01 392.358 765.902 499.126 766.873C594.413 767.844 566.931 808.467 648.863 852.625C730.796 896.782 846.904 831.772 829.26 731.671C811.617 664.361 827.398 645.574 859.138 536.937Z"
        stroke="var(--color-text-primary)"
        stroke-width="3"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M813.804 561.851C831.357 502.813 757.125 453.273 699.924 482.232C654.782 505.085 613.41 478.237 575.845 492.159C502.659 519.296 542.665 548.934 492.894 583.666C437.553 623.886 434.408 746.688 527.298 747.173C607.434 747.659 583.971 784.129 649.268 813.369C714.565 842.606 800.212 797.913 791.39 715.777C782.568 670.071 789.321 642.551 813.804 561.851Z"
        stroke="var(--color-text-primary)"
        stroke-width="3"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
    </motion.svg>
  )
}
