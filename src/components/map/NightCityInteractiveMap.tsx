
"use client";

import type { District } from '@/lib/content/districts';
import { cn } from '@/lib/utils';

interface NightCityInteractiveMapProps {
  districts: District[];
  hoveredDistrictId: string | null;
  activeDistrictId: string | null;
  onDistrictSelect: (districtId: string) => void;
  onDistrictHover: (districtId: string | null) => void;
}

const generateAnchorId = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/:/g, '') 
    .replace(/\(/g, '') 
    .replace(/\)/g, '') 
    .replace(/\s+/g, '-') 
    .replace(/[^\w-]+/g, ''); 
};

export function NightCityInteractiveMap({
  districts,
  hoveredDistrictId,
  activeDistrictId,
  onDistrictSelect,
  onDistrictHover,
}: NightCityInteractiveMapProps) {
  
  // IMPORTANT: Replace this viewBox with the viewBox from YOUR SVG file (e.g., "0 0 1200 900")
  // You can find this by opening your SVG file (e.g., in a text editor if it's complex).
  const viewBox = "0 0 894 914"; // <<<< ----- UPDATE THIS VALUE from your SVG file

  // IMPORTANT: Replace the 'd' attribute below with the 'd' attribute from YOUR SINGLE complex SVG path.
  // This path will be the visual background and will not be interactive itself.
  const yourComplexMapPathData = "M 454,29 L 452,31 L 451,31 L 449,33 L 448,33 L 447,34 L 446,34 L 444,36 L 443,36 L 441,38 L 440,38 L 438,40 L 437,40 L 436,41 L 435,41 L 433,43 L 432,43 L 430,45 L 429,45 L 427,47 L 426,47 L 425,48 L 424,48 L 422,50 L 421,50 L 419,52 L 418,52 L 416,54 L 415,54 L 414,55 L 413,55 L 411,57 L 410,57 L 408,59 L 407,59 L 405,61 L 404,61 L 403,62 L 402,62 L 400,64 L 399,64 L 397,66 L 396,66 L 394,68 L 393,68 L 391,70 L 390,70 L 389,71 L 388,71 L 386,73 L 385,73 L 383,75 L 382,75 L 380,77 L 379,77 L 378,78 L 377,78 L 375,80 L 374,80 L 372,82 L 371,82 L 369,84 L 368,84 L 367,85 L 361,85 L 360,86 L 354,86 L 353,87 L 347,87 L 346,88 L 339,88 L 338,89 L 332,89 L 331,90 L 325,90 L 324,91 L 322,91 L 320,93 L 319,93 L 317,95 L 316,95 L 314,97 L 313,97 L 312,98 L 311,98 L 309,100 L 308,100 L 306,102 L 305,102 L 303,104 L 302,104 L 301,105 L 300,105 L 298,107 L 297,107 L 295,109 L 294,109 L 292,111 L 291,111 L 290,112 L 289,112 L 287,114 L 286,114 L 284,116 L 283,116 L 281,118 L 280,118 L 279,119 L 278,119 L 276,121 L 275,121 L 273,123 L 272,123 L 270,125 L 269,125 L 268,126 L 267,126 L 265,128 L 264,128 L 262,130 L 261,130 L 259,132 L 258,132 L 257,133 L 256,133 L 254,135 L 253,135 L 251,137 L 250,137 L 248,139 L 247,139 L 246,140 L 245,140 L 243,142 L 242,142 L 240,144 L 239,144 L 237,146 L 236,146 L 234,148 L 233,148 L 232,149 L 232,150 L 231,151 L 231,158 L 230,159 L 230,167 L 229,168 L 229,175 L 228,176 L 228,183 L 227,184 L 227,192 L 226,193 L 226,200 L 225,201 L 225,208 L 224,209 L 224,217 L 223,218 L 223,225 L 222,226 L 222,233 L 221,234 L 221,242 L 220,243 L 220,250 L 219,251 L 219,259 L 218,260 L 218,267 L 219,268 L 220,268 L 221,269 L 223,269 L 224,270 L 225,270 L 226,271 L 228,271 L 229,272 L 230,272 L 231,273 L 233,273 L 234,274 L 235,274 L 236,275 L 238,275 L 239,276 L 240,276 L 241,277 L 243,277 L 244,278 L 245,278 L 246,279 L 248,279 L 249,280 L 250,280 L 251,281 L 253,281 L 254,282 L 255,282 L 256,283 L 258,283 L 259,284 L 260,284 L 261,285 L 263,285 L 264,286 L 265,286 L 266,287 L 268,287 L 269,288 L 270,288 L 271,289 L 273,289 L 274,290 L 275,290 L 276,291 L 278,291 L 279,292 L 280,292 L 281,293 L 283,293 L 284,294 L 285,294 L 286,295 L 288,295 L 289,296 L 290,296 L 291,297 L 293,297 L 294,298 L 295,298 L 296,299 L 298,299 L 299,300 L 300,300 L 301,301 L 302,301 L 303,302 L 305,302 L 306,303 L 307,303 L 308,304 L 310,304 L 311,305 L 312,305 L 313,306 L 315,306 L 316,307 L 317,307 L 318,308 L 320,308 L 321,309 L 322,309 L 323,310 L 324,310 L 326,312 L 326,314 L 327,315 L 327,316 L 328,317 L 328,318 L 329,319 L 329,320 L 330,321 L 330,322 L 331,323 L 331,324 L 332,325 L 332,326 L 333,327 L 333,328 L 334,329 L 334,330 L 335,331 L 335,332 L 336,333 L 336,335 L 337,336 L 337,337 L 338,338 L 338,339 L 339,340 L 339,341 L 340,342 L 340,343 L 341,344 L 341,345 L 342,346 L 342,347 L 343,348 L 343,349 L 344,350 L 344,352 L 345,353 L 345,354 L 346,355 L 346,356 L 347,357 L 347,358 L 348,359 L 348,360 L 349,361 L 349,362 L 350,363 L 350,364 L 351,365 L 351,366 L 352,367 L 352,369 L 353,370 L 353,371 L 354,372 L 354,373 L 355,374 L 355,375 L 356,376 L 356,377 L 357,378 L 357,379 L 358,380 L 358,381 L 359,382 L 359,383 L 360,384 L 360,386 L 361,387 L 361,388 L 362,389 L 362,390 L 363,391 L 363,392 L 364,393 L 364,394 L 363,395 L 361,395 L 360,396 L 359,396 L 358,397 L 357,397 L 356,398 L 355,398 L 354,399 L 352,399 L 351,400 L 350,400 L 349,401 L 348,401 L 347,402 L 346,402 L 345,403 L 344,403 L 343,404 L 341,404 L 340,405 L 339,405 L 338,406 L 337,406 L 336,407 L 335,407 L 334,408 L 332,408 L 331,409 L 330,409 L 329,410 L 328,410 L 327,411 L 326,411 L 325,412 L 323,412 L 322,413 L 321,413 L 320,414 L 319,414 L 318,415 L 316,415 L 312,411 L 311,411 L 305,405 L 304,405 L 299,400 L 298,400 L 292,394 L 290,394 L 289,395 L 288,395 L 277,406 L 276,406 L 265,417 L 264,417 L 253,428 L 253,429 L 267,443 L 268,443 L 287,462 L 287,480 L 288,481 L 288,502 L 289,503 L 289,513 L 290,514 L 290,523 L 291,524 L 291,533 L 292,534 L 292,543 L 293,544 L 293,552 L 294,553 L 294,562 L 295,563 L 295,572 L 296,573 L 296,582 L 297,583 L 297,592 L 298,593 L 298,595 L 299,596 L 299,597 L 300,598 L 300,600 L 301,601 L 301,602 L 302,603 L 302,604 L 303,605 L 303,606 L 304,607 L 304,608 L 305,609 L 305,610 L 306,611 L 306,612 L 307,613 L 307,615 L 308,616 L 308,617 L 309,618 L 309,619 L 310,620 L 310,621 L 311,622 L 311,623 L 312,624 L 312,625 L 313,626 L 313,627 L 314,628 L 314,629 L 316,631 L 320,631 L 321,632 L 324,632 L 325,633 L 329,633 L 330,634 L 334,634 L 335,635 L 338,635 L 339,636 L 342,636 L 343,637 L 343,638 L 344,639 L 344,640 L 345,641 L 345,642 L 346,643 L 346,645 L 347,646 L 347,647 L 348,648 L 348,649 L 349,650 L 349,651 L 350,652 L 350,654 L 351,655 L 351,656 L 352,657 L 352,658 L 353,659 L 353,661 L 354,662 L 354,663 L 355,664 L 355,665 L 356,666 L 356,667 L 350,673 L 349,673 L 342,680 L 341,680 L 334,687 L 333,687 L 327,693 L 326,693 L 319,700 L 318,700 L 311,707 L 310,707 L 303,714 L 302,714 L 296,720 L 295,720 L 295,721 L 294,722 L 294,723 L 293,724 L 293,726 L 292,727 L 292,728 L 291,729 L 291,731 L 290,732 L 290,734 L 289,735 L 289,736 L 288,737 L 288,739 L 287,740 L 287,741 L 286,742 L 286,744 L 285,745 L 285,747 L 284,748 L 284,749 L 283,750 L 283,752 L 282,753 L 282,754 L 281,755 L 281,757 L 280,758 L 280,759 L 279,760 L 279,762 L 278,763 L 278,765 L 277,766 L 277,767 L 276,768 L 276,769 L 275,770 L 275,772 L 274,773 L 274,774 L 273,775 L 273,777 L 272,778 L 272,780 L 271,781 L 271,782 L 270,783 L 270,785 L 269,786 L 269,787 L 268,788 L 268,790 L 267,791 L 267,792 L 266,793 L 266,795 L 265,796 L 265,798 L 264,799 L 264,800 L 263,801 L 263,803 L 262,804 L 262,805 L 261,806 L 261,808 L 260,809 L 260,810 L 259,811 L 259,815 L 261,817 L 262,817 L 286,841 L 287,841 L 309,863 L 310,863 L 329,882 L 333,882 L 334,881 L 335,881 L 336,880 L 338,880 L 339,879 L 340,879 L 341,878 L 343,878 L 344,877 L 345,877 L 346,876 L 348,876 L 349,875 L 350,875 L 351,874 L 352,874 L 353,873 L 355,873 L 356,872 L 358,872 L 359,871 L 360,871 L 361,870 L 363,870 L 364,869 L 365,869 L 366,868 L 368,868 L 369,867 L 371,867 L 372,866 L 373,866 L 374,865 L 376,865 L 377,864 L 378,864 L 379,863 L 381,863 L 382,862 L 383,862 L 384,861 L 386,861 L 387,860 L 388,860 L 389,859 L 391,859 L 392,858 L 393,858 L 394,857 L 396,857 L 397,856 L 398,856 L 399,855 L 401,855 L 402,854 L 403,854 L 404,853 L 406,853 L 407,852 L 408,852 L 409,851 L 411,851 L 412,850 L 413,850 L 414,849 L 416,849 L 417,848 L 418,848 L 419,847 L 421,847 L 422,846 L 424,846 L 425,845 L 426,845 L 427,844 L 429,844 L 430,843 L 431,843 L 432,842 L 434,842 L 435,841 L 436,841 L 437,840 L 439,840 L 440,839 L 441,839 L 442,838 L 444,838 L 445,837 L 446,837 L 447,836 L 449,836 L 450,835 L 451,835 L 452,834 L 454,834 L 455,833 L 456,833 L 457,832 L 459,832 L 460,831 L 461,831 L 462,830 L 464,830 L 465,829 L 467,829 L 468,828 L 469,828 L 470,827 L 472,827 L 473,826 L 474,826 L 475,825 L 477,825 L 478,824 L 479,824 L 480,823 L 482,823 L 483,822 L 484,822 L 487,819 L 487,818 L 489,816 L 489,815 L 491,813 L 491,812 L 493,810 L 493,809 L 495,807 L 495,806 L 497,804 L 497,803 L 499,801 L 499,800 L 501,798 L 501,797 L 503,795 L 503,794 L 505,792 L 505,791 L 507,789 L 507,788 L 509,786 L 509,785 L 511,783 L 511,782 L 513,780 L 513,779 L 515,777 L 515,776 L 517,774 L 517,773 L 519,771 L 519,770 L 521,768 L 521,767 L 523,765 L 523,764 L 525,762 L 525,761 L 527,759 L 527,758 L 529,756 L 529,755 L 531,753 L 532,754 L 533,754 L 534,755 L 535,755 L 537,757 L 538,757 L 540,759 L 541,759 L 542,760 L 543,760 L 545,762 L 546,762 L 547,763 L 548,763 L 550,765 L 551,765 L 553,767 L 554,767 L 555,768 L 556,768 L 558,770 L 559,770 L 561,772 L 562,772 L 563,773 L 564,773 L 566,775 L 567,775 L 569,777 L 570,777 L 571,778 L 572,778 L 574,780 L 575,780 L 577,782 L 578,782 L 579,783 L 580,783 L 582,785 L 583,785 L 584,786 L 585,786 L 587,788 L 596,788 L 597,787 L 604,787 L 605,786 L 611,786 L 612,785 L 613,785 L 614,786 L 615,785 L 623,785 L 624,784 L 633,784 L 634,785 L 634,786 L 635,787 L 635,788 L 636,789 L 636,790 L 637,791 L 637,792 L 638,793 L 638,794 L 639,795 L 639,796 L 641,798 L 641,799 L 642,800 L 642,801 L 643,802 L 643,803 L 644,804 L 644,805 L 645,806 L 645,807 L 646,808 L 646,809 L 647,810 L 649,810 L 650,811 L 651,811 L 652,812 L 653,812 L 654,813 L 655,813 L 656,814 L 658,814 L 659,815 L 660,815 L 661,816 L 662,816 L 663,817 L 664,817 L 665,818 L 667,818 L 668,819 L 669,819 L 670,820 L 671,820 L 672,821 L 673,821 L 674,822 L 678,822 L 678,821 L 682,817 L 682,816 L 687,811 L 687,810 L 691,806 L 691,805 L 695,801 L 695,800 L 700,795 L 700,794 L 704,790 L 704,789 L 709,784 L 709,783 L 713,779 L 713,778 L 717,774 L 717,773 L 722,768 L 722,767 L 727,762 L 727,761 L 731,757 L 731,756 L 736,751 L 736,750 L 740,746 L 740,745 L 744,741 L 744,740 L 745,739 L 745,731 L 746,730 L 746,722 L 747,721 L 747,714 L 748,713 L 748,709 L 749,708 L 749,703 L 750,702 L 750,698 L 751,697 L 751,693 L 752,692 L 752,688 L 753,687 L 753,682 L 754,681 L 754,677 L 755,676 L 755,672 L 756,671 L 756,667 L 757,666 L 757,661 L 758,660 L 758,656 L 759,655 L 759,651 L 760,650 L 760,646 L 761,645 L 761,640 L 762,639 L 762,635 L 763,634 L 763,630 L 764,629 L 764,625 L 765,624 L 765,619 L 766,618 L 766,614 L 767,613 L 767,609 L 768,608 L 768,604 L 769,603 L 769,598 L 770,597 L 770,589 L 769,588 L 769,585 L 768,584 L 768,581 L 767,580 L 767,577 L 766,576 L 766,575 L 747,556 L 747,551 L 746,550 L 746,543 L 745,542 L 745,535 L 744,534 L 744,528 L 743,527 L 743,520 L 742,519 L 742,518 L 738,514 L 738,513 L 734,509 L 734,508 L 730,504 L 730,503 L 727,500 L 727,499 L 723,495 L 723,494 L 719,490 L 719,489 L 715,485 L 715,484 L 711,480 L 711,479 L 707,475 L 707,474 L 704,471 L 704,470 L 700,466 L 700,465 L 697,462 L 699,460 L 700,460 L 701,459 L 702,459 L 704,457 L 705,457 L 707,455 L 708,455 L 709,454 L 710,454 L 712,452 L 713,452 L 714,451 L 715,451 L 717,449 L 718,449 L 720,447 L 721,447 L 722,446 L 723,446 L 725,444 L 726,444 L 728,442 L 729,442 L 730,441 L 731,441 L 733,439 L 734,439 L 735,438 L 736,438 L 738,436 L 739,436 L 741,434 L 742,434 L 743,433 L 744,433 L 746,431 L 747,431 L 749,429 L 750,429 L 751,428 L 752,428 L 754,426 L 755,426 L 756,425 L 757,425 L 759,423 L 759,422 L 760,421 L 760,411 L 761,410 L 761,400 L 762,399 L 762,389 L 763,388 L 763,377 L 764,376 L 764,366 L 765,365 L 765,355 L 766,354 L 766,344 L 765,343 L 763,343 L 762,342 L 759,342 L 758,341 L 756,341 L 755,340 L 753,340 L 752,339 L 750,339 L 749,338 L 746,338 L 745,337 L 743,337 L 742,336 L 740,336 L 739,335 L 737,335 L 736,334 L 733,334 L 732,333 L 730,333 L 729,332 L 728,332 L 723,327 L 723,326 L 719,322 L 719,321 L 716,318 L 716,317 L 712,313 L 712,312 L 709,309 L 709,308 L 705,304 L 705,303 L 701,299 L 701,298 L 698,295 L 698,294 L 694,290 L 694,289 L 690,285 L 690,284 L 687,281 L 687,280 L 683,276 L 683,275 L 680,272 L 680,271 L 676,267 L 676,266 L 672,262 L 672,261 L 669,258 L 669,257 L 665,253 L 665,252 L 662,249 L 662,248 L 658,244 L 658,243 L 654,239 L 654,238 L 651,235 L 651,234 L 647,230 L 647,229 L 643,225 L 643,224 L 640,221 L 640,220 L 636,216 L 636,215 L 633,212 L 633,211 L 632,210 L 632,208 L 631,207 L 631,206 L 630,205 L 630,204 L 629,203 L 629,202 L 628,201 L 628,199 L 627,198 L 627,197 L 626,196 L 626,195 L 625,194 L 625,192 L 624,191 L 624,190 L 623,189 L 623,188 L 622,187 L 622,185 L 621,184 L 621,183 L 620,182 L 620,180 L 619,179 L 619,178 L 618,177 L 618,176 L 617,175 L 617,173 L 616,172 L 616,171 L 615,170 L 615,168 L 614,167 L 614,166 L 613,165 L 613,163 L 612,162 L 612,161 L 611,160 L 611,159 L 610,158 L 610,156 L 609,155 L 609,154 L 608,153 L 608,151 L 607,150 L 607,149 L 606,148 L 606,146 L 605,145 L 605,144 L 604,143 L 604,142 L 603,141 L 603,139 L 602,138 L 602,137 L 601,136 L 601,134 L 600,133 L 600,132 L 599,131 L 599,130 L 598,129 L 598,127 L 597,126 L 597,125 L 596,124 L 596,122 L 595,121 L 595,120 L 594,119 L 594,117 L 593,116 L 593,115 L 592,114 L 592,113 L 591,112 L 591,110 L 590,109 L 590,108 L 589,107 L 589,105 L 588,104 L 588,103 L 587,102 L 587,101 L 586,100 L 586,98 L 585,97 L 585,96 L 584,95 L 584,93 L 583,92 L 583,91 L 582,90 L 582,75 L 581,74 L 581,57 L 580,56 L 580,54 L 579,53 L 578,53 L 576,51 L 575,51 L 574,50 L 573,50 L 571,48 L 570,48 L 569,47 L 568,47 L 566,45 L 565,45 L 563,43 L 562,43 L 561,42 L 560,42 L 558,40 L 557,40 L 556,39 L 555,39 L 553,37 L 552,37 L 551,36 L 550,36 L 548,34 L 545,34 L 544,33 L 527,33 L 526,32 L 509,32 L 508,31 L 491,31 L 490,30 L 473,30 L 472,29 Z"; // <<<< ----- PASTE YOUR SVG's SINGLE PATH 'd' ATTRIBUTE HERE

  // --- Approximate Hotspot Definitions ---
  // You WILL LIKELY NEED TO ADJUST x, y, width, height for each district 
  // to match your specific SVG layout. These are very rough guesses.
  const districtHotspots: Record<string, { x: string, y: string, width: string, height: string, name: string }> = {
    "watson-o-berco-e-o-abandono": { x: "150", y: "50", width: "200", height: "150", name: "Watson" },
    "westbrook-o-luxo-deteriorado-e-a-ordem-dos-tyger-claws": { x: "360", y: "100", width: "180", height: "120", name: "Westbrook" },
    "city-center-o-coracao-de-neon-do-poder-corporativo": { x: "300", y: "250", width: "250", height: "200", name: "City Center" },
    "heywood-a-alma-multifacetada-de-night-city": { x: "300", y: "460", width: "250", height: "180", name: "Heywood" },
    "santo-domingo-o-motor-industrial-e-o-caldeirao-de-classes": { x: "100", y: "350", width: "180", height: "250", name: "Santo Domingo" },
    "pacifica-o-paraiso-esquecido-vazio-e-perigoso": { x: "50", y: "620", width: "200", height: "150", name: "Pacifica" },
    "dogtown-o-feudo-anarquico-do-coronel-hansen": { x: "100", y: "780", width: "150", height: "100", name: "Dogtown (Pacifica Sub)" },
    "as-terras-baldias-badlands-o-deserto-sem-lei": { x: "600", y: "50", width: "250", height: "700", name: "Badlands (Surrounding Area)" },
    // Add more with estimated coordinates if you have more districts in your `districts` array
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-2 border border-border rounded-lg shadow-lg bg-card overflow-hidden" aria-label="Mapa Interativo de Night City">
      <svg
        viewBox={viewBox}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        aria-labelledby="mapTitle"
        role="graphics-document"
      >
        <title id="mapTitle">Mapa de Night City</title>
        <desc>Mapa interativo dos distritos de Night City. Clique ou passe o mouse sobre uma área para destacá-la e ver detalhes.</desc>
        
        {/* 1. Your complex SVG path as a non-interactive base layer */}
        {/* Replace the 'd' attribute with your actual single path data from your SVG file. */}
        <path
          d={yourComplexMapPathData} // <<<< ----- YOUR SINGLE COMPLEX SVG PATH DATA GOES HERE
          fill="hsl(var(--muted))" // Base color for the map drawing
          stroke="hsl(var(--border))" // Outline for the map drawing
          strokeWidth="0.5"
          className="pointer-events-none" // Make sure this base map layer doesn't interfere with clicks
        />

        {/* 2. Interactive Hotspot Overlays */}
        <g>
          {districts.map((district) => {
            const districtId = generateAnchorId(district.name);
            const hotspot = districtHotspots[districtId];
            
            if (!hotspot) {
              console.warn(`No hotspot definition for district: ${district.name} (ID: ${districtId})`);
              return null; // Or render a default small rect as a warning
            }

            const isActive = activeDistrictId === districtId;
            const isHovered = hoveredDistrictId === districtId;
            
            let fill = "transparent"; // Default: hotspots are invisible
            if (isActive) {
              fill = district.borderColor ? `${district.borderColor}99` : 'hsl(var(--primary) / 0.6)'; // 60% opacity active
            } else if (isHovered) {
              fill = district.borderColor ? `${district.borderColor}66` : 'hsl(var(--primary) / 0.4)'; // 40% opacity hover
            }
            
            let stroke = isActive || isHovered 
              ? (district.borderColor || 'hsl(var(--foreground))')
              : 'transparent'; // No border by default

            let strokeWidth = isActive ? 2 : isHovered ? 1.5 : 0;
            let zIndex = isActive ? 10 : isHovered ? 5 : 1;

            return (
              <g key={districtId}>
                <rect
                  id={districtId}
                  x={hotspot.x}
                  y={hotspot.y}
                  width={hotspot.width}
                  height={hotspot.height}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  onClick={() => onDistrictSelect(districtId)}
                  onMouseEnter={() => onDistrictHover(districtId)}
                  onMouseLeave={() => onDistrictHover(null)}
                  className={cn("cursor-pointer transition-all duration-150 ease-in-out")}
                  style={{ zIndex }}
                  aria-label={district.name}
                />
                {/* Optional: Add a text label for the hotspot - good for debugging positions */}
                {/* <text 
                  x={parseFloat(hotspot.x) + parseFloat(hotspot.width) / 2} 
                  y={parseFloat(hotspot.y) + parseFloat(hotspot.height) / 2} 
                  textAnchor="middle" 
                  dominantBaseline="middle"
                  fontSize="10" 
                  fill="hsl(var(--foreground))"
                  className="pointer-events-none"
                >
                  {hotspot.name}
                </text> */}
              </g>
            );
          })}
        </g>
        
      </svg>
    </div>
  );
}

    