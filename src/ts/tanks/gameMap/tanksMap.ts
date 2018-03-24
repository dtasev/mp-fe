import { Point } from "../utility/point";
import { Draw } from "../drawing/draw";
import { Color } from "../drawing/color";
import { ITheme } from "../themes/iTheme";
import { Obstacle } from "./obstacle";
import { IMapData } from "./dataInterfaces";


export class TanksMap {
    terrain: Obstacle[];
    id: number;
    name: string;
    creator: string;
    createdDate: string;
    updatedDate: string;
    downloadedDate: string;


    /**
     * Loads the map, from cache, if present and up-to-date, else from remote
     */
    constructor(id: string) {
        // TODO download the data remotely, or load from cache
        // currently just load the example map
        const desc = <IMapData>JSON.parse(JSON.stringify(exampleMap));

        this.name = desc.name;
        this.creator = desc.creator;
        this.createdDate = desc.createdDate;
        this.updatedDate = desc.updatedDate;
        this.downloadedDate = desc.downloadedDate;
        this.terrain = [];
        for (const obstacleDescription of desc.terrain) {
            this.terrain.push(new Obstacle(obstacleDescription));
        }
    }
    draw(context: CanvasRenderingContext2D, theme: ITheme) {
        const length = this.terrain.length;
        for (const obstacle of this.terrain) {
            obstacle.draw(context, theme);
        }
    }

    /**
     * Cache the obstacle data locally
     */
    cache(): void {
        throw new Error("Not implemented");
    }
}

const exampleMap = {
    "name": "Map",
    "creator": "Dimitar Tasev",
    "createdDate": "2018-03-13T02:00:00Z",
    "updatedDate": "2018-03-13T03:00:00Z",
    "downloadedDate": "2018-03-14T05:00:00Z",
    "terrain": [{
        "type": "solid",
        "centerX": 782,
        "centerY": 383,
        "points": [{
            "x": 735,
            "y": 257
        }, {
            "x": 724, "y": 261
        }, {
            "x": 707, "y": 279
        }, {
            "x": 694, "y": 305
        }, {
            "x": 679, "y": 344
        }, {
            "x": 671, "y": 388
        }, {
            "x": 670, "y": 420
        }, {
            "x": 673, "y": 435
        }, {
            "x": 682, "y": 456
        }, {
            "x": 703, "y": 476
        }, {
            "x": 739, "y": 491
        }, {
            "x": 755, "y": 496
        }, {
            "x": 788, "y": 498
        }, {
            "x": 815, "y": 495
        }, {
            "x": 836, "y": 487
        }, {
            "x": 845, "y": 483
        }, {
            "x": 862, "y": 468
        }, {
            "x": 874, "y": 452
        }, {
            "x": 884, "y": 425
        }, {
            "x": 886, "y": 411
        }, {
            "x": 886, "y": 387
        }, {
            "x": 886, "y": 364
        }, {
            "x": 881, "y": 344
        }, {
            "x": 879, "y": 334
        }, {
            "x": 869, "y": 316
        }, {
            "x": 858, "y": 299
        }, {
            "x": 851, "y": 290
        }, {
            "x": 849, "y": 288
        }, {
            "x": 840, "y": 284
        }, {
            "x": 828, "y": 281
        }, {
            "x": 820, "y": 279
        }, {
            "x": 807, "y": 276
        }, {
            "x": 798, "y": 275
        }, {
            "x": 789, "y": 275
        }, {
            "x": 785, "y": 275
        }, {
            "x": 777, "y": 275
        }, {
            "x": 769, "y": 272
        }, {
            "x": 763, "y": 270
        }, {
            "x": 760, "y": 269
        }, {
            "x": 757, "y": 268
        }, {
            "x": 755, "y": 267
        }]
    },
    {
        "type": "solid",
        "centerX": 1183,
        "centerY": 313,
        "points": [{
            "x": 1079,
            "y": 285
        }, {
            "x": 1076, "y": 276
        }, {
            "x": 1075, "y": 271
        }, {
            "x": 1073, "y": 261
        }, {
            "x": 1073, "y": 252
        }, {
            "x": 1079, "y": 241
        }, {
            "x": 1086, "y": 235
        }, {
            "x": 1110, "y": 218
        }, {
            "x": 1140, "y": 206
        }, {
            "x": 1165, "y": 202
        }, {
            "x": 1176, "y": 202
        }, {
            "x": 1195, "y": 203
        }, {
            "x": 1213, "y": 212
        }, {
            "x": 1230, "y": 222
        }, {
            "x": 1236, "y": 226
        }, {
            "x": 1251, "y": 241
        }, {
            "x": 1263, "y": 255
        }, {
            "x": 1274, "y": 273
        }, {
            "x": 1278, "y": 280
        }, {
            "x": 1282, "y": 302
        }, {
            "x": 1284, "y": 325
        }, {
            "x": 1281, "y": 345
        }, {
            "x": 1278, "y": 353
        }, {
            "x": 1266, "y": 372
        }, {
            "x": 1254, "y": 386
        }, {
            "x": 1246, "y": 393
        }, {
            "x": 1230, "y": 403
        }, {
            "x": 1211, "y": 412
        }, {
            "x": 1203, "y": 416
        }, {
            "x": 1179, "y": 419
        }, {
            "x": 1171, "y": 419
        }, {
            "x": 1156, "y": 416
        }, {
            "x": 1140, "y": 413
        }, {
            "x": 1132, "y": 411
        }, {
            "x": 1121, "y": 405
        }, {
            "x": 1107, "y": 396
        }, {
            "x": 1096, "y": 388
        }, {
            "x": 1092, "y": 386
        }, {
            "x": 1087, "y": 383
        }, {
            "x": 1084, "y": 381
        }, {
            "x": 1083, "y": 380
        }, {
            "x": 1081, "y": 378
        }, {
            "x": 1077, "y": 371
        }, {
            "x": 1074, "y": 360
        }, {
            "x": 1072, "y": 354
        }, {
            "x": 1072, "y": 352
        }, {
            "x": 1071, "y": 350
        }, {
            "x": 1071, "y": 349
        }, {
            "x": 1071, "y": 348
        }, {
            "x": 1071, "y": 347
        }, {
            "x": 1071, "y": 346
        }, {
            "x": 1071, "y": 342
        }, {
            "x": 1071, "y": 341
        }, {
            "x": 1071, "y": 337
        }, {
            "x": 1071, "y": 334
        }, {
            "x": 1071, "y": 332
        }, {
            "x": 1071, "y": 331
        }, {
            "x": 1071, "y": 330
        }, {
            "x": 1072, "y": 330
        }, {
            "x": 1072, "y": 329
        }]
    },
    {
        "type": "solid",
        "centerX": 1051,
        "centerY": 635,
        "points": [{
            "x": 1018,
            "y": 556
        }, {
            "x": 1017, "y": 556
        }, {
            "x": 1015, "y": 557
        }, {
            "x": 1013, "y": 558
        }, {
            "x": 1010, "y": 559
        }, {
            "x": 1001, "y": 569
        }, {
            "x": 987, "y": 593
        }, {
            "x": 982, "y": 607
        }, {
            "x": 974, "y": 640
        }, {
            "x": 973, "y": 665
        }, {
            "x": 980, "y": 685
        }, {
            "x": 987, "y": 697
        }, {
            "x": 992, "y": 701
        }, {
            "x": 1007, "y": 712
        }, {
            "x": 1026, "y": 717
        }, {
            "x": 1042, "y": 717
        }, {
            "x": 1050, "y": 715
        }, {
            "x": 1072, "y": 709
        }, {
            "x": 1087, "y": 701
        }, {
            "x": 1094, "y": 695
        }, {
            "x": 1107, "y": 682
        }, {
            "x": 1116, "y": 669
        }, {
            "x": 1125, "y": 641
        }, {
            "x": 1126, "y": 633
        }, {
            "x": 1128, "y": 617
        }, {
            "x": 1128, "y": 597
        }, {
            "x": 1127, "y": 581
        }, {
            "x": 1125, "y": 574
        }, {
            "x": 1121, "y": 564
        }, {
            "x": 1118, "y": 556
        }, {
            "x": 1112, "y": 546
        }, {
            "x": 1111, "y": 542
        }, {
            "x": 1106, "y": 536
        }, {
            "x": 1098, "y": 529
        }, {
            "x": 1095, "y": 526
        }, {
            "x": 1089, "y": 523
        }, {
            "x": 1084, "y": 521
        }, {
            "x": 1077, "y": 521
        }, {
            "x": 1069, "y": 524
        }, {
            "x": 1065, "y": 525
        }, {
            "x": 1057, "y": 529
        }, {
            "x": 1049, "y": 534
        }, {
            "x": 1042, "y": 537
        }, {
            "x": 1040, "y": 538
        }, {
            "x": 1035, "y": 540
        }, {
            "x": 1030, "y": 541
        }, {
            "x": 1028, "y": 542
        }, {
            "x": 1027, "y": 542
        }, {
            "x": 1025, "y": 543
        }, {
            "x": 1024, "y": 543
        }, {
            "x": 1024, "y": 544
        }, {
            "x": 1023, "y": 545
        }, {
            "x": 1021, "y": 546
        }, {
            "x": 1019, "y": 547
        }]
    },
    {
        "type": "solid",
        "centerX": 788,
        "centerY": 722,
        "points": [{
            "x": 712,
            "y": 693
        }, {
            "x": 712, "y": 692
        }, {
            "x": 712, "y": 691
        }, {
            "x": 721, "y": 682
        }, {
            "x": 729, "y": 676
        }, {
            "x": 751, "y": 660
        }, {
            "x": 772, "y": 644
        }, {
            "x": 798, "y": 633
        }, {
            "x": 811, "y": 630
        }, {
            "x": 827, "y": 627
        }, {
            "x": 842, "y": 625
        }, {
            "x": 855, "y": 624
        }, {
            "x": 863, "y": 624
        }, {
            "x": 876, "y": 624
        }, {
            "x": 889, "y": 626
        }, {
            "x": 894, "y": 627
        }, {
            "x": 902, "y": 628
        }, {
            "x": 912, "y": 630
        }, {
            "x": 917, "y": 633
        }, {
            "x": 920, "y": 635
        }, {
            "x": 924, "y": 642
        }, {
            "x": 929, "y": 656
        }, {
            "x": 931, "y": 673
        }, {
            "x": 931, "y": 680
        }, {
            "x": 929, "y": 697
        }, {
            "x": 924, "y": 711
        }, {
            "x": 920, "y": 721
        }, {
            "x": 916, "y": 728
        }, {
            "x": 908, "y": 743
        }, {
            "x": 897, "y": 755
        }, {
            "x": 879, "y": 766
        }, {
            "x": 870, "y": 770
        }, {
            "x": 847, "y": 777
        }, {
            "x": 830, "y": 782
        }, {
            "x": 813, "y": 788
        }, {
            "x": 797, "y": 794
        }, {
            "x": 789, "y": 797
        }, {
            "x": 767, "y": 804
        }, {
            "x": 744, "y": 808
        }, {
            "x": 734, "y": 810
        }, {
            "x": 720, "y": 814
        }, {
            "x": 705, "y": 815
        }, {
            "x": 689, "y": 817
        }, {
            "x": 681, "y": 817
        }, {
            "x": 661, "y": 817
        }, {
            "x": 644, "y": 816
        }, {
            "x": 634, "y": 814
        }, {
            "x": 630, "y": 813
        }, {
            "x": 627, "y": 811
        }, {
            "x": 624, "y": 807
        }, {
            "x": 623, "y": 797
        }, {
            "x": 623, "y": 792
        }, {
            "x": 625, "y": 781
        }, {
            "x": 630, "y": 772
        }, {
            "x": 633, "y": 768
        }, {
            "x": 637, "y": 763
        }, {
            "x": 641, "y": 758
        }, {
            "x": 645, "y": 753
        }, {
            "x": 648, "y": 749
        }, {
            "x": 654, "y": 742
        }, {
            "x": 660, "y": 738
        }, {
            "x": 667, "y": 732
        }, {
            "x": 670, "y": 729
        }, {
            "x": 676, "y": 724
        }, {
            "x": 680, "y": 719
        }, {
            "x": 683, "y": 715
        }, {
            "x": 684, "y": 714
        }, {
            "x": 686, "y": 712
        }, {
            "x": 687, "y": 711
        }, {
            "x": 688, "y": 710
        }, {
            "x": 689, "y": 710
        }, {
            "x": 689, "y": 709
        }, {
            "x": 690, "y": 709
        }, {
            "x": 691, "y": 708
        }, {
            "x": 693, "y": 707
        }, {
            "x": 694, "y": 706
        }, {
            "x": 694, "y": 705
        }, {
            "x": 695, "y": 705
        }, {
            "x": 696, "y": 704
        }, {
            "x": 697, "y": 703
        }]
    },
    {
        "type": "wood", "centerX": 994, "centerY": 300, "points": [{ "x": 994, "y": 220 }, { "x": 993, "y": 221 }, { "x": 993, "y": 223 }, { "x": 992, "y": 225 }, { "x": 992, "y": 227 }, { "x": 992, "y": 230 }, { "x": 992, "y": 233 }, { "x": 992, "y": 236 }, { "x": 991, "y": 237 }, { "x": 991, "y": 239 }, { "x": 991, "y": 241 }, { "x": 990, "y": 242 }, { "x": 990, "y": 243 }, { "x": 990, "y": 244 }, { "x": 990, "y": 245 }, { "x": 990, "y": 246 }, { "x": 990, "y": 247 }, { "x": 990, "y": 248 }, { "x": 989, "y": 248 }, { "x": 989, "y": 249 }, { "x": 989, "y": 250 }, { "x": 989, "y": 251 }, { "x": 989, "y": 253 }, { "x": 989, "y": 254 }, { "x": 989, "y": 256 }, { "x": 989, "y": 258 }, { "x": 989, "y": 259 }, { "x": 989, "y": 261 }, { "x": 989, "y": 262 }, { "x": 989, "y": 263 }, { "x": 988, "y": 264 }, { "x": 988, "y": 265 }, { "x": 988, "y": 270 }, { "x": 987, "y": 272 }, { "x": 987, "y": 273 }, { "x": 987, "y": 274 }, { "x": 987, "y": 275 }, { "x": 987, "y": 276 }, { "x": 987, "y": 277 }, { "x": 986, "y": 278 }, { "x": 986, "y": 280 }, { "x": 986, "y": 281 }, { "x": 986, "y": 282 }, { "x": 986, "y": 283 }, { "x": 986, "y": 284 }, { "x": 986, "y": 285 }, { "x": 986, "y": 286 }, { "x": 986, "y": 288 }, { "x": 986, "y": 291 }, { "x": 985, "y": 293 }, { "x": 985, "y": 296 }, { "x": 985, "y": 298 }, { "x": 985, "y": 300 }, { "x": 985, "y": 301 }, { "x": 985, "y": 304 }, { "x": 985, "y": 307 }, { "x": 985, "y": 308 }, { "x": 985, "y": 310 }, { "x": 985, "y": 311 }, { "x": 985, "y": 312 }, { "x": 985, "y": 313 }, { "x": 985, "y": 315 }, { "x": 984, "y": 318 }, { "x": 984, "y": 321 }, { "x": 984, "y": 323 }, { "x": 984, "y": 326 }, { "x": 984, "y": 329 }, { "x": 984, "y": 332 }, { "x": 984, "y": 333 }, { "x": 984, "y": 335 }, { "x": 984, "y": 337 }, { "x": 984, "y": 340 }, { "x": 984, "y": 341 }, { "x": 984, "y": 343 }, { "x": 984, "y": 345 }, { "x": 984, "y": 347 }, { "x": 984, "y": 348 }, { "x": 984, "y": 349 }, { "x": 984, "y": 350 }, { "x": 984, "y": 351 }, { "x": 984, "y": 352 }, { "x": 984, "y": 353 }, { "x": 984, "y": 354 }, { "x": 984, "y": 355 }, { "x": 984, "y": 356 }, { "x": 984, "y": 357 }, { "x": 984, "y": 358 }, { "x": 984, "y": 359 }, { "x": 984, "y": 360 }, { "x": 984, "y": 361 }, { "x": 984, "y": 362 }, { "x": 984, "y": 364 }, { "x": 984, "y": 366 }, { "x": 984, "y": 367 }, { "x": 984, "y": 369 }, { "x": 984, "y": 371 }, { "x": 984, "y": 372 }, { "x": 984, "y": 373 }, { "x": 984, "y": 374 }, { "x": 984, "y": 375 }, { "x": 984, "y": 376 }, { "x": 984, "y": 377 }, { "x": 984, "y": 378 }, { "x": 984, "y": 379 }, { "x": 984, "y": 380 }, { "x": 985, "y": 380 }, { "x": 985, "y": 381 }, { "x": 985, "y": 382 }, { "x": 986, "y": 382 }, { "x": 986, "y": 383 }, { "x": 986, "y": 384 }, { "x": 987, "y": 384 }, { "x": 987, "y": 385 }, { "x": 988, "y": 386 }, { "x": 988, "y": 387 }, { "x": 989, "y": 388 }, { "x": 989, "y": 389 }, { "x": 990, "y": 389 }, { "x": 990, "y": 390 }, { "x": 990, "y": 392 }, { "x": 991, "y": 392 }, { "x": 991, "y": 393 }, { "x": 991, "y": 394 }, { "x": 992, "y": 395 }, { "x": 992, "y": 397 }, { "x": 992, "y": 398 }, { "x": 992, "y": 399 }, { "x": 993, "y": 399 }, { "x": 994, "y": 399 }, { "x": 995, "y": 399 }, { "x": 996, "y": 399 }, { "x": 996, "y": 398 }, { "x": 997, "y": 397 }, { "x": 998, "y": 393 }, { "x": 999, "y": 390 }, { "x": 1000, "y": 389 }, { "x": 1000, "y": 387 }, { "x": 1000, "y": 386 }, { "x": 1000, "y": 385 }, { "x": 1001, "y": 384 }, { "x": 1001, "y": 383 }, { "x": 1002, "y": 381 }, { "x": 1002, "y": 379 }, { "x": 1002, "y": 378 }, { "x": 1003, "y": 377 }, { "x": 1003, "y": 375 }, { "x": 1003, "y": 373 }, { "x": 1003, "y": 370 }, { "x": 1003, "y": 369 }, { "x": 1003, "y": 366 }, { "x": 1003, "y": 363 }, { "x": 1003, "y": 361 }, { "x": 1003, "y": 359 }, { "x": 1003, "y": 356 }, { "x": 1003, "y": 354 }, { "x": 1003, "y": 353 }, { "x": 1003, "y": 352 }, { "x": 1003, "y": 351 }, { "x": 1003, "y": 350 }, { "x": 1003, "y": 348 }, { "x": 1003, "y": 347 }, { "x": 1003, "y": 346 }, { "x": 1003, "y": 345 }, { "x": 1003, "y": 344 }, { "x": 1003, "y": 342 }, { "x": 1003, "y": 340 }, { "x": 1003, "y": 338 }, { "x": 1003, "y": 335 }, { "x": 1003, "y": 334 }, { "x": 1003, "y": 332 }, { "x": 1003, "y": 330 }, { "x": 1003, "y": 329 }, { "x": 1003, "y": 328 }, { "x": 1004, "y": 326 }, { "x": 1004, "y": 323 }, { "x": 1004, "y": 321 }, { "x": 1004, "y": 319 }, { "x": 1004, "y": 318 }, { "x": 1004, "y": 317 }, { "x": 1004, "y": 315 }, { "x": 1004, "y": 311 }, { "x": 1004, "y": 309 }, { "x": 1003, "y": 304 }, { "x": 1003, "y": 301 }, { "x": 1003, "y": 298 }, { "x": 1003, "y": 297 }, { "x": 1003, "y": 295 }, { "x": 1003, "y": 292 }, { "x": 1003, "y": 290 }, { "x": 1003, "y": 288 }, { "x": 1003, "y": 287 }, { "x": 1003, "y": 285 }, { "x": 1003, "y": 283 }, { "x": 1003, "y": 282 }, { "x": 1003, "y": 279 }, { "x": 1003, "y": 275 }, { "x": 1004, "y": 272 }, { "x": 1005, "y": 270 }, { "x": 1005, "y": 268 }, { "x": 1006, "y": 265 }, { "x": 1006, "y": 264 }, { "x": 1006, "y": 263 }, { "x": 1006, "y": 261 }, { "x": 1006, "y": 260 }, { "x": 1006, "y": 259 }, { "x": 1006, "y": 257 }, { "x": 1006, "y": 256 }, { "x": 1007, "y": 253 }, { "x": 1007, "y": 251 }, { "x": 1008, "y": 250 }, { "x": 1008, "y": 249 }, { "x": 1008, "y": 248 }, { "x": 1008, "y": 247 }, { "x": 1008, "y": 246 }, { "x": 1008, "y": 245 }, { "x": 1008, "y": 243 }, { "x": 1008, "y": 241 }, { "x": 1008, "y": 240 }, { "x": 1008, "y": 238 }, { "x": 1008, "y": 236 }, { "x": 1008, "y": 233 }, { "x": 1008, "y": 232 }, { "x": 1008, "y": 231 }, { "x": 1008, "y": 229 }, { "x": 1008, "y": 228 }, { "x": 1008, "y": 227 }, { "x": 1008, "y": 226 }, { "x": 1008, "y": 225 }, { "x": 1008, "y": 224 }, { "x": 1008, "y": 223 }, { "x": 1008, "y": 222 }, { "x": 1008, "y": 220 }, { "x": 1008, "y": 219 }, { "x": 1008, "y": 218 }, { "x": 1008, "y": 217 }, { "x": 1008, "y": 216 }, { "x": 1008, "y": 215 }, { "x": 1008, "y": 214 }, { "x": 1007, "y": 213 }, { "x": 1006, "y": 212 }, { "x": 1005, "y": 212 }, { "x": 1005, "y": 211 }, { "x": 1004, "y": 211 }, { "x": 1004, "y": 210 }, { "x": 1003, "y": 210 }, { "x": 1002, "y": 210 }, { "x": 1001, "y": 210 }, { "x": 1000, "y": 210 }]
    },
    {
        "type": "water",
        "centerX": 1245,
        "centerY": 535,
        "points": [{
            "x": 1206,
            "y": 509
        }, {
            "x": 1202, "y": 509
        }, {
            "x": 1201, "y": 509
        }, {
            "x": 1200, "y": 511
        }, {
            "x": 1199, "y": 519
        }, {
            "x": 1201, "y": 534
        }, {
            "x": 1205, "y": 545
        }, {
            "x": 1216, "y": 566
        }, {
            "x": 1227, "y": 580
        }, {
            "x": 1237, "y": 590
        }, {
            "x": 1243, "y": 594
        }, {
            "x": 1257, "y": 600
        }, {
            "x": 1268, "y": 600
        }, {
            "x": 1279, "y": 594
        }, {
            "x": 1283, "y": 592
        }, {
            "x": 1289, "y": 585
        }, {
            "x": 1294, "y": 577
        }, {
            "x": 1295, "y": 571
        }, {
            "x": 1296, "y": 557
        }, {
            "x": 1296, "y": 540
        }, {
            "x": 1288, "y": 521
        }, {
            "x": 1273, "y": 501
        }, {
            "x": 1266, "y": 494
        }, {
            "x": 1250, "y": 478
        }, {
            "x": 1235, "y": 471
        }, {
            "x": 1220, "y": 469
        }, {
            "x": 1214, "y": 469
        }, {
            "x": 1210, "y": 469
        }]
    }]
};
// const exampleMap = {
//     "name": "Map",
//     "creator": "Dimitar Tasev",
//     "createdDate": "2018-03-13T02:00:00Z",
//     "updatedDate": "2018-03-13T03:00:00Z",
//     "downloadedDate": "2018-03-14T05:00:00Z",
//     "terrain": [{
//         "type": "wood",
//         "centerX": 556,
//         "centerY": 376,
//         "points":
//             [{ "x": 566, "y": 279 }, { "x": 566, "y": 279 }, { "x": 564, "y": 283 }, { "x": 563, "y": 286 }, { "x": 562, "y": 289 }, { "x": 561, "y": 293 }, { "x": 558, "y": 302 }, { "x": 554, "y": 314 }, { "x": 552, "y": 325 }, { "x": 552, "y": 330 }, { "x": 551, "y": 339 }, { "x": 550, "y": 347 }, { "x": 550, "y": 351 }, { "x": 549, "y": 360 }, { "x": 549, "y": 370 }, { "x": 548, "y": 380 }, { "x": 548, "y": 384 }, { "x": 547, "y": 390 }, { "x": 547, "y": 397 }, { "x": 547, "y": 406 }, { "x": 547, "y": 409 }, { "x": 547, "y": 419 }, { "x": 547, "y": 430 }, { "x": 547, "y": 438 }, { "x": 547, "y": 443 }, { "x": 547, "y": 453 }, { "x": 547, "y": 459 }, { "x": 547, "y": 465 }, { "x": 547, "y": 466 }, { "x": 548, "y": 468 }, { "x": 548, "y": 469 }, { "x": 549, "y": 469 }, { "x": 550, "y": 469 }, { "x": 553, "y": 469 }, { "x": 555, "y": 469 }, { "x": 556, "y": 468 }, { "x": 558, "y": 466 }, { "x": 559, "y": 462 }, { "x": 561, "y": 457 }, { "x": 561, "y": 453 }, { "x": 564, "y": 442 }, { "x": 565, "y": 428 }, { "x": 565, "y": 415 }, { "x": 566, "y": 404 }, { "x": 566, "y": 394 }, { "x": 566, "y": 382 }, { "x": 566, "y": 369 }, { "x": 566, "y": 361 }, { "x": 566, "y": 350 }, { "x": 566, "y": 340 }, { "x": 566, "y": 335 }, { "x": 566, "y": 333 }, { "x": 566, "y": 329 }, { "x": 566, "y": 325 }, { "x": 566, "y": 322 }, { "x": 566, "y": 320 }, { "x": 566, "y": 316 }, { "x": 566, "y": 312 }, { "x": 566, "y": 308 }, { "x": 566, "y": 306 }, { "x": 566, "y": 304 }, { "x": 566, "y": 302 }, { "x": 566, "y": 300 }, { "x": 566, "y": 297 }, { "x": 567, "y": 293 }, { "x": 567, "y": 291 }, { "x": 567, "y": 290 }, { "x": 567, "y": 288 }, { "x": 567, "y": 287 }, { "x": 567, "y": 286 }, { "x": 567, "y": 285 }, { "x": 567, "y": 284 }]
//     }]
// };