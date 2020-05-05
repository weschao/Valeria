(() => {
    const defines = {};
    const entry = [null];
    function define(name, dependencies, factory) {
        defines[name] = { dependencies, factory };
        entry[0] = name;
    }
    define("require", ["exports"], (exports) => {
        Object.defineProperty(exports, "__cjsModule", { value: true });
        Object.defineProperty(exports, "default", { value: (name) => resolve(name) });
    });
    define("common", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.vm = vm = vm;
        // 3 is red and blue
        // 1 red
        // 2 blue
        // 4 green
        // 8 light
        // 16 dark
        // 32 heart
        // 64 jammer
        // 128 poison
        // 256 mortal poison
        // const COLOR_ORDER = 'rbgldhjpmou';
        const COLORS = [
            'r',
            'b',
            'g',
            'l',
            'd',
            'h',
            'j',
            'p',
            'm',
            'o',
            'u',
        ];
        exports.COLORS = COLORS;
        function idxsFromBits(bits) {
            const idxs = [];
            for (let idx = 0; bits >> idx; idx++) {
                if (bits >> idx & 1) {
                    idxs.push(idx);
                }
            }
            return idxs;
        }
        exports.idxsFromBits = idxsFromBits;
        var Attribute;
        (function (Attribute) {
            Attribute[Attribute["FIRE"] = 0] = "FIRE";
            Attribute[Attribute["WATER"] = 1] = "WATER";
            Attribute[Attribute["WOOD"] = 2] = "WOOD";
            Attribute[Attribute["LIGHT"] = 3] = "LIGHT";
            Attribute[Attribute["DARK"] = 4] = "DARK";
            Attribute[Attribute["NONE"] = -1] = "NONE";
        })(Attribute || (Attribute = {}));
        exports.Attribute = Attribute;
        const AttributeToName = new Map();
        exports.AttributeToName = AttributeToName;
        AttributeToName.set(Attribute.FIRE, 'Fire');
        AttributeToName.set(Attribute.WATER, 'Water');
        AttributeToName.set(Attribute.WOOD, 'Wood');
        AttributeToName.set(Attribute.LIGHT, 'Light');
        AttributeToName.set(Attribute.DARK, 'Dark');
        AttributeToName.set(Attribute.NONE, 'None');
        var MonsterType;
        (function (MonsterType) {
            MonsterType[MonsterType["NONE"] = -1] = "NONE";
            MonsterType[MonsterType["EVO"] = 0] = "EVO";
            MonsterType[MonsterType["BALANCED"] = 1] = "BALANCED";
            MonsterType[MonsterType["PHYSICAL"] = 2] = "PHYSICAL";
            MonsterType[MonsterType["HEALER"] = 3] = "HEALER";
            MonsterType[MonsterType["DRAGON"] = 4] = "DRAGON";
            MonsterType[MonsterType["GOD"] = 5] = "GOD";
            MonsterType[MonsterType["ATTACKER"] = 6] = "ATTACKER";
            MonsterType[MonsterType["DEVIL"] = 7] = "DEVIL";
            MonsterType[MonsterType["MACHINE"] = 8] = "MACHINE";
            MonsterType[MonsterType["AWAKENING"] = 12] = "AWAKENING";
            MonsterType[MonsterType["ENHANCED"] = 14] = "ENHANCED";
            MonsterType[MonsterType["REDEEMABLE"] = 15] = "REDEEMABLE";
            MonsterType[MonsterType["UNKNOWN_1"] = 9] = "UNKNOWN_1";
            MonsterType[MonsterType["UNKNOWN_2"] = 10] = "UNKNOWN_2";
            MonsterType[MonsterType["UNKNOWN_3"] = 11] = "UNKNOWN_3";
            MonsterType[MonsterType["UNKNOWN_4"] = 13] = "UNKNOWN_4";
        })(MonsterType || (MonsterType = {}));
        exports.MonsterType = MonsterType;
        const TypeToName = new Map();
        exports.TypeToName = TypeToName;
        TypeToName.set(MonsterType.EVO, 'Evo');
        TypeToName.set(MonsterType.BALANCED, 'Balanced');
        TypeToName.set(MonsterType.PHYSICAL, 'Physical');
        TypeToName.set(MonsterType.HEALER, 'Healer');
        TypeToName.set(MonsterType.DRAGON, 'Dragon');
        TypeToName.set(MonsterType.GOD, 'God');
        TypeToName.set(MonsterType.ATTACKER, 'Attacker');
        TypeToName.set(MonsterType.DEVIL, 'Devil');
        TypeToName.set(MonsterType.MACHINE, 'Machine');
        TypeToName.set(MonsterType.AWAKENING, 'Awakening');
        TypeToName.set(MonsterType.ENHANCED, 'Enhanced');
        TypeToName.set(MonsterType.REDEEMABLE, 'Redeemable');
        TypeToName.set(MonsterType.NONE, 'None');
        var Latent;
        (function (Latent) {
            Latent[Latent["HP"] = 0] = "HP";
            Latent[Latent["ATK"] = 1] = "ATK";
            Latent[Latent["RCV"] = 2] = "RCV";
            Latent[Latent["TIME"] = 3] = "TIME";
            Latent[Latent["AUTOHEAL"] = 4] = "AUTOHEAL";
            Latent[Latent["RESIST_FIRE"] = 5] = "RESIST_FIRE";
            Latent[Latent["RESIST_WATER"] = 6] = "RESIST_WATER";
            Latent[Latent["RESIST_WOOD"] = 7] = "RESIST_WOOD";
            Latent[Latent["RESIST_LIGHT"] = 8] = "RESIST_LIGHT";
            Latent[Latent["RESIST_DARK"] = 9] = "RESIST_DARK";
            Latent[Latent["SDR"] = 10] = "SDR";
            Latent[Latent["ALL_STATS"] = 11] = "ALL_STATS";
            Latent[Latent["EVO"] = 12] = "EVO";
            Latent[Latent["AWOKEN"] = 13] = "AWOKEN";
            Latent[Latent["ENHANCED"] = 14] = "ENHANCED";
            Latent[Latent["REDEEMABLE"] = 15] = "REDEEMABLE";
            Latent[Latent["GOD"] = 16] = "GOD";
            Latent[Latent["DRAGON"] = 17] = "DRAGON";
            Latent[Latent["DEVIL"] = 18] = "DEVIL";
            Latent[Latent["MACHINE"] = 19] = "MACHINE";
            Latent[Latent["BALANCED"] = 20] = "BALANCED";
            Latent[Latent["ATTACKER"] = 21] = "ATTACKER";
            Latent[Latent["PHYSICAL"] = 22] = "PHYSICAL";
            Latent[Latent["HEALER"] = 23] = "HEALER";
            Latent[Latent["HP_PLUS"] = 24] = "HP_PLUS";
            Latent[Latent["ATK_PLUS"] = 25] = "ATK_PLUS";
            Latent[Latent["RCV_PLUS"] = 26] = "RCV_PLUS";
            Latent[Latent["TIME_PLUS"] = 27] = "TIME_PLUS";
            Latent[Latent["RESIST_FIRE_PLUS"] = 28] = "RESIST_FIRE_PLUS";
            Latent[Latent["RESIST_WATER_PLUS"] = 29] = "RESIST_WATER_PLUS";
            Latent[Latent["RESIST_WOOD_PLUS"] = 30] = "RESIST_WOOD_PLUS";
            Latent[Latent["RESIST_LIGHT_PLUS"] = 31] = "RESIST_LIGHT_PLUS";
            Latent[Latent["RESIST_DARK_PLUS"] = 32] = "RESIST_DARK_PLUS";
        })(Latent || (Latent = {}));
        exports.Latent = Latent;
        ;
        var Awakening;
        (function (Awakening) {
            Awakening[Awakening["HP"] = 1] = "HP";
            Awakening[Awakening["ATK"] = 2] = "ATK";
            Awakening[Awakening["RCV"] = 3] = "RCV";
            Awakening[Awakening["RESIST_FIRE"] = 4] = "RESIST_FIRE";
            Awakening[Awakening["RESIST_WATER"] = 5] = "RESIST_WATER";
            Awakening[Awakening["RESIST_WOOD"] = 6] = "RESIST_WOOD";
            Awakening[Awakening["RESIST_LIGHT"] = 7] = "RESIST_LIGHT";
            Awakening[Awakening["RESIST_DARK"] = 8] = "RESIST_DARK";
            Awakening[Awakening["AUTOHEAL"] = 9] = "AUTOHEAL";
            Awakening[Awakening["RESIST_BIND"] = 10] = "RESIST_BIND";
            Awakening[Awakening["RESIST_BLIND"] = 11] = "RESIST_BLIND";
            Awakening[Awakening["RESIST_JAMMER"] = 12] = "RESIST_JAMMER";
            Awakening[Awakening["RESIST_POISON"] = 13] = "RESIST_POISON";
            Awakening[Awakening["OE_FIRE"] = 14] = "OE_FIRE";
            Awakening[Awakening["OE_WATER"] = 15] = "OE_WATER";
            Awakening[Awakening["OE_WOOD"] = 16] = "OE_WOOD";
            Awakening[Awakening["OE_LIGHT"] = 17] = "OE_LIGHT";
            Awakening[Awakening["OE_DARK"] = 18] = "OE_DARK";
            Awakening[Awakening["TIME"] = 19] = "TIME";
            Awakening[Awakening["RECOVER_BIND"] = 20] = "RECOVER_BIND";
            Awakening[Awakening["SKILL_BOOST"] = 21] = "SKILL_BOOST";
            Awakening[Awakening["ROW_FIRE"] = 22] = "ROW_FIRE";
            Awakening[Awakening["ROW_WATER"] = 23] = "ROW_WATER";
            Awakening[Awakening["ROW_WOOD"] = 24] = "ROW_WOOD";
            Awakening[Awakening["ROW_LIGHT"] = 25] = "ROW_LIGHT";
            Awakening[Awakening["ROW_DARK"] = 26] = "ROW_DARK";
            Awakening[Awakening["TPA"] = 27] = "TPA";
            Awakening[Awakening["SBR"] = 28] = "SBR";
            Awakening[Awakening["OE_HEART"] = 29] = "OE_HEART";
            Awakening[Awakening["MULTIBOOST"] = 30] = "MULTIBOOST";
            Awakening[Awakening["DRAGON"] = 31] = "DRAGON";
            Awakening[Awakening["GOD"] = 32] = "GOD";
            Awakening[Awakening["DEVIL"] = 33] = "DEVIL";
            Awakening[Awakening["MACHINE"] = 34] = "MACHINE";
            Awakening[Awakening["BALANCED"] = 35] = "BALANCED";
            Awakening[Awakening["ATTACKER"] = 36] = "ATTACKER";
            Awakening[Awakening["PHYSICAL"] = 37] = "PHYSICAL";
            Awakening[Awakening["HEALER"] = 38] = "HEALER";
            Awakening[Awakening["EVO"] = 39] = "EVO";
            Awakening[Awakening["AWAKENING"] = 40] = "AWAKENING";
            Awakening[Awakening["ENHANCED"] = 41] = "ENHANCED";
            Awakening[Awakening["REDEEMABLE"] = 42] = "REDEEMABLE";
            Awakening[Awakening["COMBO_7"] = 43] = "COMBO_7";
            Awakening[Awakening["GUARD_BREAK"] = 44] = "GUARD_BREAK";
            Awakening[Awakening["BONUS_ATTACK"] = 45] = "BONUS_ATTACK";
            Awakening[Awakening["TEAM_HP"] = 46] = "TEAM_HP";
            Awakening[Awakening["TEAM_RCV"] = 47] = "TEAM_RCV";
            Awakening[Awakening["VDP"] = 48] = "VDP";
            Awakening[Awakening["AWOKEN_ASSIST"] = 49] = "AWOKEN_ASSIST";
            Awakening[Awakening["BONUS_ATTACK_SUPER"] = 50] = "BONUS_ATTACK_SUPER";
            Awakening[Awakening["SKILL_CHARGE"] = 51] = "SKILL_CHARGE";
            Awakening[Awakening["RESIST_BIND_PLUS"] = 52] = "RESIST_BIND_PLUS";
            Awakening[Awakening["TIME_PLUS"] = 53] = "TIME_PLUS";
            Awakening[Awakening["RESIST_CLOUD"] = 54] = "RESIST_CLOUD";
            Awakening[Awakening["RESIST_TAPE"] = 55] = "RESIST_TAPE";
            Awakening[Awakening["SKILL_BOOST_PLUS"] = 56] = "SKILL_BOOST_PLUS";
            Awakening[Awakening["HP_GREATER"] = 57] = "HP_GREATER";
            Awakening[Awakening["HP_LESSER"] = 58] = "HP_LESSER";
            Awakening[Awakening["L_GUARD"] = 59] = "L_GUARD";
            Awakening[Awakening["L_UNLOCK"] = 60] = "L_UNLOCK";
            Awakening[Awakening["COMBO_10"] = 61] = "COMBO_10";
            Awakening[Awakening["COMBO_ORB"] = 62] = "COMBO_ORB";
            Awakening[Awakening["VOICE"] = 63] = "VOICE";
            Awakening[Awakening["SOLOBOOST"] = 64] = "SOLOBOOST";
            Awakening[Awakening["HP_MINUS"] = 65] = "HP_MINUS";
            Awakening[Awakening["ATK_MINUS"] = 66] = "ATK_MINUS";
            Awakening[Awakening["RCV_MINUS"] = 67] = "RCV_MINUS";
            Awakening[Awakening["RESIST_BLIND_PLUS"] = 68] = "RESIST_BLIND_PLUS";
            Awakening[Awakening["RESIST_POISON_PLUS"] = 69] = "RESIST_POISON_PLUS";
            Awakening[Awakening["RESIST_JAMMER_PLUS"] = 70] = "RESIST_JAMMER_PLUS";
            Awakening[Awakening["JAMMER_BOOST"] = 71] = "JAMMER_BOOST";
            Awakening[Awakening["POISON_BOOST"] = 72] = "POISON_BOOST";
        })(Awakening || (Awakening = {}));
        exports.Awakening = Awakening;
        ;
        const AwakeningToPlusAwakening = new Map([
            [Awakening.SKILL_BOOST, Awakening.SKILL_BOOST_PLUS],
            [Awakening.TIME, Awakening.TIME_PLUS],
            [Awakening.RESIST_BIND, Awakening.RESIST_BIND_PLUS],
            [Awakening.RESIST_BLIND, Awakening.RESIST_BLIND_PLUS],
            [Awakening.RESIST_POISON, Awakening.RESIST_POISON_PLUS],
        ]);
        exports.AwakeningToPlusAwakening = AwakeningToPlusAwakening;
        const PlusAwakeningMultiplier = new Map();
        exports.PlusAwakeningMultiplier = PlusAwakeningMultiplier;
        PlusAwakeningMultiplier.set(Awakening.SKILL_BOOST_PLUS, 2);
        PlusAwakeningMultiplier.set(Awakening.TIME_PLUS, 2);
        PlusAwakeningMultiplier.set(Awakening.RESIST_BIND_PLUS, 2);
        PlusAwakeningMultiplier.set(Awakening.RESIST_BLIND_PLUS, 5);
        PlusAwakeningMultiplier.set(Awakening.RESIST_JAMMER_PLUS, 5);
        PlusAwakeningMultiplier.set(Awakening.RESIST_POISON_PLUS, 5);
        const AwakeningToName = [
            'NULL',
            'HP', 'ATK', 'RCV', 'Resist Fire', 'Resist Water', 'Resist Wood', 'Resist Light', 'Resist Dark',
            'Autoheal', 'Resist Bind', 'Resist Blind', 'Resist Jammer', 'Resist Poison',
            'Fire OE', 'Water OE', 'Wood OE', 'Light OE', 'Dark OE',
            'Time',
            'Recover Bind',
            'Skill Boost',
            'Fire Row', 'Water Row', 'Wood Row', 'Light Row', 'Dark Row',
            'TPA', 'Skill-Bind Resist', 'Heart OE', 'Multiboost',
            'Dragon Killer', 'God Killer', 'Devil Killer', 'Machine Killer',
            'Balanced Killer', 'Attacker Killer', 'Physical Killer', 'Healer Killer',
            'Evo Killer', 'Awakening Killer', 'Enhanced Killer', 'Redeemable Killer',
            'Enhanced Combo', 'Guard Break', 'Bonus Attack', 'Team HP+', 'Team RCV+',
            'Damage Void Piercer', 'Awoken Assist', 'Super Bonus Attack', 'Skill Charge',
            'Resist Bind+', 'Time+', 'Resist Cloud', 'Resist Immobility', 'Skill Boost+',
            '>=80% Enhace', '<=50% Enhance', 'L-Guard', 'L-Unlock', 'Enhanced Combo+',
            'Combo Orb', 'Voice', 'Soloboost', 'HP-', 'ATK-', 'RCV-',
            'Resist Blind+', 'Resist Poison+', 'Resist Jammer+',
            'Jammer Blessing', 'Poison Blessing',
        ];
        exports.AwakeningToName = AwakeningToName;
        const Round = {
            UP: Math.ceil,
            DOWN: Math.floor,
            NEAREST: Math.round,
            NONE: (a) => a,
        };
        exports.Round = Round;
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        exports.numberWithCommas = numberWithCommas;
        const DEFAULT_CARD = {
            id: 0,
            name: 'sdr',
            maxLevel: 1,
            awakenings: [],
            attribute: -1,
            subattribute: -1,
            superAwakenings: [],
            latentKillers: [],
            minHp: 0,
            maxHp: 0,
            hpGrowth: 1,
            minAtk: 0,
            maxAtk: 0,
            atkGrowth: 1,
            minRcv: 0,
            maxRcv: 0,
            rcvGrowth: 1,
            isLimitBreakable: false,
            limitBreakStatGain: 0,
            types: [],
            unknownData: [0, 0, 0, 0, 0, 0, 0],
            evoTreeBaseId: 0,
            collab: 0,
            leaderSkillId: 0,
            activeSkillId: 0,
            inheritanceType: 0,
            enemyAtkAtLv1: 1,
            enemyAtkAtLv10: 1,
            enemyAtkCurve: 1,
            enemyHpAtLv1: 1,
            enemyHpAtLv10: 1,
            enemyHpCurve: 1,
            enemyDefAtLv1: 1,
            enemyDefAtLv10: 1,
            enemyDefCurve: 1,
            enemySkills: [],
            monsterPoints: 0,
        };
        exports.DEFAULT_CARD = DEFAULT_CARD;
        const LatentSuper = new Set([
            Latent.EVO, Latent.AWOKEN, Latent.ENHANCED, Latent.REDEEMABLE,
            Latent.GOD, Latent.DRAGON, Latent.DEVIL, Latent.MACHINE,
            Latent.BALANCED, Latent.ATTACKER, Latent.PHYSICAL, Latent.HEALER,
            Latent.ALL_STATS, Latent.HP_PLUS, Latent.ATK_PLUS,
            Latent.RCV_PLUS, Latent.TIME_PLUS,
            Latent.RESIST_FIRE_PLUS, Latent.RESIST_WATER_PLUS, Latent.RESIST_WOOD_PLUS,
            Latent.RESIST_LIGHT_PLUS, Latent.RESIST_DARK_PLUS,
        ]);
        exports.LatentSuper = LatentSuper;
        var Shape;
        (function (Shape) {
            Shape[Shape["AMORPHOUS"] = 0] = "AMORPHOUS";
            Shape[Shape["L"] = 1] = "L";
            Shape[Shape["COLUMN"] = 2] = "COLUMN";
            Shape[Shape["CROSS"] = 3] = "CROSS";
            Shape[Shape["BOX"] = 4] = "BOX";
            Shape[Shape["ROW"] = 5] = "ROW";
        })(Shape || (Shape = {}));
        exports.Shape = Shape;
        ;
        const LetterToShape = {
            'A': Shape.AMORPHOUS,
            'L': Shape.L,
            'C': Shape.COLUMN,
            'X': Shape.CROSS,
            'B': Shape.BOX,
            'R': Shape.ROW,
        };
        exports.LetterToShape = LetterToShape;
        const ShapeToLetter = {
            0: 'A',
            1: 'L',
            2: 'C',
            3: 'X',
            4: 'B',
            5: 'R',
        };
        exports.ShapeToLetter = ShapeToLetter;
        const BASE_URL = document.getElementById('valeria-referenceable-img').src.replace('assets/UIPAT1.PNG', '');
        exports.BASE_URL = BASE_URL;
    });
    define("fuzzy_search", ["require", "exports", "common"], function (require, exports, common_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        const prefixToCardIds = {};
        let prioritizedEnemySearch = [];
        exports.prioritizedEnemySearch = prioritizedEnemySearch;
        let prioritizedMonsterSearch = [];
        exports.prioritizedMonsterSearch = prioritizedMonsterSearch;
        let prioritizedInheritSearch = [];
        exports.prioritizedInheritSearch = prioritizedInheritSearch;
        const LOW_PRIORITY_SUBSTRING = [
            ' disguise',
        ];
        function isLowPriority(s) {
            return LOW_PRIORITY_SUBSTRING.some((badSubstring) => {
                return s.toLowerCase().includes(badSubstring);
            });
        }
        function SearchInit() {
            const ids = Object.keys(vm.model.cards).map((id) => Number(id));
            exports.prioritizedEnemySearch = prioritizedEnemySearch = ids.map((id) => vm.model.cards[id]).reverse();
            exports.prioritizedMonsterSearch = prioritizedMonsterSearch = ids.map((id) => vm.model.cards[id]).filter((card) => {
                return card.id < 100000;
            }).sort((card1, card2) => {
                if (isLowPriority(card1.name) != isLowPriority(card2.name)) {
                    return isLowPriority(card2.name) ? -1 : 1;
                }
                // First throw all equips towards the end.
                if (card1.awakenings[0] != card2.awakenings[0]) {
                    if (card2.awakenings[0] == common_1.Awakening.AWOKEN_ASSIST) {
                        return -1;
                    }
                    if (card1.awakenings[0] == common_1.Awakening.AWOKEN_ASSIST) {
                        return 1;
                    }
                }
                if (card2.monsterPoints != card1.monsterPoints) {
                    return card2.monsterPoints - card1.monsterPoints;
                }
                return card2.id - card1.id;
            });
            exports.prioritizedInheritSearch = prioritizedInheritSearch = prioritizedMonsterSearch.filter((card) => {
                // inheritanceType is defined with the flag &1..
                return Boolean(card);
            }).sort((card1, card2) => {
                if (card1.awakenings[0] != card2.awakenings[0]) {
                    if (card1.awakenings[0] == common_1.Awakening.AWOKEN_ASSIST) {
                        return -1;
                    }
                    if (card2.awakenings[0] == common_1.Awakening.AWOKEN_ASSIST) {
                        return 1;
                    }
                }
                // if (card2.monsterPoints != card1.monsterPoints) {
                //   return card2.monsterPoints - card1.monsterPoints;
                // }
                return card2.id - card1.id;
            });
            for (const group of vm.model.cardGroups) {
                for (const alias of group.aliases.filter((alias) => alias.indexOf(' ') == -1 && alias == alias.toLowerCase())) {
                    prefixToCardIds[alias] = group.cards;
                    if (alias == 'halloween') {
                        prefixToCardIds['h'] = group.cards;
                    }
                }
            }
        }
        exports.SearchInit = SearchInit;
        /**
         * Given text, finds the top maxResults monster IDs that match
         * the text in priority order:
         * 1) Exact ID
         * 2) Name Contains Substring
         *    a) Priotize where substrings are at the beginning or follow a space.
         * 4) Fuzzily matches (All letters are present in order in name)
         *    a) Prioritizes consecutive letters.
         * @param text
         * @param maxResults
         * @param searchArray
         * @param filtered
         */
        function fuzzyMonsterSearch(text, maxResults = 15, searchArray = undefined, filtered = false) {
            if (!text || text == '-1') {
                return [-1];
            }
            searchArray = searchArray || prioritizedMonsterSearch;
            text = text.toLowerCase();
            let toEquip = false;
            let toBase = false;
            if (text.startsWith('equip')) {
                text = text.substring('equip'.length).trim();
                toEquip = true;
            }
            else if (text.startsWith('base')) {
                text = text.substring('base'.length).trim();
                toBase = true;
            }
            else if (text.startsWith('revo')) {
                text = text.replace('revo', 'reincarnated');
            }
            else if (text.startsWith('srevo')) {
                text = text.replace('srevo', 'super reincarnated');
            }
            const result = [];
            // Test for exact match.
            if (text in vm.model.cards) {
                result.push(Number(text));
            }
            let lowerPriority = [];
            let lowestPriority = [];
            // Search for monsters whose substrings work.
            for (const card of searchArray) {
                if (result.length >= maxResults) {
                    break;
                }
                const idx = card.name.toLowerCase().indexOf(text);
                if (idx < 0) {
                    continue;
                }
                if (idx == 0 || card.name[idx - 1] == ' ') {
                    if (idx + text.length == card.name.length || card.name[idx + text.length] == ' ') {
                        result.push(card.id);
                    }
                    else {
                        lowerPriority.push(card.id);
                    }
                }
                else {
                    lowestPriority.push(card.id);
                }
            }
            for (const id of lowerPriority) {
                if (result.length < maxResults) {
                    result.push(id);
                }
            }
            for (const id of lowestPriority) {
                if (result.length < maxResults) {
                    result.push(id);
                }
            }
            if (!filtered && result.length < maxResults) {
                let collabMatches = [];
                for (const prefix in prefixToCardIds) {
                    if (text.startsWith(prefix)) {
                        for (const match of fuzzyMonsterSearch(text.substring(prefix.length).trim(), maxResults, searchArray.filter((card) => prefixToCardIds[prefix].some((id) => id == card.id)))) {
                            if (!collabMatches.some((m) => m == match)) {
                                collabMatches.push(match);
                            }
                        }
                    }
                }
                for (const match of collabMatches) {
                    if (result.length < maxResults && !result.some((id) => id == match)) {
                        result.push(match);
                    }
                }
                const attributes = {
                    'r': 0, 'b': 1, 'g': 2, 'l': 3, 'd': 4, 'x': -1,
                };
                let attribute = -1;
                let subattribute = -2;
                let attributeText = '';
                let subattributeText = '';
                if (text.length > 2 && text[0] in attributes) {
                    attribute = attributes[text[0]];
                    attributeText = text.substring(1).trim();
                    if (attributeText.length > 2 && attributeText[0] in attributes) {
                        subattribute = attributes[attributeText[0]];
                        subattributeText = attributeText.substring(1).trim();
                    }
                }
                if (subattributeText) {
                    const filteredSub = searchArray.filter((card) => card.attribute == attribute && card.subattribute == subattribute);
                    const matches = fuzzyMonsterSearch(subattributeText, maxResults, filteredSub, true);
                    for (const match of matches) {
                        if (result.length < maxResults && !result.some((id) => id == match)) {
                            result.push(match);
                        }
                    }
                }
                if (attributeText) {
                    const filteredAttr = searchArray.filter((card) => card.attribute == attribute);
                    const matches = fuzzyMonsterSearch(attributeText, maxResults, filteredAttr, true);
                    for (const match of matches) {
                        if (result.length < maxResults && !result.some((id) => id == match)) {
                            result.push(match);
                        }
                    }
                }
            }
            lowerPriority.length = 0;
            let scoredPriority = [];
            // Fuzzy match with the name.
            // This prioritizes values with consecutive letters.
            for (const card of searchArray) {
                if (result.length >= maxResults) {
                    break;
                }
                if (result.some((id) => id == card.id)) {
                    continue;
                }
                const name = card.name.toLowerCase();
                let currentStringIdx = -1;
                let score = 0;
                let scoreDelta = 1;
                for (const c of text) {
                    const nextIdx = name.indexOf(c, currentStringIdx + 1);
                    if (nextIdx == currentStringIdx + 1) {
                        scoreDelta *= 2;
                    }
                    else {
                        scoreDelta = 1;
                    }
                    score += scoreDelta;
                    currentStringIdx = nextIdx;
                    if (currentStringIdx < 0) {
                        break;
                    }
                }
                if (currentStringIdx >= 0) {
                    scoredPriority.push([card.id, score]);
                    continue;
                }
            }
            scoredPriority.sort((a, b) => b[1] - a[1]);
            for (const match of scoredPriority) {
                if (result.length > maxResults) {
                    break;
                }
                result.push(match[0]);
            }
            if (toEquip) {
                let equips = [];
                for (const id of result) {
                    const treeId = vm.model.cards[id].evoTreeBaseId;
                    if (treeId in vm.model.evoTrees) {
                        for (const card of vm.model.evoTrees[treeId].cards) {
                            if (!equips.some((id) => id == card.id) && card.awakenings[0] == common_1.Awakening.AWOKEN_ASSIST) {
                                equips.push(card.id);
                            }
                        }
                    }
                }
                for (const id of result) {
                    if (!equips.some((i) => i == id)) {
                        equips.push(id);
                    }
                }
                if (equips.length > maxResults) {
                    equips.length = maxResults;
                }
                result.length = 0;
                for (const id of equips) {
                    result.push(id);
                }
            }
            if (toBase) {
                let bases = result.map((id) => vm.model.cards[id].evoTreeBaseId);
                const seen = new Set();
                result.length = 0;
                for (const id of bases) {
                    if (seen.has(id)) {
                        continue;
                    }
                    seen.add(id);
                    result.push(id);
                }
            }
            if (!result.length) {
                return [-1];
            }
            return result;
        }
        exports.fuzzyMonsterSearch = fuzzyMonsterSearch;
        function fuzzySearch(text, maxResults = 15, searchArray) {
            if (!text) {
                return [];
            }
            text = text.toLowerCase();
            const result = [];
            for (const { s, value } of searchArray) {
                if (s == text) {
                    result.push(value);
                }
            }
            for (const { s, value } of searchArray) {
                if (text.includes(s) && !result.includes(value)) {
                    result.push(value);
                }
            }
            let scoredPriority = [];
            // Fuzzy match with the name.
            // This prioritizes values with consecutive letters.
            for (const { s, value } of searchArray) {
                if (result.length >= maxResults) {
                    break;
                }
                if (result.includes(value)) {
                    continue;
                }
                const name = s.toLowerCase();
                let currentStringIdx = -1;
                let score = 0;
                let scoreDelta = 1;
                for (const c of text) {
                    const nextIdx = name.indexOf(c, currentStringIdx + 1);
                    if (nextIdx == currentStringIdx + 1) {
                        scoreDelta *= 2;
                    }
                    else {
                        scoreDelta = 1;
                    }
                    score += scoreDelta;
                    currentStringIdx = nextIdx;
                    if (currentStringIdx < 0) {
                        break;
                    }
                }
                if (currentStringIdx >= 0) {
                    scoredPriority.push({ value, score });
                    continue;
                }
            }
            scoredPriority.sort((a, b) => b.score - a.score);
            for (const match of scoredPriority) {
                if (result.length > maxResults) {
                    break;
                }
                if (!result.includes(match.value)) {
                    result.push(match.value);
                }
            }
            return result;
        }
        exports.fuzzySearch = fuzzySearch;
    });
    /**
     * Rendering tools for other classes to reference.
     * These take relatively pure data and update that way.
     * TODO: Split this into files corresponding to the classes they are templated
     * for.
     * TODO: Consider making some of these into proper soy templates and then
     * compiling them here so that the structure is more consistent.
     */
    define("templates", ["require", "exports", "common", "fuzzy_search"], function (require, exports, common_2, fuzzy_search_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        function create(tag, cls = '') {
            const el = document.createElement(tag);
            if (cls) {
                el.className = cls;
            }
            return el;
        }
        exports.create = create;
        var ClassNames;
        (function (ClassNames) {
            ClassNames["HALF_OPACITY"] = "valeria-half-opacity";
            ClassNames["MONSTER_TYPE"] = "valeria-monster-type";
            ClassNames["LAYERED_ASSET"] = "valeria-layered-asset";
            ClassNames["ICON"] = "valeria-monster-icon";
            ClassNames["ICON_SELECTED"] = "valeria-monster-icon-selected";
            ClassNames["ICON_ATTR"] = "valeria-monster-icon-attribute";
            ClassNames["ICON_SUB"] = "valeria-monster-icon-subattribute";
            ClassNames["ICON_INFO"] = "valeria-monster-icon-info";
            ClassNames["ICON_PLUS"] = "valeria-monster-icon-plus";
            ClassNames["ICON_AWAKE"] = "valeria-monster-icon-awakening";
            ClassNames["ICON_SUPER"] = "valeria-monster-icon-sa";
            ClassNames["ICON_LEVEL"] = "valeria-monster-icon-level";
            ClassNames["ICON_ID"] = "valeria-monster-icon-id";
            ClassNames["INHERIT"] = "valeria-monster-inherit";
            ClassNames["INHERIT_ICON"] = "valeria-monster-inherit-icon";
            ClassNames["INHERIT_ATTR"] = "valeria-monster-inherit-attribute";
            ClassNames["INHERIT_SUB"] = "valeria-monster-inherit-subattribute";
            ClassNames["INHERIT_ID"] = "valeria-monster-inherit-id";
            ClassNames["INHERIT_LEVEL"] = "valeria-monster-inherit-level";
            ClassNames["INHERIT_PLUS"] = "valeria-monster-inherit-plus";
            ClassNames["MONSTER_LATENTS"] = "valeria-monster-latents";
            ClassNames["MONSTER_LATENT"] = "valeria-monster-latent";
            ClassNames["MONSTER_LATENT_SUPER"] = "valeria-monster-latent-super";
            ClassNames["COMBO_EDITOR"] = "valeria-combo-editor";
            ClassNames["COMBO_COMMAND"] = "valeria-combo-command";
            ClassNames["COMBO_TABLE"] = "valeria-combo-table";
            ClassNames["TABBED"] = "valeria-tabbed";
            ClassNames["TABBED_LABEL"] = "valeria-tabbed-label";
            ClassNames["TABBED_LABelSELECTED"] = "valeria-tabbed-label-selected";
            ClassNames["TABBED_TAB"] = "valeria-tabbed-tab";
            ClassNames["TABBED_TAB_SELECTED"] = "valeria-tabbed-tab-selected";
            ClassNames["TEAM_STORAGE"] = "valeria-team-storage";
            ClassNames["TEAM_STORAGE_SAVE"] = "valeria-team-storage-save";
            ClassNames["TEAM_STORAGE_LOAD_AREA"] = "valeria-team-load-area";
            ClassNames["TEAM_STORAGE_LOAD_ACTIVE"] = "valeria-team-load-active";
            ClassNames["TEAM_STORAGE_LOAD_INACTIVE"] = "valeria-team-load-inactive";
            ClassNames["STAT_TABLE"] = "valeria-team-stat-table";
            ClassNames["STAT_LABEL"] = "valeria-team-stat-label";
            ClassNames["STAT_VALUE"] = "valeria-team-stat-value";
            ClassNames["TEAM_CONTAINER"] = "valeria-team-container";
            ClassNames["MONSTER_CONTAINER"] = "valeria-monster-container";
            ClassNames["MONSTER_CONTAINER_SELECTED"] = "valeria-monster-container-selected";
            ClassNames["TEAM_TITLE"] = "valeria-team-title";
            ClassNames["TEAM_DESCRIPTION"] = "valeria-team-description";
            ClassNames["MONSTER_SELECTOR"] = "valeria-monster-selector";
            ClassNames["SELECTOR_OPTIONS_CONTAINER"] = "valeria-monster-selector-options-container";
            ClassNames["SELECTOR_OPTIONS_INACTIVE"] = "valeria-monster-selector-options-inactive";
            ClassNames["SELECTOR_OPTIONS_ACTIVE"] = "valeria-monster-selector-options-active";
            ClassNames["SELECTOR_OPTION_INACTIVE"] = "valeria-monster-selector-option-inactive";
            ClassNames["SELECTOR_OPTION_ACTIVE"] = "valeria-monster-selector-option-active";
            ClassNames["MONSTER_EDITOR"] = "valeria-monster-editor";
            ClassNames["PDCHU_IO"] = "valeria-pdchu-io";
            ClassNames["LEVelEDITOR"] = "valeria-level-editor";
            ClassNames["LEVelINPUT"] = "valeria-level-input";
            ClassNames["PLUS_EDITOR"] = "valeria-plus-editor";
            ClassNames["AWAKENING"] = "valeria-monster-awakening";
            ClassNames["AWAKENING_SUPER"] = "valeria-monster-awakening-super";
            ClassNames["ENEMY_PICTURE"] = "valeria-enemy-picture-container";
            ClassNames["DUNGEON_EDITOR_FLOORS"] = "valeria-dungeon-edit-floors";
            ClassNames["FLOOR_NAME"] = "valeria-floor-name";
            ClassNames["FLOOR_CONTAINER"] = "valeria-floor-container";
            ClassNames["FLOOR_ADD"] = "valeria-floor-add";
            ClassNames["FLOOR_DELETE"] = "valeria-floor-delete";
            ClassNames["FLOOR_ENEMIES"] = "valeria-floor-enemies";
            ClassNames["FLOOR_ENEMY"] = "valeria-floor-enemy";
            ClassNames["FLOOR_ENEMY_ADD"] = "valeria-floor-enemy-add";
            ClassNames["FLOOR_ENEMY_DELETE"] = "valeria-floor-delete";
            ClassNames["VALERIA"] = "valeria";
        })(ClassNames || (ClassNames = {}));
        exports.ClassNames = ClassNames;
        var Ids;
        (function (Ids) {
            Ids["COMBO_TABLE_PREFIX"] = "valeria-combo-table-";
        })(Ids || (Ids = {}));
        const TEAM_SCALING = 0.6;
        // const AWAKENING_NUMBERS = '0123456789';
        // const MONSTER_AWAKENING_SCALE = 0.43;
        function show(el) {
            el.style.visibility = 'visible';
        }
        function hide(el) {
            el.style.visibility = 'hidden';
        }
        function superShow(el) {
            el.style.display = '';
            show(el);
        }
        function superHide(el) {
            el.style.display = 'none';
            hide(el);
        }
        function getAwakeningOffsets(awakeningNumber) {
            const result = [0, -324];
            if (awakeningNumber < 0 || awakeningNumber > 81) {
                console.warn('Invalid awakening, returning unknown.');
                return result;
            }
            result[0] -= (awakeningNumber % 11) * 36;
            result[1] -= Math.floor(awakeningNumber / 11) * 36;
            return result;
        }
        function updateAwakening(el, awakening, scale, unavailableReason = '') {
            const [x, y] = getAwakeningOffsets(awakening);
            el.style.backgroundPosition = `${x * scale}px ${y * scale}px`;
            el.style.opacity = `${unavailableReason ? 0.5 : 1}`;
            el.title = unavailableReason;
        }
        class MonsterIcon {
            constructor(hideInfoTable = false) {
                this.element = create('a', ClassNames.ICON);
                this.attributeEl = create('a', ClassNames.ICON_ATTR);
                this.subattributeEl = create('a', ClassNames.ICON_SUB);
                this.infoTable = create('table', ClassNames.ICON_INFO);
                this.hideInfoTable = false;
                this.id = -1;
                this.hideInfoTable = hideInfoTable;
                if (this.hideInfoTable) {
                    hide(this.infoTable);
                }
                const classNames = [
                    ClassNames.ICON_PLUS, ClassNames.ICON_AWAKE,
                    '', ClassNames.ICON_SUPER,
                    ClassNames.ICON_LEVEL, ClassNames.ICON_ID
                ];
                for (let i = 0; i < 3; i++) {
                    const row = create('tr');
                    for (let j = 0; j < 2; j++) {
                        const cell = create('td');
                        const className = classNames[i * 2 + j];
                        if (className) {
                            let el = create('div', className);
                            if (className == ClassNames.ICON_SUPER) {
                                el = create('a', className);
                            }
                            cell.appendChild(el);
                        }
                        row.appendChild(cell);
                    }
                    this.infoTable.appendChild(row);
                }
                this.element.appendChild(this.attributeEl);
                this.attributeEl.appendChild(this.subattributeEl);
                this.element.appendChild(this.infoTable);
            }
            getElement() {
                return this.element;
            }
            update(id, plusses, awakening, superAwakeningIdx, unavailableReason, level) {
                this.id = id;
                if (id == -1) {
                    hide(this.element);
                    hide(this.attributeEl);
                    hide(this.subattributeEl);
                    hide(this.infoTable);
                    return;
                }
                show(this.element);
                show(this.infoTable);
                const card = vm.model.cards[id] || common_2.DEFAULT_CARD;
                const descriptor = CardAssets.getIconImageData(card);
                if (descriptor) {
                    this.element.style.backgroundSize = `${TEAM_SCALING * descriptor.baseWidth}px ${descriptor.baseHeight * TEAM_SCALING}px`;
                    this.element.style.backgroundImage = `url(${descriptor.url})`;
                    this.element.style.backgroundPosition = `-${descriptor.offsetX * TEAM_SCALING}px -${descriptor.offsetY * TEAM_SCALING}`;
                }
                const attrDescriptor = CardUiAssets.getIconFrame(card.attribute, false, vm);
                if (attrDescriptor) {
                    show(this.attributeEl);
                    this.attributeEl.style.backgroundImage = `url(${attrDescriptor.url})`;
                    this.attributeEl.style.backgroundPosition = `-${attrDescriptor.offsetX * TEAM_SCALING}px -${attrDescriptor.offsetY * TEAM_SCALING}px`;
                }
                else {
                    hide(this.attributeEl);
                }
                const subDescriptor = CardUiAssets.getIconFrame(card.subattribute, true, vm);
                if (subDescriptor) {
                    show(this.subattributeEl);
                    this.subattributeEl.style.backgroundImage = `url(${subDescriptor.url})`;
                    this.subattributeEl.style.backgroundPosition = `-${subDescriptor.offsetX * TEAM_SCALING}px -${subDescriptor.offsetY * TEAM_SCALING}px`;
                }
                else {
                    hide(this.subattributeEl);
                }
                const plusEl = this.element.getElementsByClassName(ClassNames.ICON_PLUS)[0];
                if (plusses) {
                    show(plusEl);
                    plusEl.innerText = `+${plusses}`;
                }
                else {
                    hide(plusEl);
                }
                const awakeningEl = this.element.getElementsByClassName(ClassNames.ICON_AWAKE)[0];
                if (awakening != 0) {
                    show(awakeningEl);
                    awakeningEl.innerText = `(${awakening})`;
                }
                else {
                    hide(awakeningEl);
                }
                const superAwakeningEl = this.element.getElementsByClassName(ClassNames.ICON_SUPER)[0];
                if (superAwakeningIdx >= 0) {
                    show(superAwakeningEl);
                    updateAwakening(superAwakeningEl, card.superAwakenings[superAwakeningIdx], 0.5, unavailableReason);
                }
                else {
                    hide(superAwakeningEl);
                }
                const levelEl = this.element.getElementsByClassName(ClassNames.ICON_LEVEL)[0];
                levelEl.innerText = `Lv${level}`;
                const idEl = this.element.getElementsByClassName(ClassNames.ICON_ID)[0];
                idEl.innerText = `${id}`;
            }
        }
        exports.MonsterIcon = MonsterIcon;
        class MonsterInherit {
            constructor() {
                this.element = create('table', ClassNames.INHERIT);
                const row = create('tr');
                const iconCell = create('td');
                this.icon = create('a', ClassNames.INHERIT_ICON);
                this.attr = create('a', ClassNames.INHERIT_ATTR);
                this.icon.appendChild(this.attr);
                this.sub = create('a', ClassNames.INHERIT_SUB);
                this.attr.appendChild(this.sub);
                iconCell.appendChild(this.icon);
                row.appendChild(iconCell);
                const detailCell = create('td');
                this.idEl = create('div', ClassNames.INHERIT_ID);
                detailCell.appendChild(this.idEl);
                detailCell.appendChild(create('br'));
                this.levelEl = create('div', ClassNames.INHERIT_LEVEL);
                detailCell.appendChild(this.levelEl);
                detailCell.appendChild(create('br'));
                this.plusEl = create('div', ClassNames.INHERIT_PLUS);
                detailCell.appendChild(this.plusEl);
                row.appendChild(detailCell);
                this.element.appendChild(row);
            }
            getElement() {
                return this.element;
            }
            update(id, level, plussed) {
                if (id == -1) {
                    hide(this.element);
                    hide(this.icon);
                    hide(this.attr);
                    hide(this.sub);
                    hide(this.idEl);
                    hide(this.levelEl);
                    hide(this.plusEl);
                    return;
                }
                const card = vm.model.cards[id] || common_2.DEFAULT_CARD;
                const desInherit = CardAssets.getIconImageData(card);
                if (desInherit) {
                    show(this.icon);
                    this.icon.style.backgroundImage = `url(${desInherit.url})`;
                    this.icon.style.backgroundSize = `${desInherit.baseWidth / 2 * TEAM_SCALING}px ${desInherit.baseHeight / 2 * TEAM_SCALING}px`;
                    this.icon.style.backgroundPosition = `-${desInherit.offsetX / 2 * TEAM_SCALING}px -${desInherit.offsetY / 2 * TEAM_SCALING}px`;
                }
                else {
                    hide(this.icon);
                }
                const desAttr = CardUiAssets.getIconFrame(card.attribute, false, vm);
                if (desAttr) {
                    show(this.attr);
                    this.attr.style.backgroundImage = `url(${desAttr.url})`;
                    this.attr.style.backgroundPosition = `-${desAttr.offsetX / 2 * TEAM_SCALING}px -${desAttr.offsetY / 2 * TEAM_SCALING}px`;
                }
                else {
                    hide(this.attr);
                }
                const desSub = CardUiAssets.getIconFrame(card.subattribute, true, vm);
                if (desSub) {
                    show(this.attr);
                    this.sub.style.backgroundImage = `url(${desSub.url})`;
                    this.sub.style.backgroundPosition = `-${desSub.offsetX / 2 * TEAM_SCALING}px -${desSub.offsetY / 2 * TEAM_SCALING}px`;
                }
                else {
                    hide(this.sub);
                }
                show(this.idEl);
                show(this.levelEl);
                show(this.plusEl);
                this.idEl.innerText = `${id}`;
                this.levelEl.innerText = `Lv${level}`;
                this.plusEl.innerText = plussed ? '+297' : '+0';
            }
        }
        exports.MonsterInherit = MonsterInherit;
        class MonsterLatent {
            constructor() {
                this.el = create('div', ClassNames.MONSTER_LATENTS);
                this.latentEls = [];
                for (let i = 0; i < 6; i++) {
                    const latentEl = create('a', ClassNames.MONSTER_LATENT);
                    this.latentEls.push(latentEl);
                    this.el.appendChild(latentEl);
                }
            }
            getElement() {
                return this.el;
            }
            update(latents) {
                const scale = TEAM_SCALING * 0.43;
                for (let i = 0; i < 6; i++) {
                    if (i >= latents.length) {
                        hide(this.latentEls[i]);
                        continue;
                    }
                    show(this.latentEls[i]);
                    let offsetX;
                    let offsetY;
                    if (latents[i] < 11) {
                        offsetX = (latents[i] * 36) * scale;
                        offsetY = 36 * scale;
                        this.latentEls[i].className = ClassNames.MONSTER_LATENT;
                    }
                    else {
                        const idx = latents[i] - 11;
                        offsetX = ((idx % 5) * 80 + 2) * scale;
                        offsetY = (Math.floor(idx / 5) + 2) * 36 * scale;
                        this.latentEls[i].className = ClassNames.MONSTER_LATENT_SUPER;
                    }
                    this.latentEls[i].style.backgroundPosition = `-${offsetX}px -${offsetY}px`;
                }
            }
        }
        exports.MonsterLatent = MonsterLatent;
        class ComboEditor {
            constructor() {
                this.element = create('div', ClassNames.COMBO_EDITOR);
                this.commandInput = create('input', ClassNames.COMBO_COMMAND);
                this.commandInput.placeholder = 'Combo Commands';
                this.element.appendChild(this.commandInput);
                this.colorTables = {};
                for (const c of common_2.COLORS) {
                    const colorTable = create('table', ClassNames.COMBO_TABLE);
                    colorTable.id = Ids.COMBO_TABLE_PREFIX + c;
                    const headerRow = create('tr');
                    const countRow = create('tr');
                    const enhanceRow = create('tr');
                    for (let i = -1; i < ComboEditor.maxVisibleCombos; i++) {
                        const headerCell = create('th');
                        const countCell = create('td');
                        const enhanceCell = create('td');
                        if (i == -1) {
                            headerCell.innerText = c.toUpperCase();
                            countCell.innerText = '#';
                            enhanceCell.innerText = '+';
                        }
                        else {
                            headerCell.innerText = `${i}`;
                            const countInput = create('input');
                            countInput.id = `valeria-combo-count-${c}-${i}`;
                            countInput.value = '';
                            countCell.appendChild(countInput);
                            const enhanceInput = create('input');
                            enhanceInput.id = `valeria-combo-enhance-${c}-${i}`;
                            enhanceInput.value = '';
                            enhanceCell.appendChild(enhanceInput);
                        }
                        headerRow.appendChild(headerCell);
                        countRow.appendChild(countCell);
                        enhanceRow.appendChild(enhanceCell);
                    }
                    colorTable.appendChild(headerRow);
                    colorTable.appendChild(countRow);
                    colorTable.appendChild(enhanceRow);
                    this.colorTables[c] = colorTable;
                    this.element.appendChild(colorTable);
                }
            }
            getElement() {
                return this.element;
            }
            getInputElements() {
                const out = {};
                for (const c of common_2.COLORS) {
                    out[c] = [];
                    const [shapeCountRow, enhanceRow] = [...this.colorTables[c].getElementsByTagName('tr')].slice(1);
                    const shapeCountEls = shapeCountRow.getElementsByTagName('input');
                    const enhanceEls = enhanceRow.getElementsByTagName('input');
                    for (let i = 0; i < ComboEditor.maxVisibleCombos; i++) {
                        const shapeCountEl = shapeCountEls[i];
                        const enhanceEl = enhanceEls[i];
                        out[c].push({
                            shapeCountEl,
                            enhanceEl,
                        });
                    }
                }
                return out;
            }
            update(data) {
                for (const c in data) {
                    const vals = data[c];
                    for (let i = 0; i < ComboEditor.maxVisibleCombos; i++) {
                        const countEl = document.getElementById(`valeria-combo-count-${c}-${i}`);
                        const enhanceEl = document.getElementById(`valeria-combo-enhance-${c}-${i}`);
                        if (i >= vals.length) {
                            countEl.value = '';
                            enhanceEl.value = '';
                        }
                        else {
                            const { shapeCount, enhance } = vals[i];
                            countEl.value = shapeCount;
                            enhanceEl.value = enhance > 0 ? `${enhance}` : '';
                        }
                    }
                }
            }
        }
        exports.ComboEditor = ComboEditor;
        ComboEditor.maxVisibleCombos = 14;
        class TabbedComponent {
            constructor(tabNames, defaultTab = '') {
                if (!tabNames.length) {
                    throw 'Need at least one tab name.';
                }
                if (!defaultTab || !tabNames.some((name) => name == defaultTab)) {
                    defaultTab = tabNames[0];
                }
                this.element_ = create('div', ClassNames.TABBED);
                this.tabNames_ = [...tabNames];
                const labelTable = create('table');
                const labelRow = create('tr');
                labelTable.appendChild(labelRow);
                this.element_.appendChild(labelTable);
                this.labels_ = {};
                this.tabs_ = {};
                for (const tabName of tabNames) {
                    const labelClassName = tabName == defaultTab ? ClassNames.TABBED_LABelSELECTED : ClassNames.TABBED_LABEL;
                    const label = create('td', labelClassName);
                    label.innerText = tabName;
                    label.onclick = () => this.setActiveTab(tabName);
                    labelRow.appendChild(label);
                    this.labels_[tabName] = label;
                    const tabClassName = tabName == defaultTab ? ClassNames.TABBED_TAB_SELECTED : ClassNames.TABBED_TAB;
                    const tab = create('div', tabClassName);
                    this.element_.appendChild(tab);
                    this.tabs_[tabName] = tab;
                }
            }
            getElement() {
                return this.element_;
            }
            setActiveTab(activeTabName) {
                for (const tabName of this.tabNames_) {
                    if (tabName == activeTabName) {
                        this.labels_[tabName].className = ClassNames.TABBED_LABelSELECTED;
                        this.tabs_[tabName].className = ClassNames.TABBED_TAB_SELECTED;
                    }
                    else {
                        this.labels_[tabName].className = ClassNames.TABBED_LABEL;
                        this.tabs_[tabName].className = ClassNames.TABBED_TAB;
                    }
                }
            }
            getTab(tabName) {
                if (!(tabName in this.tabs_)) {
                    throw 'Invalid tab name: ' + tabName;
                }
                return this.tabs_[tabName];
            }
        }
        exports.TabbedComponent = TabbedComponent;
        class GenericSelector {
            constructor(searchArray, updateCb) {
                this.el = create('div');
                this.selector = create('input', ClassNames.MONSTER_SELECTOR);
                this.optionsContainer = create('div', ClassNames.SELECTOR_OPTIONS_INACTIVE);
                this.options = [];
                this.selectedOption = 0;
                this.activeOptions = 0;
                this.searchArray = searchArray;
                this.updateCb = updateCb;
                this.selector.placeholder = 'Search';
                this.selector.onkeydown = this.onKeyDown();
                this.selector.onkeyup = this.onKeyUp();
                this.el.appendChild(this.selector);
                const container = create('div', ClassNames.SELECTOR_OPTIONS_CONTAINER);
                container.appendChild(this.optionsContainer);
                for (let i = 0; i < GenericSelector.MAX_OPTIONS; i++) {
                    const option = create('div', ClassNames.SELECTOR_OPTION_INACTIVE);
                    option.setAttribute('value', '-1');
                    option.onclick = this.optionOnClick(option);
                    this.optionsContainer.appendChild(option);
                    this.options.push(option);
                }
                this.el.appendChild(container);
            }
            onKeyDown() {
                return (e) => {
                    this.options[this.selectedOption].style.border = '';
                    switch (e.keyCode) {
                        case 27: // Escape key
                            this.selectedOption = 0;
                            this.optionsContainer.className = ClassNames.SELECTOR_OPTIONS_INACTIVE;
                            return;
                        case 13: // Enter
                            this.options[this.selectedOption].click();
                            return;
                        case 38: // Up Arrow
                            if (this.selectedOption > 0) {
                                this.selectedOption--;
                            }
                            this.options[this.selectedOption].style.border = '1px solid white';
                            // this.options[this.selectedOption].style.border = '1px solid white';
                            e.preventDefault();
                            return;
                        case 40: // Down Arrow
                            if (this.selectedOption < this.activeOptions - 1) {
                                this.selectedOption++;
                            }
                            this.options[this.selectedOption].style.border = '1px solid white';
                            e.preventDefault();
                            return;
                    }
                    // Left and right arrows.
                    if (e.keyCode != 37 && e.keyCode != 39) {
                        this.selectedOption = 0;
                    }
                    this.options[this.selectedOption].style.border = '1px solid white';
                };
            }
            postFilter(matches) {
                return matches;
            }
            getFuzzyMatches(text) {
                return fuzzy_search_1.fuzzySearch(text, GenericSelector.MAX_OPTIONS * 3, this.searchArray);
            }
            onKeyUp() {
                return (e) => {
                    this.options[this.selectedOption].style.border = '1px solid white';
                    if ([27, 13, 38, 40].indexOf(e.keyCode) >= 0) {
                        return;
                    }
                    this.optionsContainer.className = ClassNames.SELECTOR_OPTIONS_ACTIVE;
                    const currentText = this.selector.value.trim();
                    if (currentText == '') {
                        this.options[0].setAttribute('value', '-1');
                        this.optionsContainer.style.display = 'none';
                        return;
                    }
                    this.optionsContainer.style.display = '';
                    let fuzzyMatches = this.getFuzzyMatches(currentText);
                    fuzzyMatches = this.postFilter(fuzzyMatches);
                    for (let i = 0; i < this.options.length; i++) {
                        if (i >= fuzzyMatches.length) {
                            this.options[i].className = ClassNames.SELECTOR_OPTION_INACTIVE;
                            continue;
                        }
                        this.options[i].className = ClassNames.SELECTOR_OPTION_ACTIVE;
                        this.options[i].innerText = `${fuzzyMatches[i]} - ${this.getName(fuzzyMatches[i])}`;
                        this.options[i].setAttribute('value', String(fuzzyMatches[i]));
                    }
                    this.activeOptions = Math.min(fuzzyMatches.length, this.options.length);
                };
            }
            optionOnClick(option) {
                return () => {
                    const id = Number(option.getAttribute('value'));
                    this.updateCb(id);
                    // TODO: Clean this up.
                    this.selector.value = this.getName(id);
                    this.optionsContainer.className = ClassNames.SELECTOR_OPTIONS_INACTIVE;
                };
            }
            getName(value) {
                for (const entry of this.searchArray) {
                    if (Number(entry.value) == value) {
                        return entry.s;
                    }
                }
                return 'None';
            }
            getElement() {
                return this.el;
            }
        }
        GenericSelector.MAX_OPTIONS = 15;
        class MonsterSelector extends GenericSelector {
            constructor(cards, updateCb, isInherit = false) {
                super([], (id) => {
                    if (isInherit) {
                        updateCb({ inheritId: id });
                    }
                    else {
                        updateCb({ id: id });
                    }
                });
                this.isInherit = false;
                this.cardArray = cards;
                this.selector.placeholder = 'Monster Search';
            }
            getName(id) {
                if (id == -1) {
                    return 'None';
                }
                else {
                    return vm.model.cards[id].name;
                }
            }
            getFuzzyMatches(text) {
                return fuzzy_search_1.fuzzyMonsterSearch(text, GenericSelector.MAX_OPTIONS * 3, this.cardArray);
            }
            postFilter(matches) {
                if (this.isInherit) {
                    return matches.filter((match) => vm.model.cards[match].inheritanceType & 1);
                }
                return matches;
            }
            setId(id) {
                this.optionsContainer.style.display = 'none';
                this.selector.value = this.getName(id);
            }
        }
        class LevelEditor {
            constructor(onUpdate) {
                this.el = create('div', ClassNames.LEVelEDITOR);
                this.inheritRow = create('tr');
                this.levelInput = create('input', ClassNames.LEVelINPUT);
                this.inheritInput = create('input', ClassNames.LEVelINPUT);
                this.maxLevel = 1;
                this.inheritMaxLevel = 1;
                this.maxLevelEl = document.createTextNode('/ 1');
                this.inheritMaxLevelEl = document.createTextNode('/ 1');
                this.onUpdate = onUpdate;
                const table = create('table');
                table.style.fontSize = 'small';
                const monsterLevelRow = create('tr');
                const levelLabel = create('td');
                levelLabel.innerText = 'Monster';
                monsterLevelRow.appendChild(levelLabel);
                const inheritLabel = create('td');
                inheritLabel.innerText = 'Inherit';
                this.inheritRow.appendChild(inheritLabel);
                const levelCell = create('td');
                levelCell.appendChild(document.createTextNode('Lv'));
                this.levelInput.type = 'number';
                this.levelInput.value = '0';
                this.levelInput.onchange = () => {
                    let lv = Number(this.levelInput.value);
                    lv = LevelEditor.levelLimit(lv);
                    if (lv > this.maxLevel) {
                        lv = this.maxLevel;
                    }
                    this.onUpdate({ level: lv });
                };
                levelCell.appendChild(this.levelInput);
                levelCell.appendChild(this.maxLevelEl);
                monsterLevelRow.appendChild(levelCell);
                const monsterLevel1Cell = create('td');
                const monsterLevel1Button = create('button');
                monsterLevel1Button.innerText = 'Lv1';
                monsterLevel1Button.onclick = () => {
                    this.onUpdate({ level: 1 });
                };
                monsterLevel1Cell.appendChild(monsterLevel1Button);
                monsterLevelRow.appendChild(monsterLevel1Cell);
                const monsterLevelMaxCell = create('td');
                const monsterLevelMaxButton = create('button');
                monsterLevelMaxButton.innerText = 'Lv MAX';
                monsterLevelMaxButton.onclick = () => {
                    this.onUpdate({ level: this.maxLevel });
                };
                monsterLevelMaxCell.appendChild(monsterLevelMaxButton);
                monsterLevelRow.appendChild(monsterLevelMaxCell);
                const inheritCell = create('td');
                inheritCell.appendChild(document.createTextNode('Lv'));
                this.inheritInput.type = 'number';
                this.inheritInput.value = '1';
                this.inheritInput.onchange = () => {
                    let lv = Number(this.inheritInput.value);
                    lv = LevelEditor.levelLimit(lv);
                    if (lv > this.inheritMaxLevel) {
                        lv = this.inheritMaxLevel;
                    }
                    this.onUpdate({ inheritLevel: lv });
                };
                inheritCell.appendChild(this.inheritInput);
                inheritCell.appendChild(this.inheritMaxLevelEl);
                this.inheritRow.appendChild(inheritCell);
                const inheritLevel1Cell = create('td');
                const inheritLevel1Button = create('button');
                inheritLevel1Button.innerText = 'Lv1';
                inheritLevel1Button.onclick = () => {
                    this.onUpdate({ inheritLevel: 1 });
                };
                inheritLevel1Cell.appendChild(inheritLevel1Button);
                this.inheritRow.appendChild(inheritLevel1Cell);
                const inheritLevelMaxCell = create('td');
                const inheritLevelMaxButton = create('button');
                inheritLevelMaxButton.innerText = 'Lv MAX';
                inheritLevelMaxButton.onclick = () => {
                    this.onUpdate({ inheritLevel: this.inheritMaxLevel });
                };
                inheritLevelMaxCell.appendChild(inheritLevelMaxButton);
                this.inheritRow.appendChild(inheritLevelMaxCell);
                table.appendChild(monsterLevelRow);
                table.appendChild(this.inheritRow);
                this.inheritRow.style.display = 'none';
                this.el.appendChild(table);
            }
            static levelLimit(lv) {
                if (lv < 1) {
                    return 1;
                }
                if (lv > 110) {
                    return 110;
                }
                return lv;
            }
            getElement() {
                return this.el;
            }
            update({ level, inheritLevel, maxLevel, inheritMaxLevel }) {
                this.maxLevel = maxLevel;
                this.maxLevelEl.data = `/ ${maxLevel}`;
                if (inheritMaxLevel) {
                    this.inheritMaxLevel = inheritMaxLevel;
                    this.levelInput.value = String(level);
                    this.inheritInput.value = String(inheritLevel);
                    this.inheritMaxLevelEl.data = `/ ${inheritMaxLevel}`;
                    this.inheritRow.style.display = '';
                }
                else {
                    this.inheritRow.style.display = 'none';
                }
            }
        }
        class PlusEditor {
            constructor(onUpdate) {
                this.el = create('div');
                this.onUpdate = onUpdate;
                const maxPlusButton = create('button');
                // maxPlusButton.id = 'idc-297-plus-monster';
                maxPlusButton.type = 'button';
                maxPlusButton.innerText = '+297';
                maxPlusButton.onclick = () => {
                    this.onUpdate({
                        hpPlus: 99,
                        atkPlus: 99,
                        rcvPlus: 99,
                    });
                    this.hpEl.value = '99';
                    this.atkEl.value = '99';
                    this.rcvEl.value = '99';
                };
                this.el.appendChild(maxPlusButton);
                const minPlusButton = create('button');
                // minPlusButton.id = 'idc-0-plus-monster';
                minPlusButton.type = 'button';
                minPlusButton.innerText = '+0';
                minPlusButton.onclick = () => {
                    this.onUpdate({
                        hpPlus: 0,
                        atkPlus: 0,
                        rcvPlus: 0,
                    });
                    this.hpEl.value = '0';
                    this.atkEl.value = '0';
                    this.rcvEl.value = '0';
                };
                this.el.appendChild(minPlusButton);
                this.el.appendChild(create('br'));
                this.hpEl = create('input', ClassNames.PLUS_EDITOR);
                this.hpEl.type = 'number';
                this.hpEl.onchange = () => {
                    this.onUpdate({ hpPlus: Number(this.hpEl.value) });
                };
                this.el.appendChild(document.createTextNode('HP+ '));
                this.el.appendChild(this.hpEl);
                this.atkEl = create('input', ClassNames.PLUS_EDITOR);
                this.atkEl.type = 'number';
                this.atkEl.onchange = () => {
                    this.onUpdate({ atkPlus: Number(this.atkEl.value) });
                };
                this.el.appendChild(document.createTextNode('ATK+ '));
                this.el.appendChild(this.atkEl);
                this.rcvEl = create('input', ClassNames.PLUS_EDITOR);
                this.rcvEl.type = 'number';
                this.rcvEl.onchange = () => {
                    this.onUpdate({ rcvPlus: Number(this.rcvEl.value) });
                };
                this.el.appendChild(document.createTextNode('RCV+ '));
                this.el.appendChild(this.rcvEl);
                this.inheritEl = create('input');
                this.inheritEl.type = 'checkbox';
                this.inheritEl.onclick = () => {
                    this.onUpdate({ inheritPlussed: this.inheritEl.checked });
                };
            }
            update(hpPlus, atkPlus, rcvPlus, inheritPlussed) {
                this.hpEl.value = String(hpPlus);
                this.atkEl.value = String(atkPlus);
                this.rcvEl.value = String(rcvPlus);
                this.inheritEl.checked = inheritPlussed;
            }
            getElement() {
                return this.el;
            }
        }
        class AwakeningEditor {
            constructor(onUpdate) {
                this.el = create('div');
                this.awakeningArea = create('div');
                this.el.style.fontSize = 'small';
                this.onUpdate = onUpdate;
                this.awakeningArea.appendChild(document.createTextNode('Awakenings'));
                this.awakeningArea.appendChild(create('br'));
                this.awakeningSelectors = [];
                for (let i = 0; i < AwakeningEditor.MAX_AWAKENINGS; i++) {
                    const el = create('a', ClassNames.AWAKENING);
                    el.onclick = () => {
                        this.onUpdate({ awakeningLevel: i });
                    };
                    if (i > 0) {
                        hide(el);
                    }
                    this.awakeningSelectors.push(el);
                    this.awakeningArea.appendChild(el);
                }
                this.el.appendChild(this.awakeningArea);
                this.inheritDisplays = [];
                this.inheritAwakeningArea = create('div');
                for (let i = 0; i < 10; i++) {
                    const el = create('a', ClassNames.AWAKENING);
                    el.style.cursor = 'default';
                    this.inheritDisplays.push(el);
                    if (i > 0) {
                        hide(el);
                    }
                    this.inheritAwakeningArea.appendChild(el);
                }
                this.el.appendChild(this.inheritAwakeningArea);
                this.superAwakeningSelectors = [];
                this.superAwakeningArea = create('div');
                this.superAwakeningArea.appendChild(document.createTextNode('Super Awakening'));
                this.superAwakeningArea.appendChild(create('br'));
                for (let i = 0; i < AwakeningEditor.MAX_AWAKENINGS; i++) {
                    const el = create('a', ClassNames.AWAKENING);
                    el.onclick = () => {
                        this.onUpdate({ superAwakeningIdx: i - 1 });
                    };
                    if (i > 0) {
                        hide(el);
                    }
                    this.superAwakeningSelectors.push(el);
                    this.superAwakeningArea.appendChild(el);
                }
                this.el.appendChild(this.superAwakeningArea);
            }
            getElement() {
                return this.el;
            }
            // TODO
            update(awakenings, // All awakenings of the current monster.
            superAwakenings, // All super awakenings of the current monster.
            inheritAwakenings, // All awakenings of the inherit monster.
            awakeningLevel, // Current awakening level [0, awakenings.length]
            superAwakeningIdx, // Current Super Awakening selected
            inheritAwakeningLevel = -1) {
                if (awakeningLevel > awakenings.length) {
                    awakeningLevel = awakenings.length;
                }
                if (!awakenings.length) {
                    this.awakeningArea.style.display = 'none';
                }
                else {
                    this.awakeningArea.style.display = '';
                    for (let i = 1; i < AwakeningEditor.MAX_AWAKENINGS; i++) {
                        const el = this.awakeningSelectors[i];
                        if (i > awakenings.length) {
                            hide(el);
                        }
                        else {
                            show(el);
                            el.style.opacity = i > awakeningLevel ? '0.5' : '1';
                            const [x, y] = getAwakeningOffsets(awakenings[i - 1]);
                            el.style.backgroundPosition = `${AwakeningEditor.SCALE * x}px ${AwakeningEditor.SCALE * y}px`;
                        }
                    }
                }
                if (!inheritAwakenings.length || inheritAwakenings[0] != common_2.Awakening.AWOKEN_ASSIST) {
                    this.inheritAwakeningArea.style.display = 'none';
                }
                else {
                    this.inheritAwakeningArea.style.display = '';
                    for (let i = 1; i < AwakeningEditor.MAX_AWAKENINGS; i++) {
                        const el = this.inheritDisplays[i];
                        if (i > inheritAwakenings.length) {
                            hide(el);
                        }
                        else {
                            show(el);
                            el.style.opacity = i <= inheritAwakeningLevel || inheritAwakeningLevel == -1 ? '1' : '0.5';
                            const [x, y] = getAwakeningOffsets(inheritAwakenings[i - 1]);
                            el.style.backgroundPosition = `${AwakeningEditor.SCALE * x}px ${AwakeningEditor.SCALE * y}px`;
                        }
                    }
                }
                if (superAwakeningIdx >= superAwakenings.length) {
                    superAwakeningIdx = -1;
                }
                if (!awakenings.length) {
                    this.superAwakeningArea.style.display = 'none';
                }
                else {
                    this.superAwakeningArea.style.display = '';
                    for (let i = 0; i < AwakeningEditor.MAX_AWAKENINGS; i++) {
                        const el = this.superAwakeningSelectors[i];
                        if (i > superAwakenings.length) {
                            hide(el);
                        }
                        else {
                            show(el);
                            el.style.opacity = (i - 1) == superAwakeningIdx ? '1' : '0.5';
                            if (i > 0) {
                                const [x, y] = getAwakeningOffsets(superAwakenings[i - 1]);
                                el.style.backgroundPosition = `${AwakeningEditor.SCALE * x}px ${AwakeningEditor.SCALE * y}px`;
                            }
                        }
                    }
                }
            }
        }
        AwakeningEditor.MAX_AWAKENINGS = 10;
        AwakeningEditor.SCALE = 0.7;
        class LatentEditor {
            constructor(onUpdate) {
                this.el = create('div');
                this.onUpdate = onUpdate;
                this.el.appendChild(document.createTextNode('Latents'));
                this.el.appendChild(create('br'));
                this.latentRemovers = [];
                this.currentLatents = [];
                const removerArea = create('div');
                for (let i = 0; i < 8; i++) {
                    const remover = create('a', ClassNames.AWAKENING);
                    remover.style.backgroundPosition = '0px 0px';
                    remover.onclick = () => {
                        this.onUpdate({ removeLatent: i });
                    };
                    this.latentRemovers.push(remover);
                    removerArea.appendChild(remover);
                }
                this.el.appendChild(removerArea);
                this.latentSelectors = [];
                const selectorArea = create('div');
                let currentWidth = 0;
                let j = 1;
                let x = 0;
                for (let i = 0; i < 33; i++) {
                    const isSuper = i >= LatentEditor.PER_ROW;
                    currentWidth += isSuper ? 2 : 1;
                    x++;
                    if (currentWidth > LatentEditor.PER_ROW) {
                        selectorArea.appendChild(create('br'));
                        currentWidth = isSuper ? 2 : 1;
                        x = 0;
                        j++;
                    }
                    const cls = isSuper ? ClassNames.AWAKENING_SUPER : ClassNames.AWAKENING;
                    const selector = create('a', cls);
                    const offsetX = (j > 1 ? (80 * x + 2) : 36 * x - 36) * AwakeningEditor.SCALE;
                    selector.style.backgroundPosition = `-${offsetX}px -${36 * j * AwakeningEditor.SCALE}px`;
                    selector.onclick = () => {
                        this.onUpdate({ addLatent: i });
                    };
                    this.latentSelectors.push(selector);
                    selectorArea.appendChild(selector);
                }
                this.el.appendChild(selectorArea);
            }
            getElement() {
                return this.el;
            }
            update(activeLatents, latentKillers, maxLatents = 6) {
                if (!latentKillers.length) {
                    this.el.style.display = 'none';
                    return;
                }
                this.el.style.display = '';
                let totalLatents = 0;
                for (let i = 0; i < 8; i++) {
                    const remover = this.latentRemovers[i];
                    if (totalLatents >= maxLatents) {
                        remover.style.display = 'none';
                        continue;
                    }
                    else if (i >= activeLatents.length) {
                        remover.style.display = '';
                        remover.style.backgroundPosition = '0px 0px';
                        remover.className = ClassNames.AWAKENING;
                        totalLatents++;
                        continue;
                    }
                    remover.style.display = '';
                    const latent = activeLatents[i];
                    const isSuper = latent >= 11;
                    totalLatents += isSuper ? 2 : 1;
                    let offsetWidth, offsetHeight;
                    const x = isSuper ? (latent - 11) % 5 : latent;
                    const y = isSuper ? Math.floor((latent - 11) / 5 + 2) : 1;
                    if (isSuper) {
                        offsetWidth = x * -80 - 2;
                        offsetHeight = -36 * y;
                    }
                    else {
                        offsetWidth = x * -36;
                        offsetHeight = -36;
                    }
                    remover.className = isSuper ? ClassNames.AWAKENING_SUPER : ClassNames.AWAKENING;
                    remover.style.backgroundPosition = `${offsetWidth * AwakeningEditor.SCALE}px ${offsetHeight * AwakeningEditor.SCALE}px`;
                }
                // Enable/Disable Generic Killers. (Evo, Awakening, Enhance, Redeemable.)
                for (let i = 12; i < 16; i++) {
                    this.latentSelectors[i].style.opacity = latentKillers.length > 0 ? '1.0' : '0.5';
                }
                for (let i = 16; i <= 23; i++) {
                    this.latentSelectors[i].style.opacity = latentKillers.some((l) => l == i - 11) ? '1' : '0.5';
                }
            }
        }
        LatentEditor.PER_ROW = 11;
        class MonsterEditor {
            constructor(onUpdate) {
                this.el = create('div', ClassNames.MONSTER_EDITOR);
                const pdchuArea = create('div');
                this.pdchu = {
                    io: create('textarea', ClassNames.PDCHU_IO),
                    importButton: create('button'),
                    exportButton: create('button'),
                };
                this.pdchu.io.placeholder = 'pdchu Import + Export';
                this.pdchu.exportButton.innerText = 'Export pdchu';
                this.pdchu.importButton.innerText = 'Import pdchu';
                pdchuArea.appendChild(this.pdchu.io);
                pdchuArea.appendChild(this.pdchu.importButton);
                pdchuArea.appendChild(this.pdchu.exportButton);
                this.el.appendChild(pdchuArea);
                this.monsterSelector = new MonsterSelector(fuzzy_search_1.prioritizedMonsterSearch, onUpdate);
                this.inheritSelector = new MonsterSelector(fuzzy_search_1.prioritizedInheritSearch, onUpdate, true);
                this.inheritSelector.selector.placeholder = 'Inherit Search';
                this.el.appendChild(this.monsterSelector.getElement());
                this.el.appendChild(this.inheritSelector.getElement());
                this.levelEditor = new LevelEditor(onUpdate);
                this.el.appendChild(this.levelEditor.getElement());
                this.plusEditor = new PlusEditor(onUpdate);
                this.el.appendChild(this.plusEditor.getElement());
                this.awakeningEditor = new AwakeningEditor(onUpdate);
                this.el.appendChild(this.awakeningEditor.getElement());
                this.latentEditor = new LatentEditor(onUpdate);
                this.el.appendChild(this.latentEditor.getElement());
            }
            update(ctx) {
                this.monsterSelector.setId(ctx.id);
                this.inheritSelector.setId(ctx.inheritId);
                let maxLevel = 1;
                if (ctx.id in vm.model.cards) {
                    maxLevel = vm.model.cards[ctx.id].isLimitBreakable ? 110 : vm.model.cards[ctx.id].maxLevel;
                }
                let inheritMaxLevel = 1;
                if (ctx.inheritId in vm.model.cards) {
                    inheritMaxLevel = vm.model.cards[ctx.inheritId].isLimitBreakable ? 110 : vm.model.cards[ctx.id].maxLevel;
                }
                this.levelEditor.update({
                    level: ctx.level,
                    inheritLevel: ctx.inheritLevel,
                    maxLevel: maxLevel,
                    inheritMaxLevel: inheritMaxLevel,
                });
                this.plusEditor.update(ctx.hpPlus, ctx.atkPlus, ctx.rcvPlus, ctx.inheritPlussed);
                let awakenings = [];
                let superAwakenings = [];
                let inheritAwakenings = [];
                if (ctx.id in vm.model.cards) {
                    awakenings = vm.model.cards[ctx.id].awakenings;
                    superAwakenings = vm.model.cards[ctx.id].superAwakenings;
                }
                if (ctx.inheritId in vm.model.cards) {
                    inheritAwakenings = vm.model.cards[ctx.inheritId].awakenings;
                }
                this.awakeningEditor.update(awakenings, superAwakenings, inheritAwakenings, ctx.awakeningLevel, ctx.superAwakeningIdx, -1);
                let latentKillers = [];
                if (ctx.id in vm.model.cards) {
                    latentKillers = vm.model.cards[ctx.id].latentKillers;
                }
                this.latentEditor.update(ctx.latents, latentKillers, vm.model.cards[ctx.id].inheritanceType & 32 ? 8 : 6);
            }
            getElement() {
                return this.el;
            }
        }
        exports.MonsterEditor = MonsterEditor;
        class StoredTeamDisplay {
            constructor(saveFn, loadFn, deleteFn) {
                this.element_ = create('div', ClassNames.TEAM_STORAGE);
                this.saveTeamEl = create('div', ClassNames.TEAM_STORAGE_SAVE);
                this.saveTeamEl.innerText = 'Save Team';
                this.saveTeamEl.onclick = saveFn;
                this.element_.appendChild(this.saveTeamEl);
                this.loadTable_ = create('table', ClassNames.TEAM_STORAGE_LOAD_AREA);
                this.element_.appendChild(this.loadTable_);
                this.teamRows_ = [];
                this.loadFn = loadFn;
                this.deleteFn = deleteFn;
            }
            getElement() {
                return this.element_;
            }
            update(names) {
                for (let i = 0; i < Math.max(names.length, this.teamRows_.length); i++) {
                    if (i >= names.length) {
                        this.teamRows_[i].className = ClassNames.TEAM_STORAGE_LOAD_INACTIVE;
                        continue;
                    }
                    else if (i >= this.teamRows_.length) {
                        const newRow = create('tr', ClassNames.TEAM_STORAGE_LOAD_ACTIVE);
                        const newLoad = create('td');
                        newLoad.onclick = () => this.loadFn(newLoad.innerText);
                        newRow.appendChild(newLoad);
                        const newDelete = create('td');
                        newDelete.innerText = 'x';
                        newDelete.onclick = () => this.deleteFn(newLoad.innerText);
                        newRow.appendChild(newDelete);
                        this.loadTable_.appendChild(newRow);
                        this.teamRows_.push(newRow);
                    }
                    this.teamRows_[i].className = ClassNames.TEAM_STORAGE_LOAD_ACTIVE;
                    const loadCell = this.teamRows_[i].firstElementChild;
                    loadCell.innerText = names[i];
                }
            }
        }
        exports.StoredTeamDisplay = StoredTeamDisplay;
        class TeamPane {
            constructor(storageDisplay, monsterDivs, onSelectIdx, onSelectTeamIdx, onNameChange) {
                this.element_ = create('div');
                this.teamDivs = [];
                this.monsterDivs = [];
                this.titleEl = create('input', ClassNames.TEAM_TITLE);
                this.descriptionEl = create('textarea', ClassNames.TEAM_DESCRIPTION);
                this.statsEl = create('div');
                this.statsByIdxByIdx = [];
                this.totalHpValue = create('span');
                this.totalRcvValue = create('span');
                this.totalTimeValue = create('span');
                this.aggregatedAwakeningCounts = new Map();
                this.metaTabs = new TabbedComponent(['Team', 'Save/Load']);
                this.detailTabs = new TabbedComponent(['Description', 'Stats', 'Battle']);
                const teamTab = this.metaTabs.getTab('Team');
                teamTab.appendChild(this.titleEl);
                this.titleEl.onchange = () => {
                    onNameChange(this.titleEl.value);
                };
                for (let i = 0; i < 3; i++) {
                    this.teamDivs.push(create('div', ClassNames.TEAM_CONTAINER));
                    for (let j = 0; j < 6; j++) {
                        const d = create('div', ClassNames.MONSTER_CONTAINER);
                        d.appendChild(monsterDivs[i * 6 + j]);
                        d.onclick = () => {
                            onSelectIdx(i * 6 + j);
                            onSelectTeamIdx(i);
                            this.selectMonster(i * 6 + j);
                        };
                        this.monsterDivs.push(d);
                        this.teamDivs[i].appendChild(d);
                    }
                    teamTab.appendChild(this.teamDivs[i]);
                }
                const descriptionTab = this.detailTabs.getTab('Description');
                this.descriptionEl.spellcheck = false;
                descriptionTab.appendChild(this.descriptionEl);
                const statsTab = this.detailTabs.getTab('Stats');
                this.populateStats();
                statsTab.appendChild(this.statsEl);
                teamTab.appendChild(this.detailTabs.getElement());
                this.metaTabs.getTab('Save/Load').appendChild(storageDisplay);
                this.element_.appendChild(this.metaTabs.getElement());
            }
            selectMonster(position) {
                for (let i = 0; i < this.monsterDivs.length; i++) {
                    // TODO: Enable double highlighting of 2P leads.
                    if (i != position || this.monsterDivs[i].className == ClassNames.MONSTER_CONTAINER_SELECTED) {
                        this.monsterDivs[i].className = ClassNames.MONSTER_CONTAINER;
                    }
                    else {
                        this.monsterDivs[i].className = ClassNames.MONSTER_CONTAINER_SELECTED;
                    }
                }
            }
            populateStats() {
                const statsTable = create('table', ClassNames.STAT_TABLE);
                const baseStatRow = create('tr');
                for (let i = 0; i < 6; i++) {
                    const statCell = create('td');
                    const statContainer = create('div');
                    const miniStatTable = create('table');
                    const hpRow = create('tr');
                    const atkRow = create('tr');
                    const rcvRow = create('tr');
                    const cdRow = create('tr');
                    if (i == 0) {
                        const hpLabel = create('td', ClassNames.STAT_LABEL);
                        const atkLabel = create('td', ClassNames.STAT_LABEL);
                        const rcvLabel = create('td', ClassNames.STAT_LABEL);
                        const cdLabel = create('td', ClassNames.STAT_LABEL);
                        hpLabel.innerText = 'HP:';
                        atkLabel.innerText = 'ATK:';
                        rcvLabel.innerText = 'RCV:';
                        cdLabel.innerText = 'CD:';
                        hpRow.appendChild(hpLabel);
                        atkRow.appendChild(atkLabel);
                        rcvRow.appendChild(rcvLabel);
                        cdRow.appendChild(cdLabel);
                    }
                    const hpValue = create('td', ClassNames.STAT_VALUE);
                    const atkValue = create('td', ClassNames.STAT_VALUE);
                    const rcvValue = create('td', ClassNames.STAT_VALUE);
                    const cdValue = create('td', ClassNames.STAT_VALUE);
                    this.statsByIdxByIdx.push([hpValue, atkValue, rcvValue, cdValue]);
                    hpRow.appendChild(hpValue);
                    atkRow.appendChild(atkValue);
                    rcvRow.appendChild(rcvValue);
                    cdRow.appendChild(cdValue);
                    miniStatTable.appendChild(hpRow);
                    miniStatTable.appendChild(atkRow);
                    miniStatTable.appendChild(rcvRow);
                    miniStatTable.appendChild(cdRow);
                    statContainer.appendChild(miniStatTable);
                    statCell.appendChild(statContainer);
                    baseStatRow.appendChild(statCell);
                }
                statsTable.appendChild(baseStatRow);
                this.statsEl.appendChild(statsTable);
                const totalBaseStatEl = create('div');
                const totalHpLabel = create('span');
                totalHpLabel.innerText = 'Total HP:';
                const totalRcvLabel = create('span');
                totalRcvLabel.innerText = 'Total RCV:';
                const totalTimeLabel = create('span');
                totalTimeLabel.innerText = 'Time:';
                totalBaseStatEl.appendChild(totalHpLabel);
                totalBaseStatEl.appendChild(this.totalHpValue);
                totalBaseStatEl.appendChild(totalRcvLabel);
                totalBaseStatEl.appendChild(this.totalRcvValue);
                totalBaseStatEl.appendChild(totalTimeLabel);
                totalBaseStatEl.appendChild(this.totalTimeValue);
                this.statsEl.appendChild(totalBaseStatEl);
                const awakeningsToDisplay = [
                    common_2.Awakening.SKILL_BOOST,
                    common_2.Awakening.TIME,
                    common_2.Awakening.SOLOBOOST,
                    common_2.Awakening.BONUS_ATTACK,
                    common_2.Awakening.BONUS_ATTACK_SUPER,
                    common_2.Awakening.SBR,
                    common_2.Awakening.RESIST_POISON,
                    common_2.Awakening.RESIST_BLIND,
                    common_2.Awakening.RESIST_JAMMER,
                    common_2.Awakening.RESIST_CLOUD,
                    common_2.Awakening.RESIST_TAPE,
                    common_2.Awakening.OE_FIRE,
                    common_2.Awakening.OE_WATER,
                    common_2.Awakening.OE_WOOD,
                    common_2.Awakening.OE_LIGHT,
                    common_2.Awakening.OE_DARK,
                    common_2.Awakening.OE_HEART,
                ];
                for (const awakening of awakeningsToDisplay) {
                    const container = create('span');
                    const awakeningIcon = create('span', ClassNames.AWAKENING);
                    const [x, y] = getAwakeningOffsets(awakening);
                    awakeningIcon.style.backgroundPosition = `${AwakeningEditor.SCALE * x}px ${AwakeningEditor.SCALE * y}px`;
                    container.appendChild(awakeningIcon);
                    const aggregatedAwakeningCount = create('span');
                    aggregatedAwakeningCount.innerText = 'x0';
                    this.aggregatedAwakeningCounts.set(awakening, aggregatedAwakeningCount);
                    container.appendChild(aggregatedAwakeningCount);
                    this.statsEl.appendChild(container);
                }
            }
            // TODO
            update(playerMode, title, description) {
                for (let i = 1; i < this.teamDivs.length; i++) {
                    if (i < playerMode) {
                        this.teamDivs[i].style.display = '';
                    }
                    else {
                        this.teamDivs[i].style.display = 'none';
                    }
                }
                this.titleEl.value = title;
                this.descriptionEl.value = description;
            }
            getElement() {
                return this.element_;
            }
            updateStats(stats) {
                for (let i = 0; i < 6; i++) {
                    const statsByIdx = this.statsByIdxByIdx[i];
                    statsByIdx[0].innerText = stats.hps[i] ? String(stats.hps[i]) : '';
                    statsByIdx[1].innerText = String(stats.atks[i]);
                    statsByIdx[2].innerText = String(stats.rcvs[i]);
                    statsByIdx[3].innerText = stats.cds[i];
                }
                this.totalHpValue.innerText = String(stats.totalHp);
                this.totalRcvValue.innerText = String(stats.totalRcv);
                this.totalTimeValue.innerText = `${stats.totalTime}s`;
                for (const awakening of this.aggregatedAwakeningCounts.keys()) {
                    const val = this.aggregatedAwakeningCounts.get(awakening);
                    if (val) {
                        val.innerText = `x${stats.counts.get(awakening) || 0}`;
                    }
                }
            }
        }
        exports.TeamPane = TeamPane;
        class ToggleableImage {
            constructor(image, onToggle, active = true) {
                this.active = true;
                this.element = image;
                this.onToggle = onToggle;
                this.setActive(active);
                const oldOnClick = image.onclick;
                image.onclick = (ev) => {
                    if (oldOnClick) {
                        oldOnClick.apply(image, [ev]);
                    }
                    this.onToggle(!this.active);
                };
            }
            getActive() {
                return this.active;
            }
            setActive(active) {
                this.active = active;
                if (this.active) {
                    this.element.classList.remove(ClassNames.HALF_OPACITY);
                }
                else {
                    this.element.classList.add(ClassNames.HALF_OPACITY);
                }
            }
        }
        var AssetEnum;
        (function (AssetEnum) {
            AssetEnum[AssetEnum["NUMBER_0"] = 0] = "NUMBER_0";
            AssetEnum[AssetEnum["NUMBER_1"] = 1] = "NUMBER_1";
            AssetEnum[AssetEnum["NUMBER_2"] = 2] = "NUMBER_2";
            AssetEnum[AssetEnum["NUMBER_3"] = 3] = "NUMBER_3";
            AssetEnum[AssetEnum["NUMBER_4"] = 4] = "NUMBER_4";
            AssetEnum[AssetEnum["NUMBER_5"] = 5] = "NUMBER_5";
            AssetEnum[AssetEnum["NUMBER_6"] = 6] = "NUMBER_6";
            AssetEnum[AssetEnum["NUMBER_7"] = 7] = "NUMBER_7";
            AssetEnum[AssetEnum["NUMBER_8"] = 8] = "NUMBER_8";
            AssetEnum[AssetEnum["NUMBER_9"] = 9] = "NUMBER_9";
            AssetEnum[AssetEnum["GUARD_BREAK"] = 10] = "GUARD_BREAK";
            AssetEnum[AssetEnum["TIME"] = 11] = "TIME";
            AssetEnum[AssetEnum["POISON"] = 12] = "POISON";
            AssetEnum[AssetEnum["ENRAGE"] = 13] = "ENRAGE";
            AssetEnum[AssetEnum["STATUS_SHIELD"] = 14] = "STATUS_SHIELD";
            AssetEnum[AssetEnum["TIME_BUFF"] = 15] = "TIME_BUFF";
            AssetEnum[AssetEnum["TIME_DEBUFF"] = 16] = "TIME_DEBUFF";
            AssetEnum[AssetEnum["RESOLVE"] = 17] = "RESOLVE";
            AssetEnum[AssetEnum["BURST"] = 18] = "BURST";
            AssetEnum[AssetEnum["DEF_OVERLAY"] = 19] = "DEF_OVERLAY";
            AssetEnum[AssetEnum["FIXED_HP"] = 20] = "FIXED_HP";
            AssetEnum[AssetEnum["AWOKEN_BIND"] = 21] = "AWOKEN_BIND";
            AssetEnum[AssetEnum["SKILL_BIND"] = 22] = "SKILL_BIND";
            AssetEnum[AssetEnum["SHIELD_BASE"] = 23] = "SHIELD_BASE";
            AssetEnum[AssetEnum["PLAYER_HP_LEFT"] = 24] = "PLAYER_HP_LEFT";
            AssetEnum[AssetEnum["PLAYER_HP_MIDDLE"] = 25] = "PLAYER_HP_MIDDLE";
            AssetEnum[AssetEnum["PLAYER_HP_RIGHT"] = 26] = "PLAYER_HP_RIGHT";
            AssetEnum[AssetEnum["ENEMY_HP_LEFT"] = 27] = "ENEMY_HP_LEFT";
            AssetEnum[AssetEnum["ENEMY_HP_MIDDLE"] = 28] = "ENEMY_HP_MIDDLE";
            AssetEnum[AssetEnum["ENEMY_HP_RIGHT"] = 29] = "ENEMY_HP_RIGHT";
            // Overlays SHIELD_BASE for attribute resists.
            AssetEnum[AssetEnum["FIRE_TRANSPARENT"] = 30] = "FIRE_TRANSPARENT";
            AssetEnum[AssetEnum["WATER_TRANSPARENT"] = 31] = "WATER_TRANSPARENT";
            AssetEnum[AssetEnum["WOOD_TRANSPARENT"] = 32] = "WOOD_TRANSPARENT";
            AssetEnum[AssetEnum["LIGHT_TRANSPARENT"] = 33] = "LIGHT_TRANSPARENT";
            AssetEnum[AssetEnum["DARK_TRANSPARENT"] = 34] = "DARK_TRANSPARENT";
            // Overlays [attr]_TRANSPARENT for attribute absorb.
            AssetEnum[AssetEnum["TWINKLE"] = 35] = "TWINKLE";
            // Overlays SHIELD_BASE for Damage Void.
            AssetEnum[AssetEnum["VOID_OVERLAY"] = 36] = "VOID_OVERLAY";
            // Overlays SHIELD_BASES for Damage Absorb.
            AssetEnum[AssetEnum["ABSORB_OVERLAY"] = 37] = "ABSORB_OVERLAY";
            // DAMAGE_NULL,
        })(AssetEnum || (AssetEnum = {}));
        const ASSET_INFO = new Map([
            [AssetEnum.NUMBER_0, { offsetY: 182 + 0 * 32, offsetX: 180, width: 20, height: 26 }],
            [AssetEnum.NUMBER_1, { offsetY: 182 + 1 * 32, offsetX: 180, width: 20, height: 26 }],
            [AssetEnum.NUMBER_2, { offsetY: 182 + 2 * 32, offsetX: 180, width: 20, height: 26 }],
            [AssetEnum.NUMBER_3, { offsetY: 182 + 3 * 32, offsetX: 180, width: 20, height: 26 }],
            [AssetEnum.NUMBER_4, { offsetY: 182 + 4 * 32, offsetX: 180, width: 20, height: 26 }],
            [AssetEnum.NUMBER_5, { offsetY: 182 + 5 * 32, offsetX: 180, width: 20, height: 26 }],
            [AssetEnum.NUMBER_6, { offsetY: 182 + 6 * 32, offsetX: 180, width: 20, height: 26 }],
            [AssetEnum.NUMBER_7, { offsetY: 182 + 7 * 32, offsetX: 180, width: 20, height: 26 }],
            [AssetEnum.NUMBER_8, { offsetY: 182 + 8 * 32, offsetX: 180, width: 20, height: 26 }],
            [AssetEnum.NUMBER_9, { offsetY: 182 + 9 * 32, offsetX: 180, width: 20, height: 26 }],
            [AssetEnum.GUARD_BREAK, { offsetY: 0, offsetX: 2 + 36 * 0, width: 36, height: 36 }],
            [AssetEnum.TIME, { offsetY: 0, offsetX: 2 + 36 * 1, width: 36, height: 36 }],
            [AssetEnum.POISON, { offsetY: 0, offsetX: 2 + 36 * 2, width: 36, height: 36 }],
            [AssetEnum.ENRAGE, { offsetY: 0, offsetX: 114, width: 36, height: 36 }],
            [AssetEnum.STATUS_SHIELD, { offsetY: 0, offsetX: 154, width: 36, height: 36 }],
            [AssetEnum.SKILL_BIND, { offsetY: 40, offsetX: 141, width: 32, height: 32 }],
            [AssetEnum.AWOKEN_BIND, { offsetY: 73, offsetX: 140, width: 32, height: 32 }],
            [AssetEnum.RESOLVE, { offsetY: 144, offsetX: 132, width: 32, height: 32 }],
            [AssetEnum.BURST, { offsetY: 208, offsetX: 132, width: 32, height: 32 }],
            [AssetEnum.SHIELD_BASE, { offsetY: 55, offsetX: 326, width: 36, height: 36 }],
            [AssetEnum.FIRE_TRANSPARENT, { offsetY: 288, offsetX: -2 + 32 * 0, width: 32, height: 32 }],
            [AssetEnum.WATER_TRANSPARENT, { offsetY: 288, offsetX: -2 + 32 * 1, width: 32, height: 32 }],
            [AssetEnum.WOOD_TRANSPARENT, { offsetY: 288, offsetX: -2 + 32 * 2, width: 32, height: 32 }],
            [AssetEnum.LIGHT_TRANSPARENT, { offsetY: 288, offsetX: -2 + 32 * 3, width: 32, height: 32 }],
            [AssetEnum.DARK_TRANSPARENT, { offsetY: 288, offsetX: -2 + 32 * 4, width: 32, height: 32 }],
            [AssetEnum.TWINKLE, { offsetY: 248, offsetX: 85, width: 36, height: 36 }],
            [AssetEnum.VOID_OVERLAY, { offsetY: 49, offsetX: 372, width: 32, height: 32 }],
            [AssetEnum.ABSORB_OVERLAY, { offsetY: 49, offsetX: 452, width: 32, height: 32 }],
            [AssetEnum.FIXED_HP, { offsetY: 256, offsetX: 131, width: 32, height: 32 }],
        ]);
        const UI_ASSET_SRC = `url(${common_2.BASE_URL}assets/UIPAT1.PNG)`;
        class LayeredAsset {
            constructor(assets, onClick, active = true) {
                this.element = create('div', ClassNames.LAYERED_ASSET);
                this.active = true;
                this.assets = assets;
                const maxSizes = {
                    width: 0,
                    height: 0,
                };
                this.elements = assets
                    .filter((asset) => ASSET_INFO.has(asset))
                    .map((asset) => {
                    const assetInfo = ASSET_INFO.get(asset);
                    const el = create('a');
                    if (assetInfo) {
                        el.style.width = String(assetInfo.width);
                        el.style.height = String(assetInfo.height);
                        if (assetInfo.width > maxSizes.width) {
                            maxSizes.width = assetInfo.width;
                        }
                        if (assetInfo.height > maxSizes.height) {
                            maxSizes.height = assetInfo.height;
                        }
                        el.style.backgroundImage = UI_ASSET_SRC;
                        el.style.backgroundPosition = `${-1 * assetInfo.offsetX} ${-1 * assetInfo.offsetY}`;
                    }
                    return el;
                });
                // Manually center each of these.
                for (const el of this.elements) {
                    const elHeight = Number(el.style.height);
                    const elWidth = Number(el.style.width);
                    if (elHeight < maxSizes.height) {
                        el.style.marginTop = String((maxSizes.height - elHeight) / 2);
                    }
                    if (elWidth < maxSizes.width) {
                        el.style.marginLeft = String((maxSizes.width - elWidth) / 2);
                    }
                }
                for (const el of this.elements) {
                    this.element.appendChild(el);
                }
                this.element.style.width = String(maxSizes.width);
                this.element.style.height = String(maxSizes.height);
                this.onClick = onClick;
                this.element.onclick = () => {
                    this.onClick(!this.active);
                };
                this.setActive(active);
            }
            getElement() {
                return this.element;
            }
            setActive(active) {
                this.active = active;
                if (active) {
                    for (const element of this.elements) {
                        element.classList.remove(ClassNames.HALF_OPACITY);
                    }
                }
                else {
                    for (const element of this.elements) {
                        element.classList.add(ClassNames.HALF_OPACITY);
                    }
                }
            }
        }
        class MonsterTypeEl {
            constructor(monsterType) {
                this.element = create('img', ClassNames.MONSTER_TYPE);
                this.type = common_2.MonsterType.NONE;
                this.setType(monsterType);
            }
            getTypeOffsets() {
                const { offsetX, offsetY } = CardAssets.getTypeImageData(Number(this.type), vm);
                return { offsetX, offsetY };
            }
            setType(type) {
                this.type = type;
                const { offsetX, offsetY } = this.getTypeOffsets();
                this.element.style.backgroundPosition = `-${offsetX} -${offsetY}`;
            }
            getElement() {
                return this.element;
            }
        }
        class DungeonEditor {
            constructor(dungeonNames, onUpdate) {
                this.element = create('div');
                this.dungeonFloorTable = create('table', ClassNames.DUNGEON_EDITOR_FLOORS);
                this.dungeonFloorEls = [];
                this.addEnemyBtns = [];
                this.dungeonEnemies = [];
                this.addFloorBtn = create('button', ClassNames.FLOOR_ADD);
                this.importer = create('textarea');
                this.enemyPicture = new MonsterIcon(true);
                this.enemyLevelInput = create('input');
                this.dungeonHpInput = create('input');
                this.dungeonAtkInput = create('input');
                this.dungeonDefInput = create('input');
                this.enemyHpInput = create('input');
                this.enemyAtkInput = create('input');
                this.enemyDefInput = create('input');
                this.enemyResolveInput = create('input');
                this.enemyResistTypesInputs = new Map();
                this.enemyResistAttrInputs = new Map();
                this.activeFloorIdx = 0;
                this.activeEnemyIdx = 0;
                this.onUpdate = onUpdate;
                this.element.appendChild(document.createTextNode('Dungeon Editor Area Placeholder'));
                this.dungeonSelector = new GenericSelector(dungeonNames, (id) => {
                    this.onUpdate({ loadDungeon: id });
                });
                this.element.appendChild(this.dungeonSelector.getElement());
                const dungeonFloorContainer = create('div', ClassNames.FLOOR_CONTAINER);
                dungeonFloorContainer.appendChild(this.dungeonFloorTable);
                this.element.appendChild(dungeonFloorContainer);
                this.element.appendChild(create('br'));
                this.addFloorBtn.innerText = 'Add Floor';
                this.addFloorBtn.onclick = () => {
                    this.onUpdate({ addFloor: true });
                };
                this.element.appendChild(this.addFloorBtn);
                this.addFloor();
                this.setupDungeonMultiplierTable();
                this.monsterSelector = new MonsterSelector(fuzzy_search_1.prioritizedEnemySearch, ({ id }) => {
                    if (!id) {
                        return;
                    }
                    this.onUpdate({ activeEnemyId: id });
                });
                this.element.appendChild(this.enemyPicture.getElement());
                this.element.appendChild(this.monsterSelector.getElement());
                this.setupEnemyStatTable();
            }
            setupDungeonMultiplierTable() {
                const multiplierTable = create('table');
                const hpRow = create('tr');
                const atkRow = create('tr');
                const defRow = create('tr');
                const hpLabel = create('td');
                const atkLabel = create('td');
                const defLabel = create('td');
                hpLabel.innerText = 'HP multiplier';
                atkLabel.innerText = 'Attack multiplier';
                defLabel.innerText = 'Defense multiplier';
                hpRow.appendChild(hpLabel);
                atkRow.appendChild(atkLabel);
                defRow.appendChild(defLabel);
                hpRow.appendChild(this.dungeonHpInput);
                atkRow.appendChild(this.dungeonAtkInput);
                defRow.appendChild(this.dungeonDefInput);
                this.dungeonHpInput.onchange = () => {
                    this.onUpdate({ dungeonHpMultiplier: this.dungeonHpInput.value });
                };
                this.dungeonAtkInput.onchange = () => {
                    this.onUpdate({ dungeonAtkMultiplier: this.dungeonAtkInput.value });
                };
                this.dungeonDefInput.onchange = () => {
                    this.onUpdate({ dungeonDefMultiplier: this.dungeonDefInput.value });
                };
                multiplierTable.appendChild(hpRow);
                multiplierTable.appendChild(atkRow);
                multiplierTable.appendChild(defRow);
                this.element.appendChild(multiplierTable);
            }
            setDungeonMultipliers(hpMultText, atkMultText, defMultText) {
                this.dungeonHpInput.value = hpMultText;
                this.dungeonAtkInput.value = atkMultText;
                this.dungeonDefInput.value = defMultText;
            }
            setupEnemyStatTable() {
                const statTable = create('table');
                const lvRow = create('tr');
                const hpRow = create('tr');
                const atkRow = create('tr');
                const defRow = create('tr');
                const resolveRow = create('tr');
                const resistTypesRow = create('tr');
                const resistAttrRow = create('tr');
                this.enemyLevelInput.type = 'number';
                this.enemyHpInput.type = 'number';
                this.enemyAtkInput.type = 'number';
                this.enemyDefInput.type = 'number';
                this.enemyResolveInput.type = 'number';
                this.enemyHpInput.disabled = true;
                this.enemyAtkInput.disabled = true;
                this.enemyDefInput.disabled = true;
                this.enemyResolveInput.disabled = true;
                const lvLabel = create('td');
                const hpLabel = create('td');
                const atkLabel = create('td');
                const defLabel = create('td');
                const resolveLabel = create('td');
                const resistTypesLabel = create('td');
                const resistAttrLabel = create('td');
                lvLabel.innerText = 'Level';
                hpLabel.innerText = 'Health';
                atkLabel.innerText = 'Attack';
                defLabel.innerText = 'Defense';
                resolveLabel.innerText = 'Resolve';
                resistTypesLabel.innerText = 'Resist Type';
                resistAttrLabel.innerText = 'Resist Attr';
                lvRow.appendChild(lvLabel);
                hpRow.appendChild(hpLabel);
                atkRow.appendChild(atkLabel);
                defRow.appendChild(defLabel);
                resolveRow.appendChild(resolveLabel);
                resistTypesRow.appendChild(resistTypesLabel);
                resistAttrRow.appendChild(resistAttrLabel);
                const lvCell = create('td');
                const hpCell = create('td');
                const atkCell = create('td');
                const defCell = create('td');
                const resolveCell = create('td');
                const resistTypesCell = create('td');
                const resistAttrCell = create('td');
                lvCell.appendChild(this.enemyLevelInput);
                hpCell.appendChild(this.enemyHpInput);
                atkCell.appendChild(this.enemyAtkInput);
                defCell.appendChild(this.enemyDefInput);
                resolveCell.appendChild(this.enemyResolveInput);
                for (let i = 0; i < 16; i++) {
                    if (i == 9 || i == 10 || i == 11 || i == 13) {
                        continue;
                    }
                    const t = i;
                    const typeImage = new MonsterTypeEl(t);
                    const typeToggle = new ToggleableImage(typeImage.getElement(), (active) => {
                        if (active) {
                            this.onUpdate({ addTypeResist: t });
                        }
                        else {
                            this.onUpdate({ removeTypeResist: t });
                        }
                    }, false);
                    this.enemyResistTypesInputs.set(t, typeToggle);
                    resistTypesCell.appendChild(typeImage.getElement());
                }
                const fire = new LayeredAsset([AssetEnum.SHIELD_BASE, AssetEnum.FIRE_TRANSPARENT], (active) => {
                    if (active) {
                        this.onUpdate({ addAttrResist: common_2.Attribute.FIRE });
                    }
                    else {
                        this.onUpdate({ removeAttrResist: common_2.Attribute.FIRE });
                    }
                }, false);
                this.enemyResistAttrInputs.set(common_2.Attribute.FIRE, fire);
                resistAttrCell.appendChild(fire.getElement());
                const water = new LayeredAsset([AssetEnum.SHIELD_BASE, AssetEnum.WATER_TRANSPARENT], (active) => {
                    if (active) {
                        this.onUpdate({ addAttrResist: common_2.Attribute.WATER });
                    }
                    else {
                        this.onUpdate({ removeAttrResist: common_2.Attribute.WATER });
                    }
                }, false);
                this.enemyResistAttrInputs.set(common_2.Attribute.WATER, water);
                resistAttrCell.appendChild(water.getElement());
                const wood = new LayeredAsset([AssetEnum.SHIELD_BASE, AssetEnum.WOOD_TRANSPARENT], (active) => {
                    if (active) {
                        this.onUpdate({ addAttrResist: common_2.Attribute.WOOD });
                    }
                    else {
                        this.onUpdate({ removeAttrResist: common_2.Attribute.WOOD });
                    }
                }, false);
                this.enemyResistAttrInputs.set(common_2.Attribute.WOOD, wood);
                resistAttrCell.appendChild(wood.getElement());
                const light = new LayeredAsset([AssetEnum.SHIELD_BASE, AssetEnum.LIGHT_TRANSPARENT], (active) => {
                    if (active) {
                        this.onUpdate({ addAttrResist: common_2.Attribute.LIGHT });
                    }
                    else {
                        this.onUpdate({ removeAttrResist: common_2.Attribute.LIGHT });
                    }
                }, false);
                this.enemyResistAttrInputs.set(common_2.Attribute.LIGHT, light);
                resistAttrCell.appendChild(light.getElement());
                const dark = new LayeredAsset([AssetEnum.SHIELD_BASE, AssetEnum.DARK_TRANSPARENT], (active) => {
                    if (active) {
                        this.onUpdate({ addAttrResist: common_2.Attribute.DARK });
                    }
                    else {
                        this.onUpdate({ removeAttrResist: common_2.Attribute.DARK });
                    }
                }, false);
                this.enemyResistAttrInputs.set(common_2.Attribute.DARK, dark);
                resistAttrCell.appendChild(dark.getElement());
                lvRow.appendChild(lvCell);
                hpRow.appendChild(hpCell);
                atkRow.appendChild(atkCell);
                defRow.appendChild(defCell);
                resolveRow.appendChild(resolveCell);
                resistTypesRow.appendChild(resistTypesCell);
                resistAttrRow.appendChild(resistAttrCell);
                this.enemyLevelInput.onchange = () => {
                    let v = Number(this.enemyLevelInput.value);
                    if (isNaN(v)) {
                        v = 10;
                    }
                    v = Math.round(v);
                    if (v < 1) {
                        v = 1;
                    }
                    if (v > 100) {
                        v = 100;
                    }
                    this.onUpdate({ enemyLevel: v });
                };
                statTable.appendChild(lvRow);
                statTable.appendChild(hpRow);
                statTable.appendChild(atkRow);
                statTable.appendChild(defRow);
                statTable.appendChild(resolveRow);
                statTable.appendChild(resistTypesRow);
                statTable.appendChild(resistAttrRow);
                this.element.appendChild(statTable);
            }
            addFloor() {
                const floorIdx = this.dungeonFloorEls.length;
                const floor = create('tr');
                const label = create('td');
                const floorName = create('div');
                floorName.innerText = `F${this.dungeonFloorEls.length + 1}`;
                label.appendChild(floorName);
                const deleteFloorBtn = create('button', ClassNames.FLOOR_DELETE);
                deleteFloorBtn.innerText = '[-]';
                deleteFloorBtn.onclick = () => {
                    this.onUpdate({ removeFloor: floorIdx });
                };
                floor.appendChild(label);
                label.appendChild(deleteFloorBtn);
                const addEnemyBtn = create('button', ClassNames.FLOOR_ENEMY_ADD);
                addEnemyBtn.innerText = '+';
                addEnemyBtn.onclick = () => {
                    this.onUpdate({ activeFloor: floorIdx, addEnemy: true });
                };
                this.addEnemyBtns.push(addEnemyBtn);
                floor.appendChild(addEnemyBtn);
                this.addEnemy(this.dungeonFloorEls.length);
                this.dungeonFloorTable.appendChild(floor);
                this.dungeonFloorEls.push(floor);
            }
            addEnemy(floorIdx) {
                const enemy = new MonsterIcon(true);
                enemy.update(4014, 0, 0, -1, '', 0);
                if (floorIdx >= this.dungeonEnemies.length) {
                    this.dungeonEnemies.push([]);
                }
                this.dungeonEnemies[floorIdx].push(enemy);
                const enemyIdx = this.dungeonEnemies[floorIdx].length - 1;
                enemy.getElement().onclick = () => {
                    this.onUpdate({ activeFloor: floorIdx, activeEnemy: enemyIdx });
                };
                const node = this.addEnemyBtns[floorIdx].parentNode;
                if (node) {
                    node.insertBefore(enemy.getElement(), this.addEnemyBtns[floorIdx]);
                }
            }
            setActiveEnemy(floor, monster) {
                for (let i = 0; i < this.dungeonEnemies.length; i++) {
                    for (let j = 0; j < this.dungeonEnemies[i].length; j++) {
                        let el = this.dungeonEnemies[i][j].getElement();
                        if (i == floor && j == monster) {
                            el.className = ClassNames.ICON_SELECTED;
                            el.scrollIntoView({ block: 'nearest' });
                            const id = this.dungeonEnemies[i][j].id;
                            this.enemyPicture.update(id, 0, 0, -1, '', 0);
                            this.monsterSelector.setId(id);
                        }
                        else {
                            el.className = ClassNames.ICON;
                        }
                    }
                }
            }
            setEnemies(enemyIdsByFloor) {
                console.log(enemyIdsByFloor);
                while (this.dungeonFloorEls.length < enemyIdsByFloor.length) {
                    this.addFloor();
                }
                for (let i = 0; i < Math.max(enemyIdsByFloor.length, this.dungeonFloorEls.length); i++) {
                    if (i >= enemyIdsByFloor.length) {
                        superHide(this.dungeonFloorEls[i]);
                        continue;
                    }
                    superShow(this.dungeonFloorEls[i]);
                    let enemyIds = enemyIdsByFloor[i];
                    let floorEnemies = this.dungeonEnemies[i];
                    while (floorEnemies.length < enemyIds.length) {
                        this.addEnemy(i);
                    }
                    for (let j = 0; j < Math.max(enemyIds.length, floorEnemies.length); j++) {
                        if (j >= enemyIds.length) {
                            superHide(floorEnemies[j].getElement());
                            continue;
                        }
                        superShow(floorEnemies[j].getElement());
                        floorEnemies[j].update(enemyIds[j], 0, 0, -1, '', 0);
                        // this.onUpdate({activeEnemyId: enemyIds[j]});
                        console.log('Now setting to id: ' + String(enemyIds[j]));
                    }
                }
            }
            setEnemyStats(lv, hp, atk, def, resolve, typeResists, attrResists) {
                this.enemyLevelInput.value = String(lv);
                this.enemyHpInput.value = String(hp);
                this.enemyAtkInput.value = String(atk);
                this.enemyDefInput.value = String(def);
                this.enemyResolveInput.value = String(resolve);
                for (const [key, toggle] of [...this.enemyResistTypesInputs.entries()]) {
                    toggle.setActive(typeResists.types.includes(key));
                }
                for (const [key, asset] of [...this.enemyResistAttrInputs.entries()]) {
                    asset.setActive(attrResists.attrs.includes(key));
                }
            }
            getElement() {
                return this.element;
            }
        }
        exports.DungeonEditor = DungeonEditor;
        class BattleDisplay {
            constructor(onUpdate) {
                this.enemyPicture = create('img');
                this.enemySelectors = [];
                this.onUpdate = onUpdate;
            }
        }
        class DungeonPane {
            constructor(dungeonNames, onUpdate) {
                this.tabs = new TabbedComponent(['Dungeon', 'Editor', 'Save/Load']);
                this.onUpdate = onUpdate;
                this.dungeonEditor = new DungeonEditor(dungeonNames, onUpdate);
                this.battleDisplay = new BattleDisplay(onUpdate);
                this.tabs.getTab('Editor').appendChild(this.dungeonEditor.getElement());
            }
            getElement() {
                return this.tabs.getElement();
            }
        }
        exports.DungeonPane = DungeonPane;
        class ValeriaDisplay {
            constructor() {
                this.element_ = create('div', ClassNames.VALERIA);
                const table = create('table');
                const row = create('tr');
                this.panes = [];
                for (let i = 0; i < 3; i++) {
                    const pane = create('td');
                    this.panes.push(pane);
                    row.appendChild(pane);
                }
                this.leftTabs = new TabbedComponent(['Monster Editor', 'Combo Editor']);
                this.panes[0].appendChild(this.leftTabs.getElement());
                table.appendChild(row);
                this.element_.appendChild(table);
            }
            getElement() {
                return this.element_;
            }
        }
        exports.ValeriaDisplay = ValeriaDisplay;
    });
    define("combo_container", ["require", "exports", "common", "templates"], function (require, exports, common_3, templates_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        class Combo {
            constructor(count, attribute, enhanced = 0, shape) {
                this.count = count;
                this.attribute = attribute;
                if (enhanced > count) {
                    enhanced = count;
                }
                this.enhanced = enhanced;
                if (shape == common_3.Shape.L && count != 5 ||
                    shape == common_3.Shape.COLUMN && (count < 4 || count > 6) ||
                    shape == common_3.Shape.CROSS && count != 5 ||
                    shape == common_3.Shape.BOX && count != 9 ||
                    shape == common_3.Shape.ROW && count < 5) {
                    console.warn(`Invalid Shape and count combination. Changing shape to AMORPHOUS`);
                    shape = common_3.Shape.AMORPHOUS;
                }
                this.shape = shape;
            }
            recount() {
                if (this.shape == common_3.Shape.L || this.shape == common_3.Shape.CROSS) {
                    this.count = 5;
                }
                if (this.shape == common_3.Shape.BOX) {
                    this.count = 9;
                }
                if (this.shape == common_3.Shape.COLUMN) {
                    console.warn('TODO: Handle auto changing to column');
                }
                if (this.enhanced > this.count) {
                    this.enhanced = this.count;
                }
            }
        }
        exports.Combo = Combo;
        class ComboContainer {
            constructor() {
                this.combos = {};
                for (const c of common_3.COLORS) {
                    this.combos[c] = [];
                }
                this.boardWidth = 6;
                this.maxVisibleCombos = 14;
                this.bonusCombosLeader = 0;
                this.bonusCombosActive = 0;
                this.onUpdate = [];
                this.comboEditor = new templates_1.ComboEditor();
                this.comboEditor.commandInput.onkeyup = (e) => {
                    if (e.keyCode == 13) {
                        const remainingCommands = this.doCommands(this.comboEditor.commandInput.value);
                        this.comboEditor.commandInput.value = remainingCommands.join(' ');
                    }
                };
                const colorToInputs = this.comboEditor.getInputElements();
                for (const c in colorToInputs) {
                    for (const i in colorToInputs[c]) {
                        const idx = Number(i);
                        const { shapeCountEl, enhanceEl } = colorToInputs[c][i];
                        // TODO: Add onclick modifiers to these.
                        shapeCountEl.onblur = () => {
                            const v = shapeCountEl.value.replace(/\s/g, '');
                            // Delete this combo.
                            let letter = v[0] || 'NaN';
                            let count = 0;
                            let shape = 'A';
                            if (v.length == 0 || v == '0') {
                            }
                            else if (letter == 'R') {
                                count = this.boardWidth;
                                shape = 'R';
                                if (v.length > 1 && Number(v.substring(1)) > count) {
                                    count = Number(v.substring(1));
                                }
                                shape = 'R';
                            }
                            else if (letter == 'C') {
                                count = this.boardWidth - 1;
                                shape = 'C';
                            }
                            else if ('LXB'.indexOf(letter) >= 0) {
                                shape = letter;
                                count = letter == 'B' ? 9 : 5;
                            }
                            else if (Number(v) != NaN) {
                                count = Number(v);
                            }
                            const combos = this.combos[c];
                            // Only possibly adding a combo.
                            if (idx >= combos.length) {
                                if (count == 0) {
                                    // Nothing to add, return early.
                                    shapeCountEl.value = '';
                                    return;
                                }
                                this.addShape(shape, `${count}${c}`);
                                // Modify or delete a combo.
                            }
                            else {
                                if (count == 0) {
                                    this.delete(`${c}${idx}`);
                                }
                                else {
                                    combos[idx].shape = common_3.LetterToShape[shape];
                                    combos[idx].count = count;
                                    combos[idx].recount();
                                }
                            }
                            this.update();
                        };
                        enhanceEl.onblur = () => {
                            const combos = this.combos[c];
                            const v = Number(enhanceEl.value);
                            if (v != NaN && idx < combos.length) {
                                combos[i].enhanced = v;
                                combos[i].recount();
                                this.update();
                            }
                            else {
                                enhanceEl.value = '';
                            }
                        };
                    }
                }
            }
            getElement() {
                return this.comboEditor.getElement();
            }
            doCommands(cmdsString) {
                const cmds = cmdsString.split(' ')
                    .map((c) => c.trim())
                    .filter((c) => Boolean(c));
                let executed = 0;
                for (const i in cmds) {
                    if (!this.doCommand(cmds[i])) {
                        break;
                    }
                    executed++;
                }
                this.update();
                return cmds.slice(executed);
            }
            doCommand(cmd) {
                if (cmd == 'D') {
                    return this.doCommand('Daa');
                }
                if (cmd.startsWith('Da') || cmd.startsWith('DA')) {
                    return this.deleteAll(cmd.substring(2));
                }
                if (cmd.startsWith('D')) {
                    return this.delete(cmd.substring(1));
                }
                if ('XCLBR'.indexOf(cmd[0]) >= 0) {
                    return this.addShape(cmd[0], cmd.substring(1));
                }
                let maybeMatch = cmd.match(/^\d+/);
                if (maybeMatch) {
                    let count = Number(maybeMatch[0]);
                    cmd = cmd.substring(maybeMatch[0].length);
                    if (!cmd) {
                        // Requires at least one color.
                        return false;
                    }
                    return this.add(count, cmd);
                }
                if (cmd[0] in this.combos) {
                    return this.add(3, cmd);
                }
                return false;
            }
            addShape(shape, cmd) {
                let count = 3;
                const maybeCount = cmd.match(/^\d+/);
                if (maybeCount) {
                    count = Number(maybeCount[0]);
                    cmd = cmd.substring(maybeCount[0].length);
                }
                switch (shape) {
                    case 'R':
                        count = Math.max(count, this.boardWidth);
                        break;
                    case 'C':
                        count = this.boardWidth - 1;
                        break;
                    case 'L':
                    case 'X':
                        count = 5;
                        break;
                    case 'B':
                        count = 9;
                        break;
                }
                return this.add(count, cmd, common_3.LetterToShape[shape] || common_3.Shape.AMORPHOUS);
            }
            add(count, cmd, shape = common_3.Shape.AMORPHOUS) {
                if (count < 3) {
                    count = 3;
                }
                let added = false;
                while (cmd) {
                    if (!(cmd[0] in this.combos)) {
                        break;
                    }
                    const c = cmd[0];
                    let e = 0;
                    cmd = cmd.substring(1);
                    const maybeEnhance = cmd.match(/^\d+/);
                    if (maybeEnhance) {
                        e = Number(maybeEnhance[0]);
                        cmd = cmd.substring(maybeEnhance[0].length);
                    }
                    this.combos[c].push(new Combo(count, common_3.COLORS.indexOf(c), e, shape));
                    added = true;
                }
                if (cmd) {
                    console.warn('Unused values in cmd: ' + cmd);
                }
                return added;
            }
            // TODO
            delete(cmd) {
                let colorsToDelete = [];
                while (cmd && cmd[0] in this.combos) {
                    colorsToDelete.push(cmd[0]);
                    cmd = cmd.substring(1);
                }
                let idxToDelete = 1;
                let fromEnd = true;
                if (cmd) {
                    if (cmd[0] == '-') {
                        fromEnd = true;
                        cmd = cmd.substring(1);
                    }
                    else {
                        fromEnd = false;
                    }
                    const maybeIdx = cmd.match(/^\d+/);
                    if (maybeIdx) {
                        cmd = cmd.substring(maybeIdx[0].length);
                        idxToDelete = Number(maybeIdx[0]);
                    }
                    if (cmd) {
                        console.log(`Unused delete args: ${cmd}`);
                    }
                }
                let anyDeleted = false;
                for (const c of colorsToDelete) {
                    const idx = fromEnd ? this.combos[c].length - idxToDelete : idxToDelete - 0;
                    if (idx >= 0 && idx < this.combos[c].length) {
                        this.combos[c].splice(idx, 1);
                        anyDeleted = true;
                        console.log(`Deleting from ${c}, combo #${idx}`);
                    }
                    else {
                        console.warn(`Index out of bounds: ${idx}`);
                    }
                }
                return anyDeleted;
            }
            deleteAll(cmd) {
                if (cmd[0].toLowerCase() == 'a') {
                    for (const c in this.combos) {
                        this.combos[c].length = 0;
                    }
                    return true;
                }
                // Assume to delete all color values present.
                for (const c of cmd) {
                    if (!(c in this.combos)) {
                        console.warn('Not valid color: ' + c);
                    }
                    this.combos[c].length = 0;
                }
                return true;
            }
            update() {
                const data = {};
                for (const c in this.combos) {
                    data[c] = this.combos[c].map((combo) => {
                        let countString = common_3.ShapeToLetter[combo.shape];
                        if (combo.shape == common_3.Shape.AMORPHOUS) {
                            countString = `${combo.count}`;
                        }
                        if (combo.shape == common_3.Shape.ROW || combo.shape == common_3.Shape.COLUMN) {
                            countString += `${combo.count}`;
                        }
                        return {
                            shapeCount: countString,
                            enhance: combo.enhanced,
                        };
                    });
                }
                this.comboEditor.update(data);
                for (const fn of this.onUpdate) {
                    fn(this);
                }
            }
            comboCount() {
                let total = 0;
                for (const c in this.combos) {
                    total += this.combos[c].length;
                }
                return total + this.bonusCombosLeader + this.bonusCombosActive;
            }
            setBoardWidth(width) {
                this.boardWidth = width;
                // TODO: Update combo counts as well.
            }
            getBoardSize() {
                return this.boardWidth * (this.boardWidth - 1);
            }
        }
        exports.ComboContainer = ComboContainer;
    });
    define("monster_instance", ["require", "exports", "common", "templates", "fuzzy_search"], function (require, exports, common_4, templates_2, fuzzy_search_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        const AWAKENING_BONUS = new Map([
            [common_4.Awakening.HP, 500],
            [common_4.Awakening.HP_MINUS, -5000],
            [common_4.Awakening.ATK, 100],
            [common_4.Awakening.ATK_MINUS, -1000],
            [common_4.Awakening.RCV, 200],
            [common_4.Awakening.RCV_MINUS, -2000],
        ]);
        const LatentHp = new Map([
            [common_4.Latent.HP, 0.015],
            [common_4.Latent.HP_PLUS, 0.045],
            [common_4.Latent.ALL_STATS, 0.03],
        ]);
        const LatentAtk = new Map([
            [common_4.Latent.ATK, 0.01],
            [common_4.Latent.ATK_PLUS, 0.03],
            [common_4.Latent.ALL_STATS, 0.02],
        ]);
        const LatentRcv = new Map([
            [common_4.Latent.RCV, 0.1],
            [common_4.Latent.RCV_PLUS, 0.3],
            [common_4.Latent.ALL_STATS, 0.2],
        ]);
        const LatentToPdchu = new Map([
            [common_4.Latent.HP, 'hp'],
            [common_4.Latent.ATK, 'atk'],
            [common_4.Latent.RCV, 'rcv'],
            [common_4.Latent.HP_PLUS, 'hp+'],
            [common_4.Latent.ATK_PLUS, 'atk+'],
            [common_4.Latent.RCV_PLUS, 'rcv+'],
            [common_4.Latent.TIME, 'te'],
            [common_4.Latent.TIME_PLUS, 'te+'],
            [common_4.Latent.AUTOHEAL, 'ah'],
            [common_4.Latent.RESIST_FIRE, 'rres'],
            [common_4.Latent.RESIST_WATER, 'bres'],
            [common_4.Latent.RESIST_WOOD, 'gres'],
            [common_4.Latent.RESIST_LIGHT, 'lres'],
            [common_4.Latent.RESIST_DARK, 'dres'],
            [common_4.Latent.RESIST_FIRE_PLUS, 'rres+'],
            [common_4.Latent.RESIST_WATER_PLUS, 'bres+'],
            [common_4.Latent.RESIST_WOOD_PLUS, 'gres+'],
            [common_4.Latent.RESIST_LIGHT_PLUS, 'lres+'],
            [common_4.Latent.RESIST_DARK_PLUS, 'dres+'],
            [common_4.Latent.SDR, 'sdr'],
            [common_4.Latent.ALL_STATS, 'all'],
            [common_4.Latent.EVO, 'evk'],
            [common_4.Latent.AWOKEN, 'awk'],
            [common_4.Latent.ENHANCED, 'enk'],
            [common_4.Latent.REDEEMABLE, 'rek'],
            [common_4.Latent.GOD, 'gok'],
            [common_4.Latent.DEVIL, 'dek'],
            [common_4.Latent.DRAGON, 'drk'],
            [common_4.Latent.MACHINE, 'mak'],
            [common_4.Latent.BALANCED, 'bak'],
            [common_4.Latent.ATTACKER, 'aak'],
            [common_4.Latent.PHYSICAL, 'phk'],
            [common_4.Latent.HEALER, 'hek'],
        ]);
        const PdchuToLatent = new Map();
        for (const key of LatentToPdchu.keys()) {
            PdchuToLatent.set(LatentToPdchu.get(key) || '', key);
        }
        function validatePlus(value) {
            value = Math.round(value);
            if (value < 0 || value > 99) {
                return 0;
            }
            return value;
        }
        function calcScaleStat(card, max, min, level, growth) {
            // Handle Level Limit Breakthrough.
            if (level >= 100) {
                const multiplier = 1 + card.limitBreakStatGain / 100 * (level - 99) / 11;
                return Math.round(max * multiplier);
            }
            const diff = max - min;
            const frac = (level - 1) / (card.maxLevel - 1);
            const added = Math.round(Math.pow(frac, growth) * diff);
            return min + added;
        }
        class MonsterInstance {
            constructor(id = -1) {
                this.id = id;
                this.attribute = common_4.Attribute.NONE;
                this.level = 1;
                this.awakenings = 0;
                this.latents = [];
                this.superAwakeningIdx = -1;
                this.hpPlus = 0;
                this.atkPlus = 0;
                this.rcvPlus = 0;
                this.inheritId = -1;
                this.inheritLevel = 1;
                this.inheritPlussed = false;
                this.bound = false;
                this.el = templates_2.create('div');
                this.inheritIcon = new templates_2.MonsterInherit();
                this.icon = new templates_2.MonsterIcon();
                this.latentIcon = new templates_2.MonsterLatent();
                this.el.appendChild(this.inheritIcon.getElement());
                this.el.appendChild(this.icon.getElement());
                this.el.appendChild(this.latentIcon.getElement());
                this.setId(id);
            }
            getElement() {
                return this.el;
            }
            setId(id) {
                if (id >= 0 && !(id in common_4.vm.model.cards)) {
                    console.warn('Invalid monster id: ' + String(id));
                    return;
                }
                this.id = id;
                if (id == -1) {
                    this.level = 1;
                    this.awakenings = 0;
                    this.latents.length = 0;
                    this.superAwakeningIdx = -1;
                    this.setHpPlus(0);
                    this.setAtkPlus(0);
                    this.setRcvPlus(0);
                    // this.card = vm.model.cards[4014];
                    return;
                }
                const c = this.getCard();
                // If the level is above the max level of the new card OR
                // the level is maxed out from previously, set the level to c's max level.
                if (this.level > c.maxLevel && !c.isLimitBreakable ||
                    !c || this.level == c.maxLevel && this.level < c.maxLevel) {
                    this.setLevel(c.maxLevel);
                }
                // If the awakening level is above the max level of the new card OR
                // the awakening level is maxed out from previously, set awakening level to
                // c's max awakening level.
                if (this.awakenings > c.awakenings.length ||
                    !c || this.awakenings == c.awakenings.length) {
                    this.awakenings = c.awakenings.length;
                }
                // Attempt to copy the current latents.
                const latentCopy = this.latents;
                this.latents = [];
                for (const latent of latentCopy) {
                    this.addLatent(latent);
                }
                // If c has the same SA as our current one, keep that.
                if (this.superAwakeningIdx > -1 && c) {
                    const currentSa = c.superAwakenings[this.superAwakeningIdx];
                    if (c.superAwakenings.some((sa) => sa == currentSa)) {
                        this.superAwakeningIdx = c.superAwakenings.indexOf(currentSa);
                    }
                    else {
                        this.superAwakeningIdx = -1;
                    }
                }
                else {
                    this.superAwakeningIdx = -1;
                }
                if (!CardAssets.canPlus(c)) {
                    this.setHpPlus(0);
                    this.setAtkPlus(0);
                    this.setRcvPlus(0);
                    this.inheritId = -1;
                }
                else {
                    this.setHpPlus(99);
                    this.setAtkPlus(99);
                    this.setRcvPlus(99);
                }
            }
            update(isMultiplayer = false) {
                const plusses = this.hpPlus + this.atkPlus + this.rcvPlus;
                // A monster must be above level 99, max plussed, and in solo play for
                // SAs to be active.  This will change later when 3P allows SB.
                const unavailableReason = [
                    isMultiplayer ? 'Multiplayer' : '',
                    plusses != 297 ? 'Unplussed' : '',
                    this.level < 100 ? 'Not Limit Broken' : '',
                ].filter(Boolean).join(', ');
                this.icon.update(this.id, plusses, this.awakenings, this.superAwakeningIdx, unavailableReason, this.level);
                this.inheritIcon.update(this.inheritId, this.inheritLevel, this.inheritPlussed);
                this.latentIcon.update([...this.latents]);
            }
            toJson() {
                const json = {};
                if (this.id >= 0) {
                    json.id = this.id;
                    if (this.level > 1) {
                        json.level = this.level;
                    }
                    // TODO: Make max awakening default;
                    json.awakenings = this.awakenings;
                    if (this.latents.length) {
                        json.latents = [...this.latents];
                    }
                    if (this.hpPlus) {
                        json.hpPlus = this.hpPlus;
                    }
                    if (this.atkPlus) {
                        json.atkPlus = this.atkPlus;
                    }
                    if (this.rcvPlus) {
                        json.rcvPlus = this.rcvPlus;
                    }
                    if (this.inheritId >= 0) {
                        json.inheritId = this.inheritId;
                        json.inheritLevel = this.inheritLevel;
                        json.inheritPlussed = this.inheritPlussed;
                    }
                    if (this.superAwakeningIdx >= 0) {
                        json.superAwakeningIdx = this.superAwakeningIdx;
                    }
                }
                return json;
            }
            getCard() {
                let c = common_4.vm.model.cards[this.id];
                if (c) {
                    return c;
                }
                return common_4.DEFAULT_CARD;
            }
            getInheritCard() {
                if (this.inheritId == 0) {
                    return common_4.DEFAULT_CARD;
                }
                return common_4.vm.model.cards[this.inheritId];
            }
            toPdchu() {
                let string = '';
                if (this.id in common_4.vm.model.cards) {
                    string += String(this.id);
                }
                else {
                    string += 'sdr';
                }
                const card = this.getCard();
                const inherit = this.getInheritCard();
                if (inherit) {
                    string += ` (${this.inheritId}`;
                    if (inherit.attribute == card.attribute) {
                        let stats = ' |';
                        if (this.inheritLevel != 1) {
                            stats += ` lv${this.inheritLevel}`;
                        }
                        if (this.inheritPlussed) {
                            stats += ' +297';
                        }
                        if (stats.length > 2) {
                            string += stats;
                        }
                    }
                    string += ')';
                }
                if (this.latents.length) {
                    const counts = new Map();
                    for (const latent of this.latents) {
                        const name = LatentToPdchu.get(latent) || 'sdr';
                        counts.set(name, (counts.get(name) || 0) + 1);
                    }
                    string += '[';
                    for (const name in counts) {
                        if (counts.get(name) == 1) {
                            string += name + ',';
                        }
                        else {
                            string += name + `*${counts.get(name)},`;
                        }
                    }
                    string = string.substring(0, string.length - 1) + ']';
                }
                let stats = ' |';
                if (this.level != card.maxLevel) {
                    stats += ` lv${this.level}`;
                }
                if (this.awakenings != card.awakenings.length) {
                    stats += ` aw${this.awakenings}`;
                }
                if (this.hpPlus != 99 || this.atkPlus != 99 || this.rcvPlus != 99) {
                    stats += ` +H${this.hpPlus} +A${this.atkPlus} +R${this.rcvPlus}`;
                }
                if (this.superAwakeningIdx >= 0) {
                    stats += ` sa${this.superAwakeningIdx + 1}`;
                }
                if (stats.length > 2) {
                    string += stats;
                }
                return string;
            }
            fromPdchu(str) {
                let s = str.trim().toLowerCase();
                let assistPlussed = false;
                let assistLevel = 1;
                let latents = [];
                let hpPlus = 99;
                let atkPlus = 99;
                let rcvPlus = 99;
                let awakeningLevel = 9;
                let superAwakeningIdx = -1;
                let level = 99;
                const MONSTER_NAME_REGEX = /^\s*((\"[^"]+\")|[^\(\[\|]*)/;
                const ASSIST_REGEX = /\(\s*("[^"]*")?[^\)]+\)/;
                const ASSIST_NAME_REGEX = /^\s*("[^"]+"|[^|]+)/;
                const LATENT_REGEX = /\[[^\]]*\]/;
                const monsterNameMatch = s.match(MONSTER_NAME_REGEX);
                if (!monsterNameMatch) {
                    return;
                }
                let monsterName = monsterNameMatch[0].trim();
                if (monsterName.startsWith('"')) {
                    monsterName = monsterName.substring(1);
                }
                if (monsterName.endsWith('"')) {
                    monsterName = monsterNameMatch[0].substring(0, monsterName.length - 1);
                }
                // Remove monster name.
                s = s.replace(monsterNameMatch[0], '');
                // Handle assist.
                let assistName = '';
                const assistMatch = s.match(ASSIST_REGEX);
                if (assistMatch) {
                    let assistString = assistMatch[0].substring(1, assistMatch[0].length - 1).trim();
                    const assistNameMatch = assistString.match(ASSIST_NAME_REGEX);
                    if (assistNameMatch) {
                        assistName = assistNameMatch[0].trim();
                        if (assistName.startsWith('"')) {
                            assistName = assistName.substring(1);
                        }
                        if (assistName.endsWith('"')) {
                            assistName = assistName.substring(0, assistName.length - 1);
                        }
                        const pieces = assistString.replace(assistNameMatch[0], '').split('|');
                        if (pieces.length > 1) {
                            const assistStatString = pieces.slice(1).join('');
                            const lvMatch = assistStatString.match(/lv\d+/);
                            if (lvMatch) {
                                assistLevel = Number(lvMatch[0].substring(2));
                            }
                            const plusMatch = assistStatString.match(/\+297/);
                            if (plusMatch) {
                                assistPlussed = true;
                            }
                        }
                    }
                    s = s.replace(assistMatch[0], '').trim();
                }
                let latentMatch = s.match(LATENT_REGEX);
                if (latentMatch) {
                    const latentPieces = latentMatch[0]
                        .substring(1, latentMatch[0].length - 1)
                        .trim()
                        .split(',')
                        .map((piece) => piece.trim())
                        .filter((a) => a.length > 0);
                    for (const piece of latentPieces) {
                        const latentMatch = piece.match(/\w+\+?/);
                        if (!latentMatch) {
                            continue;
                        }
                        const latentName = latentMatch[0];
                        let latent = PdchuToLatent.get(String(latentName)) || common_4.Latent.SDR;
                        if (latent == undefined) {
                            continue;
                        }
                        if (piece.includes('*')) {
                            for (let i = 0; i < Number(piece[piece.length - 1]); i++) {
                                latents.push(latent);
                            }
                        }
                        else {
                            latents.push(latent);
                        }
                    }
                    s.replace(latentMatch[0], '');
                }
                // Handle Stats.
                if (s.includes('|')) {
                    s = s.substring(s.indexOf('|'));
                    const saMatch = s.match(/sa\d/);
                    if (saMatch) {
                        superAwakeningIdx = Number(saMatch[0].substring(2)) - 1;
                        level = 110;
                    }
                    const lvMatch = s.match(/lv\d+/);
                    if (lvMatch) {
                        level = Number(lvMatch[0].substring(2));
                    }
                    const awakeningMatch = s.match(/aw\d/);
                    if (awakeningMatch) {
                        awakeningLevel = Number(awakeningMatch[0].substring(2));
                    }
                    const plusMatch = s.match(/\+0/);
                    if (plusMatch) {
                        hpPlus = 0;
                        atkPlus = 0;
                        rcvPlus = 0;
                    }
                    const plusHpMatch = s.match(/\+h\d+/);
                    if (plusHpMatch) {
                        hpPlus = Number(plusHpMatch[0].substring(2));
                    }
                    const plusAtkMatch = s.match(/\+a\d+/);
                    if (plusAtkMatch) {
                        atkPlus = Number(plusAtkMatch[0].substring(2));
                    }
                    const plusRcvMatch = s.match(/\+r\d+/);
                    if (plusRcvMatch) {
                        rcvPlus = Number(plusRcvMatch[0].substring(2));
                    }
                }
                const bestGuessIds = fuzzy_search_2.fuzzyMonsterSearch(monsterName, 20, fuzzy_search_2.prioritizedMonsterSearch);
                if (bestGuessIds.length == 0) {
                    console.warn('No Monsters matched');
                    return;
                }
                this.inheritPlussed = assistPlussed;
                this.inheritLevel = assistLevel;
                this.latents.length = 0;
                this.awakenings = awakeningLevel;
                this.setId(bestGuessIds[0]);
                this.superAwakeningIdx = superAwakeningIdx;
                this.setLevel(level);
                for (const latent of latents) {
                    this.addLatent(/** @type {!Latent}*/ (latent));
                }
                this.setHpPlus(hpPlus);
                this.setAtkPlus(atkPlus);
                this.setRcvPlus(rcvPlus);
                if (assistName) {
                    const bestGuessInheritIds = fuzzy_search_2.fuzzyMonsterSearch(assistName, 20, fuzzy_search_2.prioritizedInheritSearch);
                    if (bestGuessInheritIds.length == 0) {
                        this.inheritId = -1;
                        console.warn('No inherits matched');
                    }
                    else {
                        this.inheritId = bestGuessInheritIds[0];
                    }
                }
                else {
                    this.inheritId = -1;
                }
            }
            isSuperAwakeningActive(isMultiplayer) {
                return (!isMultiplayer && this.level > 99 && this.hpPlus == 99
                    && this.atkPlus == 99 && this.hpPlus == 99);
            }
            getAwakenings(isMultiplayer, filterSet) {
                let filterFn = (_awakening) => true;
                if (filterSet) {
                    filterFn = (awakening) => filterSet.has(awakening);
                }
                const c = this.getCard();
                const awakenings = c.awakenings.slice(0, this.awakenings);
                if (this.isSuperAwakeningActive(isMultiplayer) && this.superAwakeningIdx > -1) {
                    awakenings.push(c.superAwakenings[this.superAwakeningIdx]);
                }
                const inherit = this.getInheritCard();
                if (inherit && inherit.awakenings.length && inherit.awakenings[0] == common_4.Awakening.AWOKEN_ASSIST) {
                    for (const a of inherit.awakenings) {
                        awakenings.push(a);
                    }
                }
                return awakenings.filter(filterFn);
            }
            countAwakening(awakening, isMultiplayer = false) {
                return this.getAwakenings(isMultiplayer, new Set([awakening])).length;
            }
            getLatents(filterSet = null) {
                let filterFn = (_latent) => true;
                if (filterSet) {
                    filterFn = (latent) => filterSet.has(latent);
                }
                return this.latents.filter(filterFn);
            }
            calcScaleStat(max, min, growth) {
                return calcScaleStat(this.getCard(), max, min, this.level, growth);
            }
            addLatent(latent) {
                const c = this.getCard();
                // Only monsters capable of taking latent killers can take latents.
                if (!c.latentKillers.length) {
                    return;
                }
                const maxSlots = c.inheritanceType & 32 ? 8 : 6;
                console.log(maxSlots);
                let totalSlots = 0;
                for (const l of this.latents) {
                    totalSlots += common_4.LatentSuper.has(l) ? 2 : 1;
                }
                totalSlots += common_4.LatentSuper.has(latent) ? 2 : 1;
                if (totalSlots > maxSlots)
                    return;
                if (latent >= 16 && latent <= 23 && !c.latentKillers.some((killer) => killer == (latent - 11))) {
                    return;
                }
                this.latents.push(latent);
            }
            removeLatent(latentIdx) {
                if (latentIdx >= this.latents.length) {
                    console.warn(`latent index out of range: ${latentIdx}`);
                    return;
                }
                this.latents = [...this.latents.slice(0, latentIdx), ...this.latents.slice(latentIdx + 1)];
            }
            setLevel(v) {
                v = Math.round(v);
                const c = this.getCard();
                if (v < 1) {
                    v = 1;
                }
                const maxLevel = c.isLimitBreakable ? 110 : c.maxLevel;
                if (v > maxLevel) {
                    v = maxLevel;
                }
                this.level = v;
            }
            setHpPlus(v) {
                this.hpPlus = validatePlus(v);
            }
            setAtkPlus(v) {
                this.atkPlus = validatePlus(v);
            }
            setRcvPlus(v) {
                this.rcvPlus = validatePlus(v);
            }
            getHp(isMultiplayer = true, awakeningsActive = true) {
                const c = this.getCard();
                let hp = this.calcScaleStat(c.maxHp, c.minHp, c.hpGrowth);
                if (awakeningsActive) {
                    let latentMultiplier = 1;
                    for (const latent of this.getLatents(new Set([common_4.Latent.HP, common_4.Latent.HP_PLUS, common_4.Latent.ALL_STATS]))) {
                        latentMultiplier += LatentHp.get(latent) || 0;
                    }
                    hp *= latentMultiplier;
                    let awakeningAdder = 0;
                    for (const awakening of this.getAwakenings(isMultiplayer, new Set([common_4.Awakening.HP, common_4.Awakening.HP_MINUS]))) {
                        awakeningAdder += AWAKENING_BONUS.get(awakening) || 0;
                    }
                    hp += awakeningAdder;
                }
                const plusAdder = this.hpPlus * 10;
                hp += plusAdder;
                const inherit = this.getInheritCard();
                if (inherit && c.attribute == inherit.attribute) {
                    const inheritBonus = calcScaleStat(inherit, inherit.maxHp, inherit.minHp, this.inheritLevel, inherit.hpGrowth) + (this.inheritPlussed ? 990 : 0);
                    hp += Math.round(inheritBonus * 0.1);
                }
                if (isMultiplayer) {
                    const multiboostMultiplier = 1.5 ** this.countAwakening(common_4.Awakening.MULTIBOOST, isMultiplayer);
                    hp *= multiboostMultiplier;
                }
                return Math.max(Math.round(hp), 1);
            }
            getAtk(isMultiplayer = true, awakeningsActive = true) {
                const c = this.getCard();
                let atk = this.calcScaleStat(c.maxAtk, c.minAtk, c.atkGrowth);
                if (awakeningsActive) {
                    let latentMultiplier = 1;
                    for (const latent of this.getLatents(new Set([common_4.Latent.ATK, common_4.Latent.ATK_PLUS, common_4.Latent.ALL_STATS]))) {
                        latentMultiplier += LatentAtk.get(latent) || 0;
                    }
                    atk *= latentMultiplier;
                    let awakeningAdder = 0;
                    for (const awakening of this.getAwakenings(isMultiplayer, new Set([common_4.Awakening.ATK, common_4.Awakening.ATK_MINUS]))) {
                        awakeningAdder += AWAKENING_BONUS.get(awakening) || 0;
                    }
                    atk += awakeningAdder;
                }
                const plusAdder = this.atkPlus * 5;
                atk += plusAdder;
                const inherit = this.getInheritCard();
                if (inherit && c.attribute == inherit.attribute) {
                    const inheritBonus = calcScaleStat(inherit, inherit.maxAtk, inherit.minAtk, this.inheritLevel, inherit.atkGrowth) + (this.inheritPlussed ? 495 : 0);
                    atk += Math.round(inheritBonus * 0.05);
                }
                if (isMultiplayer && awakeningsActive) {
                    const multiboostMultiplier = 1.5 ** this.countAwakening(common_4.Awakening.MULTIBOOST, isMultiplayer);
                    atk *= multiboostMultiplier;
                }
                return Math.max(Math.round(atk), 1);
            }
            getRcv(isMultiplayer = true, awakeningsActive = true) {
                const c = this.getCard();
                let rcv = this.calcScaleStat(c.maxRcv, c.minRcv, c.rcvGrowth);
                if (awakeningsActive) {
                    let latentMultiplier = 1;
                    for (const latent of this.getLatents(new Set([common_4.Latent.RCV, common_4.Latent.RCV_PLUS, common_4.Latent.ALL_STATS]))) {
                        latentMultiplier += LatentRcv.get(latent) || 0;
                    }
                    rcv *= latentMultiplier;
                    const rcvSet = new Set([common_4.Awakening.RCV, common_4.Awakening.RCV_MINUS]);
                    let total = 0;
                    for (const awakening of this.getAwakenings(isMultiplayer, rcvSet)) {
                        total += AWAKENING_BONUS.get(awakening) || 0;
                    }
                    rcv += total;
                }
                const plusAdder = this.rcvPlus * 3;
                rcv += plusAdder;
                const inherit = this.getInheritCard();
                if (inherit && c.attribute == inherit.attribute) {
                    const inheritBonus = calcScaleStat(inherit, inherit.maxRcv, inherit.minRcv, this.inheritLevel, inherit.rcvGrowth) + (this.inheritPlussed ? 297 : 0);
                    rcv += Math.round(inheritBonus * 0.15);
                }
                if (isMultiplayer && awakeningsActive) {
                    const multiboostMultiplier = 1.5 ** this.countAwakening(common_4.Awakening.MULTIBOOST, isMultiplayer);
                    rcv *= multiboostMultiplier;
                }
                return Math.round(rcv);
            }
            getAttribute() {
                if (this.attribute != common_4.Attribute.NONE) {
                    return this.attribute;
                }
                return this.getCard().attribute;
            }
            getSubattribute() {
                const c = this.getCard();
                if (c.subattribute == common_4.Attribute.NONE) {
                    return common_4.Attribute.NONE;
                }
                if (this.attribute != common_4.Attribute.NONE) {
                    return this.attribute;
                }
                return c.subattribute;
            }
            isType(t) {
                return this.getCard().types.some((type) => type == t);
            }
            anyTypes(t) {
                return t.some((type) => this.isType(type));
            }
            isAttribute(a) {
                const c = this.getCard();
                return c.attribute == a || c.subattribute == a;
            }
            anyAttributes(a) {
                return a.some((attr) => this.isAttribute(attr));
            }
            anyAttributeTypeBits(attrBits, typeBits) {
                return this.anyAttributes(common_4.idxsFromBits(attrBits)) || this.anyTypes(common_4.idxsFromBits(typeBits));
            }
            fromJson(json) {
                // const monster = new MonsterInstance(json.id || -1);
                this.setId(json.id || -1);
                this.level = json.level || 1;
                this.awakenings = json.awakenings || 1;
                this.latents = [...(json.latents || [])];
                if (json.superAwakeningIdx == null || json.superAwakeningIdx == undefined) {
                    this.superAwakeningIdx = -1;
                }
                else {
                    this.superAwakeningIdx = json.superAwakeningIdx;
                }
                this.setHpPlus(json.hpPlus || 0);
                this.setAtkPlus(json.atkPlus || 0);
                this.setRcvPlus(json.rcvPlus || 0);
                this.inheritId = json.inheritId || -1;
                this.inheritLevel = json.inheritLevel || 1;
                this.inheritPlussed = json.inheritPlussed || false;
            }
            // TODO: Consider loading this like a fromJson.
            copyFrom(otherInstance) {
                this.level = otherInstance.level;
                this.awakenings = otherInstance.awakenings;
                this.latents = [...otherInstance.latents];
                this.superAwakeningIdx = otherInstance.superAwakeningIdx;
                this.hpPlus = otherInstance.hpPlus;
                this.atkPlus = otherInstance.atkPlus;
                this.rcvPlus = otherInstance.rcvPlus;
                this.inheritId = otherInstance.inheritId;
                this.inheritLevel = otherInstance.inheritLevel;
                this.inheritPlussed = otherInstance.inheritPlussed;
                this.setId(otherInstance.id);
            }
            static swap(instanceA, instanceB) {
                const temp = new MonsterInstance();
                temp.copyFrom(instanceA);
                instanceA.copyFrom(instanceB);
                instanceB.copyFrom(temp);
            }
        }
        exports.MonsterInstance = MonsterInstance;
    });
    define("damage_ping", ["require", "exports", "common"], function (require, exports, common_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        class DamagePing {
            constructor(source, attribute, isSub = false) {
                this.isSub = false;
                this.damage = 0;
                this.rawDamage = 0;
                this.actualDamage = 0;
                this.source = source;
                this.attribute = attribute;
                this.isSub = isSub;
            }
            add(amount) {
                this.damage += amount;
            }
            multiply(multiplier, round = common_5.Round.NEAREST) {
                this.damage = round(this.damage * multiplier);
            }
        }
        exports.DamagePing = DamagePing;
    });
    define("enemy_instance", ["require", "exports", "common"], function (require, exports, common_6) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var EnemySkillEffect;
        (function (EnemySkillEffect) {
            EnemySkillEffect["NONE"] = "None";
            // MULTI_HIT: 'multi-hit', // #hits
            // GRAVITY: 'gravity', // %Gravity
            EnemySkillEffect["STATUS_SHIELD"] = "Status Shield";
            EnemySkillEffect["DAMAGE_SHIELD"] = "Shield";
            // SELF_HEAL: 'enemy-heal', // %heal (e.g. 10, 50, 100)
            // PLAYER_HEAL: 'player-heal', // %heal
            EnemySkillEffect["DAMAGE_ABSORB"] = "Damage Absorb";
            EnemySkillEffect["ATTRIBUTE_ABSORB"] = "Attribute Absorb";
            EnemySkillEffect["COMBO_ABSORB"] = "Combo Absorb";
            // ENRAGE: 'enrage', // %Damage (e.g. 150, 200, 1000)
            EnemySkillEffect["DAMAGE_VOID"] = "Damage Void";
            // CLEAR_BUFFS: 'clear', // config unused.
            // RCV_BUFF: 'rcv', // Percent RCV (e.g. 0, 25, 50, 300)
            // TIME_BUFF_FLAT: 'time-flat', // Time delta (e.g. -5, -2, +1, +5)
            // TIME_BUFF_SCALE: 'time-scale', // Time multiplier (e.g. 0.25, 0.5, 3)
            // Not supporting.
            // ORB_CHANGE: 'orb-change',
            // BLIND: 'blind', // Unused config.
            // STICKY_BLIND: 'sticky-blind', // Config is [positions], turns
            // AWAKENING_BIND: 'awakening-bind',
        })(EnemySkillEffect || (EnemySkillEffect = {}));
        ;
        function calcScaleStat(max, min, level, growth) {
            const diff = max - min;
            const frac = (level - 1) / 9;
            const added = Math.round(Math.pow(frac, growth) * diff);
            return min + added;
        }
        class EnemySkill {
            constructor() {
                this.name = '';
                this.effect = EnemySkillEffect.NONE;
                this.config = 0;
                this.damagePercent = 0; // If 0, no attack.
            }
            // apply(idc, source) {
            //   // console.warn('Enemy Skills not handled yet');
            //   console.debug(idc);
            //   switch(this.effect) {
            //     case EnemySkillEffect.NONE:
            //       break;
            //     case EnemySkillEffect.STATUS_SHIELD:
            //       source.statusShield = true;
            //       break;
            //     case EnemySkillEffect.DAMAGE_SHIELD:
            //       source.shieldPercent = this.config;
            //       break;
            //     case EnemySkillEffect.DAMAGE_ABSORB:
            //       source.damageAbsorb = this.config;
            //       break;
            //     case EnemySkillEffect.ATTRIBUTE_ABSORB:
            //       source.attributeAbsorb = idxsFromBits(this.config);
            //       break;
            //     case EnemySkillEffect.DAMAGE_VOID:
            //       source.damageVoid = this.config;
            //       break;
            //     case EnemySkillEffect.COMBO_ABSORB:
            //       source.comboAbsorb = this.config;
            //       break;
            //     case EnemySkillEffect.ENRAGE:
            //       source.enrage = this.config;
            //       break;
            //     // case EnemySkillEffect.MULTI_HIT:
            //     // case EnemySkillEffect.GRAVITY:
            //     // case EnemySkillEffect.SELF_HEAL:
            //     // case EnemySkillEffect.PLAYER_HEAL:
            //     // case EnemySkillEffect.CLEAR_BUFFS:
            //     // case EnemySkillEffect.RCV_BUFF:
            //     // case EnemySkillEffect.TIME_BUFF_FLAT:
            //     // case EnemySkillEffect.TIME_BUFF_SCALE:
            //     default:
            //       console.warn('Unhandled type: ' + this.effect);
            //   }
            // }
            toJson() {
                const obj = {};
                if (this.name) {
                    obj.name = this.name;
                }
                if (this.effect != EnemySkillEffect.NONE) {
                    obj.effect = this.effect;
                }
                if (this.config) {
                    obj.config = this.config;
                }
                if (this.damagePercent) {
                    obj.damagePercent = this.damagePercent;
                }
                return obj;
            }
            static fromJson(json) {
                const skill = new EnemySkill();
                skill.name = skill.name || '';
                skill.damagePercent = json.damagePercent || 0;
                skill.effect = json.effect || EnemySkillEffect.NONE;
                skill.config = json.config || 0;
                return skill;
            }
        }
        class EnemySkillset {
            constructor() {
                this.skills = [];
            }
            // TODO
            // applySkillset(idc, source) {
            //   // console.warn('Enemy skillset application not supported yet.');
            //   for (const skill of this.skills) {
            //     skill.apply(idc, source);
            //   }
            // }
            toJson() {
                const obj = {};
                if (this.skills.length) {
                    obj.skills = this.skills.map((skill) => skill.toJson());
                }
                return obj;
            }
            static fromJson(json) {
                const skillset = new EnemySkillset();
                skillset.skills = (json.skills || []).map((j) => EnemySkill.fromJson(j));
                return skillset;
            }
        }
        class EnemyInstance {
            constructor() {
                this.id = 4014;
                this.lv = 10;
                this.hp = -1;
                this.attack = -1;
                this.defense = -1;
                this.resolvePercent = 0;
                this.turnCounter = 1; // Currently unused.
                // Values that can change during battle.
                this.currentHp = 1;
                this.currentAttribute = -1; // -1 is main, -2 is sub.
                this.statusShield = false;
                this.shieldPercent = 0; // Damage is multiplied by (100 - shieldPercent) / 100
                this.comboAbsorb = 0; // Combos of this or fewer are absorbed.
                this.damageAbsorb = 0;
                this.damageVoid = 0;
                this.attackMultiplier = 1; // Enrage
                this.turnsRemaining = 1; // Not to be used yet.
                this.turnCounterOverride = -1; // Not to be used yet.
                // Debuffs by players
                this.ignoreDefensePercent = 0;
                this.poison = 0;
                this.delayed = false; // Not to be used yet.
                // Passives that are always applied
                this.attributesResisted = [];
                this.typeResists = [];
                this.preemptiveSkillset = new EnemySkillset(); // Used when loading the monster.
                this.skillsets = [];
                this.attributeAbsorb = [];
            }
            setLevel(lv) {
                this.lv = lv;
            }
            getHp() {
                // if (this.hp > 0) {
                //   return this.hp;
                // }
                const c = this.getCard();
                return calcScaleStat(c.enemyHpAtLv10, c.enemyHpAtLv1, this.lv, c.enemyHpCurve);
            }
            getAtk() {
                // if (this.atk > 0) {
                //   return this.atk;
                // }
                const c = this.getCard();
                return calcScaleStat(c.enemyAtkAtLv10, c.enemyAtkAtLv1, this.lv, c.enemyAtkCurve);
            }
            getDef() {
                // if (this.def > 0) {
                //   return this.def;
                // }
                const c = this.getCard();
                return calcScaleStat(c.enemyDefAtLv10, c.enemyDefAtLv1, this.lv, c.enemyDefCurve);
            }
            getResolve() {
                const c = this.getCard();
                const resolveSkills = c.enemySkills
                    .map((skill) => skill.enemySkillId)
                    .map((id) => vm.model.enemySkills[id])
                    .filter((skill) => skill.internalEffectId == 73);
                if (!resolveSkills.length) {
                    return 0;
                }
                if (resolveSkills.length > 1) {
                    console.warn('Multiple resolve skills detected. Only using first');
                }
                return resolveSkills[0].skillArgs[0];
            }
            getTypeResists() {
                const c = this.getCard();
                const resistTypeSkills = c.enemySkills
                    .map((skill) => skill.enemySkillId)
                    .map((id) => vm.model.enemySkills[id])
                    .filter((skill) => skill.internalEffectId == 118);
                if (!resistTypeSkills.length) {
                    return { types: [], percent: 0 };
                }
                if (resistTypeSkills.length > 1) {
                    console.warn('Multiple Type Resist skills detected. Only using first');
                }
                const [typeBits, percent] = resistTypeSkills[0].skillArgs;
                return {
                    types: common_6.idxsFromBits(typeBits),
                    percent: percent,
                };
            }
            getAttrResists() {
                const c = this.getCard();
                const resistAttrSkills = c.enemySkills
                    .map((skill) => skill.enemySkillId)
                    .map((id) => vm.model.enemySkills[id])
                    .filter((skill) => skill.internalEffectId == 72);
                if (!resistAttrSkills.length) {
                    return { attrs: [], percent: 0 };
                }
                if (resistAttrSkills.length > 1) {
                    console.warn('Multiple Type Resist skills detected. Only using first');
                }
                const [attrBits, percent] = resistAttrSkills[0].skillArgs;
                return {
                    attrs: common_6.idxsFromBits(attrBits),
                    percent: percent,
                };
            }
            getCard() {
                if (!vm.model.cards[this.id]) {
                    return common_6.DEFAULT_CARD;
                }
                return vm.model.cards[this.id];
            }
            getAttribute() {
                if (this.id in vm.model.cards && this.currentAttribute == -1) {
                    return vm.model.cards[this.id].attribute;
                }
                if (this.id in vm.model.cards && this.currentAttribute == -2) {
                    return vm.model.cards[this.id].subattribute > -1 ? vm.model.cards[this.id].subattribute : vm.model.cards[this.id].attribute;
                }
                return this.currentAttribute;
            }
            // calcDamage(ping, pings, comboContainer, isMultiplayer, voids) {
            //   let currentDamage = ping.amount;
            //   const types = vm.model.cards[this.id] ? vm.model.cards[this.id].types : [];
            //   // Attribute Advantage
            //   currentDamage *= attributeMultiplier(ping.attribute, this.getAttribute());
            //   currentDamage = Math.ceil(currentDamage);
            //
            //   if (!ping.isActive) {
            //     // Killers
            //     const killerCount = ping.source.getAwakenings(isMultiplayer, new Set(types.map((type) => TypeToKiller[type]))).length;
            //     currentDamage *= (3 ** killerCount);
            //
            //     // Latent Killers
            //     const validLatents = types.map((type) => TypeToLatent[type]);
            //     const latentCount = ping.source.latents.filter((latent) => validLatents.includes(latent)).length;
            //     currentDamage *= (1.5 ** latentCount);
            //     currentDamage = Math.ceil(currentDamage);
            //     if (currentDamage >= 2147483648) {
            //       currentDamage = 2147483647;
            //     }
            //   }
            //
            //   if (ping.attribute != -1) {
            //     // Innate Resists (e.g. attribute and type)
            //     if (this.attributesResisted.includes(ping.attribute)) {
            //       currentDamage *= 0.5;
            //       currentDamage = Math.ceil(currentDamage);
            //     }
            //     if (this.typeResists.some((type) => ping.source.getCard().types.includes(type))) {
            //       currentDamage *= 0.5;
            //       currentDamage = Math.ceil(currentDamage);
            //     }
            //
            //     // Shield
            //     currentDamage = currentDamage * (100 - this.shieldPercent) / 100
            //     currentDamage = Math.ceil(currentDamage);
            //
            //     // Defense + Guard Break, Damage afterward is minimum 1.
            //     if ((ping.source.countAwakening(Awakening.GUARD_BREAK) == 0 ||
            //             (new Set(pings.map((ping) => ping.attribute))).size < 5)) {
            //       const defense = this.defense * (100 - this.ignoreDefensePercent) / 100;
            //       currentDamage -= defense;
            //       currentDamage = Math.ceil(currentDamage);
            //
            //       currentDamage = Math.max(currentDamage, 1);
            //     }
            //   }
            //
            //   // Void
            //   if (this.damageVoid
            //       && currentDamage > this.damageVoid
            //       && !voids.damageVoid
            //       && (!(COLORS[ping.attribute] in comboContainer.combos) ||
            //           comboContainer.combos[COLORS[ping.attribute]].every((combo) => combo.shape != Shape.BOX))) {
            //     currentDamage = 0;
            //   }
            //
            //   // Absorbs
            //   if (this.attributeAbsorb.includes(ping.attribute) && !voids.attributeAbsorb ||
            //       this.damageAbsorb && currentDamage >= this.damageAbsorb && !voids.damageAbsorb ||
            //       this.comboAbsorb && comboContainer.comboCount() <= this.comboAbsorb && !ping.isActive) {
            //     currentDamage *= -1;
            //   }
            //
            //   return currentDamage;
            // }
            setId(id) {
                if (!(id in vm.model.cards)) {
                    return;
                }
                this.id = id;
            }
            getName() {
                if (this.id < 0 || !(this.id in vm.model.cards)) {
                    return 'UNSET';
                }
                return vm.model.cards[this.id].name;
            }
            reset( /** idc */) {
                this.currentHp = this.getHp();
                this.currentAttribute = -1;
                this.statusShield = false;
                this.shieldPercent = 0;
                this.attributeAbsorb.length = 0;
                this.comboAbsorb = 0;
                this.damageAbsorb = 0;
                this.damageVoid = 0;
                this.attackMultiplier = 1;
                this.turnsRemaining = this.turnCounter;
                this.turnCounterOverride = -1;
                this.ignoreDefensePercent = 0;
                this.poison = 0;
                this.delayed = false;
                if (this.preemptiveSkillset) {
                    //   this.preemptiveSkillset.applySkillset(idc, this);
                }
            }
            // TODO
            // useSkillset(skillIdx, idc) {
            //   if (!skillIdx in this.skillsets) {
            //     console.warn(`Invalid idx: ${skillIdx}, not performing any.`)
            //     return;
            //   }
            //   this.skillsets[skillIdx].applySkillset(idc, this);
            // }
            toJson() {
                const obj = {};
                let card = common_6.DEFAULT_CARD;
                if (this.id in vm.model.cards) {
                    obj.id = this.id;
                    card = vm.model.cards[this.id];
                }
                if (this.lv != 10) {
                    obj.lv = this.lv;
                }
                if (this.hp > 0) {
                    obj.hp = this.hp;
                }
                if (this.attack > 0) {
                    obj.attack = this.attack;
                }
                if (this.defense >= 0) {
                    obj.defense = this.defense;
                }
                if (this.resolvePercent > 0) {
                    obj.resolvePercent = this.resolvePercent;
                }
                if (this.attributesResisted.length) {
                    obj.attributesResisted = [...this.attributesResisted];
                }
                if (this.typeResists.length) {
                    obj.typeResists = [...this.typeResists];
                }
                if (this.preemptiveSkillset) {
                    const preemptiveJson = this.preemptiveSkillset.toJson();
                    if (preemptiveJson.skills && preemptiveJson.skills.length) {
                        obj.preemptiveSkillset = preemptiveJson;
                    }
                }
                if (this.skillsets.length) {
                    obj.skillsets = this.skillsets.map((skillset) => skillset.toJson());
                }
                if (this.turnCounter != 1) {
                    obj.turnCounter = this.turnCounter;
                }
                return obj;
            }
            static fromJson(json) {
                const enemy = new EnemyInstance();
                enemy.id = Number(json.id) || -1;
                enemy.lv = Number(json.lv) || 10;
                if (enemy.id in vm.model.cards) {
                    const card = vm.model.cards[enemy.id];
                    // TODO: Preload Card with this information.
                    enemy.hp = Number(json.hp) || -1;
                    enemy.attack = Number(json.attack) || -1;
                    enemy.defense = Number(json.defense) || -1;
                }
                else {
                    enemy.hp = Number(json.hp) || 1;
                    enemy.attack = Number(json.attack) || 1;
                    enemy.defense = Number(json.defense) || 0;
                }
                enemy.resolvePercent = Number(json.resolvePercent) || 0;
                enemy.attributesResisted = (json.attributesResisted || []).map((a) => Number(a));
                enemy.typeResists = (json.typeResists || []).map((a) => Number(a));
                enemy.preemptiveSkillset = json.preemptiveSkillset ?
                    EnemySkillset.fromJson(json.preemptiveSkillset) : new EnemySkillset();
                enemy.skillsets = (json.skillsets || []).map((skillsetJson) => EnemySkillset.fromJson(skillsetJson));
                enemy.turnCounter = json.turnCounter || 1;
                enemy.reset();
                return enemy;
            }
        }
        exports.EnemyInstance = EnemyInstance;
    });
    define("dungeon", ["require", "exports", "common", "enemy_instance", "templates"], function (require, exports, common_7, enemy_instance_1, templates_3) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        class DungeonFloor {
            // dungeonEditor: DungeonEditor;
            // combinations: number[][];
            constructor() {
                this.activeEnemy = 0;
                this.enemies = [new enemy_instance_1.EnemyInstance()];
                this.activeEnemy = 0;
            }
            addEnemy() {
                this.enemies.push(new enemy_instance_1.EnemyInstance());
            }
            deleteEnemy(idx) {
                if (this.enemies.length <= 1 || !(idx in this.enemies)) {
                    console.log('Unable to delete enemy from floor.');
                    return;
                }
                this.enemies.splice(idx, 1);
            }
            getActiveEnemy() {
                return this.enemies[this.activeEnemy];
            }
            getEnemyIds() {
                return this.enemies.map((enemy) => enemy.id);
            }
            toJson() {
                return {
                    enemies: this.enemies.map((enemy) => enemy.toJson()),
                };
            }
            static fromJson(json) {
                const floor = new DungeonFloor();
                floor.enemies = json.enemies.map((enemy) => enemy_instance_1.EnemyInstance.fromJson(enemy));
                return floor;
            }
        }
        class Rational {
            constructor(numerator = 0, denominator = 1) {
                this.numerator = 0;
                this.denominator = 1;
                this.numerator = numerator;
                this.denominator = denominator;
            }
            multiply(n) {
                return n * this.numerator / this.denominator;
            }
            reduce() {
                // Cannot reduce if denominator already 1
                if (this.denominator == 1) {
                    return;
                }
                // Can only reduce integral pairs.
                if (!Number.isInteger(this.numerator) || !Number.isInteger(this.denominator)) {
                    return;
                }
                function divides(num, den) {
                    return Number.isInteger(num / den);
                }
                function gcd(a, b) {
                    while (!divides(a, b) && !divides(b, a)) {
                        if (a > b) {
                            a -= b;
                        }
                        else {
                            b -= a;
                        }
                    }
                    return Math.min(a, b);
                }
                const divisor = gcd(this.numerator, this.denominator);
                if (divisor == 1) {
                    return;
                }
                this.numerator /= divisor;
                this.denominator /= divisor;
            }
            toString() {
                this.reduce();
                if (this.denominator == 1) {
                    return String(this.numerator);
                }
                return `${this.numerator} / ${this.denominator}`;
            }
            static from(s) {
                if (!s.includes('/')) {
                    return new Rational(Number(s));
                }
                let match = s.match(Rational.matcher);
                if (match && match[0] == s) {
                    return new Rational(Number(match[1]), Number(match[2]));
                }
                return new Rational(NaN);
            }
        }
        Rational.matcher = /\s*(\d+)\s*\/\s*(\d+)\s*/;
        // type EncounterData = {
        //   amount: number,
        //   enemyId: number,
        //   level: number,
        //   floor: number, // Which floor to add it to.
        //   orderIdx: number,
        //
        //   hp: number,
        //   atk: number,
        //   def: number,
        //   turns: number,
        // };
        //
        // type SubDungeonData = {
        //   dungeonId: number, // Containing parent dungeon.
        //   dungeonType: number,
        //   name: string, // Combined.
        //   floors: number,
        //
        //   atkMult: number,
        //   defMult: number,
        //   hpMult: number,
        //   encounters: EncounterData[],
        // };
        let requestUrl = common_7.BASE_URL + 'assets/DungeonsAndEncounters.json';
        let request = new XMLHttpRequest();
        let DUNGEON_DATA = new Map();
        const dungeonSearchArray = [];
        request.open('GET', requestUrl);
        request.responseType = 'json';
        request.send();
        request.onload = () => {
            console.log('JSON loaded, check request.response');
            const rawData = request.response;
            for (const datum of rawData) {
                for (const subDatum of datum.sub_dungeons) {
                    const floorsJson = [];
                    for (let i = 0; i < subDatum.floors; i++) {
                        floorsJson.push({
                            enemies: [],
                        });
                    }
                    for (const encounter of subDatum.encounters) {
                        if (encounter.stage <= 0) {
                            encounter.stage = 1;
                        }
                        if (encounter.stage > floorsJson.length) {
                            encounter.stage = floorsJson.length;
                        }
                        const floor = floorsJson[encounter.stage - 1];
                        if (!floor) {
                            console.warn('invalid floor count...');
                            continue;
                        }
                        floor.enemies.push({
                            id: encounter.enemy_id,
                            lv: encounter.level,
                            turnCounter: encounter.turns,
                        });
                    }
                    const dungeonInstanceJson = {
                        title: `${datum.name_na} - ${subDatum.name_na}`,
                        floors: floorsJson,
                        hp: String(subDatum.hp_mult),
                        atk: String(subDatum.atk_mult),
                        def: String(subDatum.def_mult),
                    };
                    DUNGEON_DATA.set(subDatum.sub_dungeon_id, dungeonInstanceJson);
                    dungeonSearchArray.push({ s: dungeonInstanceJson.title, value: subDatum.sub_dungeon_id });
                }
            }
        };
        class DungeonInstance {
            constructor() {
                this.title = '';
                this.boardWidth = 6;
                this.fixedTime = 0;
                this.isRogue = false; // UNIMPLEMENTED
                this.allAttributesRequired = false;
                this.noDupes = false;
                this.hpMultiplier = new Rational(1);
                this.atkMultiplier = new Rational(1);
                this.defMultiplier = new Rational(1);
                this.activeFloor = 0;
                this.activeEnemy = 0;
                // Sets all of your monsters to level 1 temporarily.
                this.floors = [new DungeonFloor()];
                // this.editorElement = this.createEditorElement();
                this.pane = new templates_3.DungeonPane(dungeonSearchArray, (ctx) => {
                    console.log(ctx);
                    if (ctx.loadDungeon != undefined) {
                        this.loadDungeon(ctx.loadDungeon);
                    }
                    const old = {
                        floor: this.activeFloor,
                        enemy: this.activeEnemy,
                    };
                    if (ctx.activeFloor != undefined) {
                        this.activeFloor = ctx.activeFloor;
                        this.setActiveEnemy(0);
                    }
                    if (ctx.activeEnemy != undefined) {
                        // TODO: Centralize definition of activeEnemy into either DungeonInstace or DungeonFloor.
                        this.setActiveEnemy(ctx.activeEnemy);
                    }
                    if (ctx.addFloor) {
                        this.addFloor();
                        this.setActiveEnemy(0);
                    }
                    if (ctx.removeFloor != undefined) {
                        if (ctx.removeFloor == 0) {
                            // Do nothing for now?
                        }
                        else {
                            this.deleteFloor(ctx.removeFloor);
                        }
                    }
                    if (ctx.dungeonHpMultiplier != undefined) {
                        this.hpMultiplier = Rational.from(ctx.dungeonHpMultiplier);
                    }
                    if (ctx.dungeonAtkMultiplier != undefined) {
                        this.atkMultiplier = Rational.from(ctx.dungeonAtkMultiplier);
                    }
                    if (ctx.dungeonDefMultiplier != undefined) {
                        this.defMultiplier = Rational.from(ctx.dungeonDefMultiplier);
                    }
                    if (ctx.activeEnemy != undefined || ctx.activeFloor != undefined) {
                        // Update other dungeon info about dungeon editor.
                    }
                    if (ctx.addEnemy) {
                        const floor = this.floors[this.activeFloor];
                        floor.addEnemy();
                        this.setActiveEnemy(floor.enemies.length - 1);
                    }
                    if (ctx.enemyLevel) {
                        this.getActiveEnemy().setLevel(ctx.enemyLevel);
                    }
                    if (ctx.activeEnemyId != undefined) {
                        this.getActiveEnemy().id = ctx.activeEnemyId;
                    }
                    if (ctx.addTypeResist != undefined) {
                        this.getActiveEnemy().typeResists.push(ctx.addTypeResist);
                    }
                    if (ctx.removeTypeResist != undefined) {
                        if (this.getActiveEnemy().typeResists.includes(ctx.removeTypeResist)) {
                            this.getActiveEnemy().typeResists.splice(this.getActiveEnemy().typeResists.indexOf(ctx.removeTypeResist), 1);
                        }
                    }
                    const updateActiveEnemy = old.floor != this.activeFloor || old.enemy != this.activeEnemy;
                    this.update(updateActiveEnemy);
                });
            }
            loadDungeon(subDungeonId) {
                const data = DUNGEON_DATA.get(subDungeonId);
                if (!data) {
                    console.warn('invalid sub dungeon');
                    return;
                }
                this.loadJson(data);
            }
            getPane() {
                return this.pane.getElement();
            }
            update(updateActiveEnemy) {
                this.pane.dungeonEditor.setEnemies(this.floors.map((floor) => floor.getEnemyIds()));
                if (updateActiveEnemy) {
                    this.pane.dungeonEditor.setActiveEnemy(this.activeFloor, this.activeEnemy);
                }
                const enemy = this.getActiveEnemy();
                this.pane.dungeonEditor.setDungeonMultipliers(this.hpMultiplier.toString(), this.atkMultiplier.toString(), this.defMultiplier.toString());
                this.pane.dungeonEditor.setEnemyStats(enemy.lv, Math.round(this.hpMultiplier.multiply(enemy.getHp())), Math.round(this.atkMultiplier.multiply(enemy.getAtk())), Math.round(this.defMultiplier.multiply(enemy.getDef())), Math.round(enemy.getResolve()), enemy.getTypeResists(), enemy.getAttrResists());
            }
            addFloor() {
                this.floors.push(new DungeonFloor());
                this.activeFloor = this.floors.length - 1;
                // this.reloadEditorElement();
            }
            deleteFloor(idx) {
                if (this.floors.length <= 1 || !(idx in this.floors)) {
                    console.log('Unable to delete floor.');
                    return;
                }
                this.floors.splice(idx, 1);
                if (this.activeFloor >= idx) {
                    this.activeFloor = idx - 1;
                }
            }
            setActiveEnemy(idx) {
                this.activeEnemy = idx;
                this.floors[this.activeFloor].activeEnemy = idx;
            }
            getActiveEnemy() {
                return this.floors[this.activeFloor].getActiveEnemy();
            }
            toJson() {
                const obj = {
                    title: this.title,
                    floors: this.floors.map((floor) => floor.toJson()),
                };
                const hpString = this.hpMultiplier.toString();
                if (hpString != '1' && hpString != 'NaN') {
                    obj.hp = hpString;
                }
                const atkString = this.atkMultiplier.toString();
                if (atkString != '1' && atkString != 'NaN') {
                    obj.atk = atkString;
                }
                const defString = this.defMultiplier.toString();
                if (defString != '1' && defString != 'NaN') {
                    obj.def = defString;
                }
                return obj;
            }
            loadJson(json) {
                this.title = json.title || '';
                this.floors = json.floors.map((floor) => DungeonFloor.fromJson(floor));
                if (!this.floors) {
                    this.addFloor();
                }
                this.activeFloor = 0;
                this.setActiveEnemy(0);
                this.hpMultiplier = Rational.from(json.hp || '1');
                this.atkMultiplier = Rational.from(json.atk || '1');
                this.defMultiplier = Rational.from(json.def || '1');
                this.update(true);
            }
        }
        exports.DungeonInstance = DungeonInstance;
    });
    define("leaders", ["require", "exports", "common"], function (require, exports, common_8) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        ;
        const atkFromAttr = {
            atk: ([attr, atk100], { ping }) => {
                return ping.source.isAttribute(attr) ? atk100 / 100 : 1;
            },
        };
        const bonusAttackScale = {
            bonusAttack: ([scale]) => scale / 100,
        };
        const autoHealLead = {
            autoHeal: ([heal100]) => heal100 / 100,
        };
        const resolveLead = {
            resolve: ([resolveMinPercent, UNKNOWN]) => {
                if (UNKNOWN) {
                    console.warn(`Unhandled second parameter of resolve: ${UNKNOWN}`);
                }
                return resolveMinPercent;
            }
        };
        const pureTimeExtend = {
            timeExtend: ([sec100]) => sec100 / 100,
        };
        const shieldAgainstAll = {
            damageMult: ([shield100]) => (1 - shield100 / 100),
        };
        const shieldAgainstAttr = {
            damageMult: ([attr, shield100], { enemy }) => (enemy.getAttribute() == attr) ? 1 - shield100 / 100 : 1,
        };
        const atkFromType = {
            atk: ([type, atk100], { ping }) => ping.source.isType(type) ? atk100 / 100 : 1,
        };
        const hpFromType = {
            hp: ([type, hp100], { monster }) => monster.isType(type) ? hp100 / 100 : 1,
        };
        const rcvFromType = {
            rcv: ([type, rcv100], { monster }) => monster.isType(type) ? rcv100 / 100 : 1,
        };
        const atkUnconditional = {
            atk: ([atk100]) => atk100 / 100,
        };
        const atkRcvFromAttr = {
            atk: atkFromAttr.atk,
            rcv: ([attr, rcv100], { monster }) => monster.isAttribute(attr) ? rcv100 / 100 : 1,
        };
        const baseStatFromAttr = {
            hp: ([attr, hp100], { monster }) => monster.isAttribute(attr) ? hp100 / 100 : 1,
            atk: atkFromAttr.atk,
            rcv: atkRcvFromAttr.rcv,
        };
        const hpFromTwoTypes = {
            hp: ([type1, type2, hp100], { monster }) => monster.anyTypes([type1, type2]) ? hp100 / 100 : 1,
        };
        const atkFromTwoTypes = {
            atk: ([type1, type2, atk100], { ping }) => ping.source.anyTypes([type1, type2]) ? atk100 / 100 : 1,
        };
        const drumSounds = {
            drumEffect: true,
        };
        const shieldAgainstTwoAttr = {
            damageMult: ([attr1, attr2, shield100], { enemy }) => (enemy.getAttribute() == attr1 || enemy.getAttribute() == attr2) ? 1 - shield100 / 100 : 1,
        };
        const shieldFromHp = {
            damageMult: ([threshold, UNKNOWN, shield100], { percentHp }) => {
                if (UNKNOWN) {
                    console.warn(`Unhandled parameter of shieldFromHp: ${UNKNOWN}`);
                }
                const mult = 1 - shield100 / 100;
                if (threshold == 100) {
                    return percentHp >= 100 ? mult : 1;
                }
                return percentHp <= threshold ? mult : 1;
            },
        };
        const atkRcvFromSubHp = {
            atk: ([thresh, atkFlag, _, mult100], { percentHp }) => atkFlag && (percentHp <= thresh) ? mult100 / 100 : 1,
            rcvPost: ([thresh, _, rcvFlag, mult100], { percentHp }) => rcvFlag && (percentHp <= thresh) ? mult100 / 100 : 1,
        };
        const atkFromTwoAttrs = {
            atk: ([attr1, attr2, atk100], { ping }) => ping.source.anyAttributes([attr1, attr2]) ? atk100 / 100 : 1,
        };
        const counterattack = {
            counter: ([chance, atk100, attr]) => {
                if (chance != 100) {
                    console.warn(`Chance of counterattacking: ${chance}%`);
                }
                return { attribute: attr, multiplier: atk100 / 100 };
            },
        };
        const shieldFromAboveHp = {
            damageMult: ([thresh, chance, shield100], { percentHp }) => {
                if (chance != 100) {
                    console.warn(`Chance of shield happening is ${chance}%`);
                }
                return percentHp >= thresh ? 1 - shield100 / 100 : 1;
            },
        };
        const atkRcvFromAboveHp = {
            atk: ([thresh, atkFlag, _, mult100], { percentHp }) => (atkFlag && percentHp >= thresh) ? mult100 / 100 : 1,
            rcvPost: ([thresh, _, rcvFlag, mult100], { percentHp }) => (rcvFlag && percentHp >= thresh) ? mult100 / 100 : 1,
        };
        // 45 see 28
        const hpFromTwoAttrs = {
            hp: ([attr1, attr2, hp100], { monster }) => monster.anyAttributes([attr1, attr2]) ? hp100 / 100 : 1,
        };
        const hpFromAttr = {
            hp: ([attr, hp100], { monster }) => monster.isAttribute(attr) ? hp100 / 100 : 1,
        };
        const rcvFromAttr = {
            rcv: atkRcvFromAttr.rcv,
        };
        const dropBoost = {
            drop: ([boost100]) => boost100 / 100,
        };
        const coinBoost = {
            coins: ([coins100]) => coins100 / 100,
        };
        function countMatchedColors(attrBits, comboContainer, team) {
            const attrs = common_8.idxsFromBits(attrBits);
            let total = 0;
            for (const attr of attrs) {
                // Check if this color was matched.
                if (comboContainer.combos[common_8.COLORS[attr]].length > 0) {
                    // Check if any of the monsters would have attacked.
                    // This could be refactored to check all of the available pings, but that's more dependencies.
                    if (team.some((monster) => !monster.bound && (monster.getAttribute() == attr || monster.getSubattribute() == attr))) {
                        total += 1;
                    }
                }
            }
            return total;
        }
        const atkScalingFromUniqueColorMatches = {
            atk: ([attrBits, minColors, atk100base, atk100scale, maxColors], { team, comboContainer }) => {
                let count = countMatchedColors(attrBits, comboContainer, team);
                atk100scale = atk100scale || 0;
                if (count < minColors) {
                    return 1;
                }
                if (count > maxColors) {
                    count = maxColors;
                }
                return (atk100base + (count - minColors) * atk100scale) / 100;
            }
        };
        const atkHpFromType = {
            hp: hpFromType.hp,
            atk: atkFromType.atk,
        };
        const hpRcvFromType = {
            hp: hpFromType.hp,
            rcv: rcvFromType.rcv,
        };
        const atkRcvFromType = {
            hp: hpFromType.hp,
            atk: atkFromType.atk,
            rcv: rcvFromType.rcv,
        };
        const baseStatFromType = {
            hp: hpFromType.hp,
            atk: atkFromType.atk,
            rcv: rcvFromType.rcv,
        };
        const atkFromCombos = {
            atk: ([minCombo, atk100], { comboContainer }) => (comboContainer.comboCount() >= minCombo) ? atk100 / 100 : 1,
        };
        const hpRcvFromAttr = {
            hp: hpFromAttr.hp,
            rcv: rcvFromAttr.rcv,
        };
        const atkFromAttrType = {
            atk: ([attr, type, atk100], { ping }) => ping.source.isAttribute(attr) || ping.source.isType(type) ? atk100 / 100 : 1,
        };
        const atkHpFromAttrType = {
            hp: ([attr, type, mult100], { monster }) => monster.isAttribute(attr) || monster.isType(type) ? mult100 / 100 : 1,
            atk: atkFromAttr.atk,
        };
        const atkRcvFromAttrType = {
            atk: atkFromAttrType.atk,
            rcv: ([attr, type, rcv100], { monster }) => monster.isAttribute(attr) || monster.isType(type) ? rcv100 / 100 : 1,
        };
        const baseStatFromAttrType = {
            hp: atkHpFromAttrType.hp,
            atk: atkFromAttrType.atk,
            rcv: atkRcvFromAttr.rcv,
        };
        // 77 see 31
        const atkRcvFromTwoTypes = {
            atk: atkFromTwoTypes.atk,
            rcv: ([type1, type2, rcv100], { monster }) => monster.anyTypes([type1, type2]) ? rcv100 / 100 : 1,
        };
        const atkRcvFromAttrAndSubHp = {
            atk: ([thresh, attr, atkFlag, _, atk100], { ping, percentHp }) => {
                return atkFlag && thresh <= percentHp && ping.source.isAttribute(attr) ? atk100 / 100 : 1;
            },
            rcvPost: ([thresh, attr, _, rcvFlag, rcv100], { monster, percentHp }) => {
                return rcvFlag && thresh <= percentHp && monster.isAttribute(attr) ? rcv100 / 100 : 1;
            },
        };
        const atkRcvFromTypeAndSubHp = {
            atk: ([thresh, type, atkFlag, _, atk100], { ping, percentHp }) => {
                return atkFlag && thresh <= percentHp && ping.source.isType(type) ? atk100 / 100 : 1;
            },
            rcvPost: ([thresh, type, _, rcvFlag, rcv100], { monster, percentHp }) => {
                return rcvFlag && thresh <= percentHp && monster.isType(type) ? rcv100 / 100 : 1;
            },
        };
        const atkRcvFromAttrAndAboveHp = {
            atk: ([thresh, attr, atkFlag, _, atk100], { ping, percentHp }) => {
                return atkFlag && thresh >= percentHp && ping.source.isAttribute(attr) ? atk100 / 100 : 1;
            },
            rcvPost: ([thresh, attr, _, rcvFlag, rcv100], { monster, percentHp }) => {
                return rcvFlag && thresh >= percentHp && monster.isAttribute(attr) ? rcv100 / 100 : 1;
            },
        };
        const atkRcvFromTypeAndAboveHp = {
            atk: ([thresh, type, atkFlag, _, atk100], { ping, percentHp }) => {
                return atkFlag && thresh >= percentHp && ping.source.isType(type) ? atk100 / 100 : 1;
            },
            rcvPost: ([thresh, type, _, rcvFlag, rcv100], { monster, percentHp }) => {
                return rcvFlag && thresh >= percentHp && monster.isType(type) ? rcv100 / 100 : 1;
            },
        };
        const atkScalingFromCombos = {
            atk: ([minCombo, atk100base, atk100scale, maxCombo], { comboContainer }) => {
                let count = comboContainer.comboCount();
                if (count < minCombo) {
                    return 1;
                }
                if (count > maxCombo) {
                    count = maxCombo;
                }
                return (atk100base + (count - minCombo) * atk100scale) / 100;
            },
        };
        const atkRcvFromSkill = {
            atk: ([atkFlag, _, atk100], { skillUsed }) => atkFlag && skillUsed ? atk100 / 100 : 1,
            rcvPost: ([_, rcvFlag, atk100], { skillUsed }) => rcvFlag && skillUsed ? atk100 / 100 : 1,
        };
        const atkFromExactCombos = {
            atk: ([combos, atk100], { comboContainer }) => comboContainer.comboCount() == combos ? atk100 / 100 : 1,
        };
        const atkRcvFromCombos = {
            atk: ([minCombo, atkFlag, _, atk100], { comboContainer }) => atkFlag && comboContainer.comboCount() >= minCombo ? atk100 / 100 : 1,
            rcvPost: ([minCombo, _, rcvFlag, rcv100], { comboContainer }) => rcvFlag && comboContainer.comboCount() >= minCombo ? rcv100 / 100 : 1,
        };
        const atkRcvFromAttrCombos = {
            atk: ([a, attrBits, b, c, d], ctx) => ctx.ping.source.anyAttributes(common_8.idxsFromBits(attrBits)) ? (atkRcvFromCombos.atk || (() => 1))([a, b, c, d], ctx) : 1,
            rcvPost: ([a, attrBits, b, c, d], ctx) => ctx.monster.anyAttributes(common_8.idxsFromBits(attrBits)) ? (atkRcvFromCombos.rcv || (() => 1))([a, b, c, d], ctx) : 1,
        };
        const atkFromDecreasedRcv = {
            atk: ([_, atk100]) => atk100 / 100,
            rcv: ([rcv100, _]) => rcv100 / 100,
        };
        const atkFromDecreasedHp = {
            hp: ([hp100]) => hp100 / 100,
            atk: ([_, atk100]) => atk100 / 100,
        };
        const hpDecrease = {
            hp: ([hp100]) => hp100 / 100,
        };
        const atkFromTypeDecreasedHp = {
            hp: ([hp100]) => hp100 / 100,
            atk: ([_, type, atk100], { ping }) => ping.source.isType(type) ? atk100 / 100 : 1,
        };
        const atkFromLinkedOrbs = {
            atk: ([attrBits, minLinked, atk100], { comboContainer }) => common_8.idxsFromBits(attrBits).some((attr) => comboContainer.combos[common_8.COLORS[attr]].some((c) => c.count >= minLinked)) ? atk100 / 100 : 1,
        };
        const atkHpFromTwoAttrs = {
            hp: hpFromTwoAttrs.hp,
            atk: atkFromTwoAttrs.atk,
        };
        const baseStatFromTwoAttrs = {
            hp: hpFromTwoAttrs.hp,
            atk: atkFromTwoAttrs.atk,
            rcv: ([attr1, attr2, rcv100], { monster }) => monster.anyAttributes([attr1, attr2]) ? rcv100 / 100 : 1,
        };
        // This shouldn't be called.
        const multipleLeaderSkills = { // 116 + 138
        };
        const atkScalingFromLinkedOrbs = {
            atk: ([attrBits, minLinked, atk100base, atk100scale, maxLinked], { comboContainer }) => {
                atk100scale = atk100scale || 0;
                maxLinked = maxLinked || minLinked;
                let linked = 0;
                for (const attr of common_8.idxsFromBits(attrBits)) {
                    for (const combo of comboContainer.combos[common_8.COLORS[attr]]) {
                        linked = combo.count > linked ? combo.count : linked;
                    }
                }
                if (linked < minLinked) {
                    return 1;
                }
                if (linked > maxLinked) {
                    linked = maxLinked;
                }
                return (atk100base + (linked - minLinked) * atk100scale) / 100;
            },
        };
        const baseStatFromAttrsTypes = {
            hp: ([attrBits, typeBits, hp100], { monster }) => hp100 && (monster.anyAttributes(common_8.idxsFromBits(attrBits)) || monster.anyTypes(common_8.idxsFromBits(typeBits))) ? hp100 / 100 : 1,
            atk: ([attrBits, typeBits, _, atk100], { ping }) => atk100 && (ping.source.anyAttributes(common_8.idxsFromBits(attrBits)) || ping.source.anyTypes(common_8.idxsFromBits(typeBits))) ? atk100 / 100 : 1,
            rcv: ([attrBits, typeBits, _, _a, rcv100], { monster }) => rcv100 && (monster.anyAttributes(common_8.idxsFromBits(attrBits)) || monster.anyTypes(common_8.idxsFromBits(typeBits))) ? rcv100 / 100 : 1,
        };
        const atkRcvFromAttrTypeSubHp = {
            atk: ([thresh, attrBits, typeBits, atk100], { ping, percentHp }) => {
                if (atk100 && percentHp <= thresh && (ping.source.anyAttributes(common_8.idxsFromBits(attrBits)) || ping.source.anyTypes(common_8.idxsFromBits(typeBits)))) {
                    return atk100 / 100;
                }
                return 1;
            },
            rcvPost: ([thresh, attrBits, typeBits, _, rcv100], { monster, percentHp }) => {
                if (rcv100 && percentHp <= thresh && (monster.anyAttributes(common_8.idxsFromBits(attrBits)) || monster.anyTypes(common_8.idxsFromBits(typeBits)))) {
                    return rcv100 / 100;
                }
                return 1;
            },
        };
        const atkFromAttrTypeAboveHp = {
            atk: ([thresh, attrBits, typeBits, atk100], { ping, percentHp }) => {
                if (atk100 && percentHp >= thresh && (ping.source.anyAttributes(common_8.idxsFromBits(attrBits)) || ping.source.anyTypes(common_8.idxsFromBits(typeBits)))) {
                    return atk100 / 100;
                }
                return 1;
            }
        };
        const atkScalingFromMatchedColors2 = {
            atk: ([attr1bit, attr2bit, attr3bit, attr4bit, attr5bit, minMatch, atk100base, atk100scale], { comboContainer }) => {
                atk100scale = atk100scale || 0;
                const maxCounts = {
                    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, '-1': 0,
                };
                for (const attrBit of [attr1bit, attr2bit, attr3bit, attr4bit, attr5bit].filter((a) => a > 0)) {
                    const attr = common_8.idxsFromBits(attrBit)[0];
                    maxCounts[attr]++;
                }
                let total = 0;
                for (const attr in maxCounts) {
                    total += Math.min(comboContainer.combos[common_8.COLORS[attr]].length, maxCounts[attr]);
                }
                if (total < minMatch) {
                    return 1;
                }
                return ((total - minMatch) * atk100scale + atk100base) / 100;
            },
        };
        function hasAll(ids, team) {
            return ids
                .filter((id) => id > 0)
                .every((id) => team.some((monster) => monster.id == id));
        }
        const baseStatFromRequiredSubs = {
            hp: ([a, b, c, d, e, hp100], { team }) => hp100 && hasAll([a, b, c, d, e], team) ? hp100 / 100 : 1,
            atk: ([a, b, c, d, e, _, atk100], { team }) => atk100 && hasAll([a, b, c, d, e], team) ? atk100 / 100 : 1,
            rcv: ([a, b, c, d, e, _, _a, rcv100], { team }) => rcv100 && hasAll([a, b, c, d, e], team) ? rcv100 / 100 : 1,
        };
        const baseStatShieldFromAttributeType = {
            hp: ([attrBits, typeBits, hp100], { monster }) => hp100 && monster.anyAttributeTypeBits(attrBits, typeBits) ? hp100 / 100 : 1,
            atk: ([attrBits, typeBits, _, atk100], { ping }) => atk100 && ping.source.anyAttributeTypeBits(attrBits, typeBits) ? atk100 / 100 : 1,
            rcv: ([attrBits, typeBits, _, _a, rcv100], { monster }) => rcv100 && monster.anyAttributeTypeBits(attrBits, typeBits) ? rcv100 / 100 : 1,
            damageMult: ([_, _a, _b, _c, _d, _e, attrBits, shield], { enemy }) => shield && common_8.idxsFromBits(attrBits).some((attr) => attr == enemy.getAttribute()) ? 1 - shield / 100 : 1,
        };
        const atkRcvShieldFromSubHp = {
            atk: ([thresh, ...remaining], context) => thresh <= context.percentHp ? (baseStatFromAttrType.atk || (() => 1))(remaining, context) : 1,
            rcvPost: ([thresh, ...remaining], context) => thresh <= context.percentHp ? (baseStatFromAttrType.rcv || (() => 1))(remaining, context) : 1,
            damageMult: ([thresh, ...remaining], context) => thresh <= context.percentHp ? (baseStatFromAttrType.damageMult || (() => 1))(remaining, context) : 1,
        };
        const atkRcvShieldFromAboveHp = {
            atk: ([thresh, ...remaining], context) => thresh >= context.percentHp ? (baseStatFromAttrType.atk || (() => 1))(remaining, context) : 1,
            rcvPost: ([thresh, ...remaining], context) => thresh >= context.percentHp ? (baseStatFromAttrType.rcv || (() => 1))(remaining, context) : 1,
            damageMult: ([thresh, ...remaining], context) => thresh >= context.percentHp ? (baseStatFromAttrType.damageMult || (() => 1))(remaining, context) : 1,
        };
        const atkRcvFromAttrsTypesSkillUse = {
            atk: ([attrBits, typeBits, atk100], { ping, skillUsed }) => atk100 && skillUsed && ping.source.anyAttributeTypeBits(attrBits, typeBits) ? atk100 / 100 : 1,
            rcvPost: ([attrBits, typeBits, _, rcv100], { monster, skillUsed }) => rcv100 && skillUsed && monster.anyAttributeTypeBits(attrBits, typeBits) ? rcv100 / 100 : 1,
        };
        const stackingBaseStatsFromAttrs = {
            hp: ([attr1bit, hp100a, _a, _b, attr2bit, hp100b], { monster }) => {
                return (hp100a && monster.anyAttributeTypeBits(attr1bit, 0) ? hp100a / 100 : 1) * ((hp100b && monster.anyAttributeTypeBits(attr2bit, 0) ? hp100b / 100 : 1));
            },
            atk: ([attr1bit, _a, atk100a, _b, attr2bit, _c, atk100b], { ping }) => {
                return (atk100a && ping.source.anyAttributeTypeBits(attr1bit, 0) ? atk100a / 100 : 1) * ((atk100b && ping.source.anyAttributeTypeBits(attr2bit, 0) ? atk100b / 100 : 1));
            },
            rcv: ([attr1bit, _a, _b, rcv100a, attr2bit, _c, _d, rcv100b], { monster }) => {
                return (rcv100a && monster.anyAttributeTypeBits(attr1bit, 0) ? rcv100a / 100 : 1) * ((rcv100b && monster.anyAttributeTypeBits(attr2bit, 0) ? rcv100b / 100 : 1));
            },
        };
        const stackingBaseStatsFromTypes = {
            hp: ([type1bit, hp100a, _a, _b, type2bit, hp100b], { monster }) => {
                return (hp100a && monster.anyAttributeTypeBits(0, type1bit) ? hp100a / 100 : 1) * ((hp100b && monster.anyAttributeTypeBits(0, type2bit) ? hp100b / 100 : 1));
            },
            atk: ([type1bit, _a, atk100a, _b, type2bit, _c, atk100b], { ping }) => {
                return (atk100a && ping.source.anyAttributeTypeBits(0, type1bit) ? atk100a / 100 : 1) * ((atk100b && ping.source.anyAttributeTypeBits(0, type2bit) ? atk100b / 100 : 1));
            },
            rcv: ([type1bit, _a, _b, rcv100a, type2bit, _c, _d, rcv100b], { monster }) => {
                return (rcv100a && monster.anyAttributeTypeBits(0, type1bit) ? rcv100a / 100 : 1) * ((rcv100b && monster.anyAttributeTypeBits(0, type2bit) ? rcv100b / 100 : 1));
            },
        };
        // 138 see 116
        const atkFromAttrTypeMultiThresh = {
            atk: ([attrBits, typeBits, threshA, isGreaterA, atk100a, threshB, isGreaterB, atk100b], { ping, percentHp }) => {
                if (!ping.source.anyAttributeTypeBits(attrBits, typeBits)) {
                    return 1;
                }
                let multiplier = 1;
                if ((isGreaterA && percentHp >= threshA) || (!isGreaterA && percentHp <= threshA)) {
                    multiplier *= atk100a / 100;
                }
                if ((isGreaterB && percentHp >= threshB) || (!isGreaterB && percentHp <= threshB)) {
                    multiplier *= atk100b / 100;
                }
                return multiplier;
            },
        };
        const expBoost = {
            exp: ([exp100]) => exp100 / 100,
        };
        const rcvFromHpa = {
            rcvPost: ([rcv100], { comboContainer }) => comboContainer.combos['h'].some((combo) => combo.count == 4) ? rcv100 / 100 : 1,
        };
        const fiveOrbEnhance = {
            atk: ([_unknown, atk100], { ping, comboContainer }) => comboContainer.combos[common_8.COLORS[ping.attribute]].some((combo) => combo.count == 5 && combo.enhanced > 0) ? atk100 / 100 : 1,
        };
        const atkRcvShieldFromHeartCross = {
            atk: ([atk100], { comboContainer }) => atk100 && comboContainer.combos['h'].some((c) => c.shape == common_8.Shape.CROSS) ? atk100 / 100 : 1,
            rcvPost: ([_, rcv100], { comboContainer }) => rcv100 && comboContainer.combos['h'].some((c) => c.shape == common_8.Shape.CROSS) ? rcv100 / 100 : 1,
            damageMult: ([_, _a, shield], { comboContainer }) => shield && comboContainer.combos['h'].some((c) => c.shape == common_8.Shape.CROSS) ? 1 - shield / 100 : 1,
        };
        const baseStatFromAttrTypeMultiplayer = {
            hp: (params, context) => context.isMultiplayer ? (baseStatFromAttrsTypes.hp || (() => 1))(params, context) : 1,
            atk: (params, context) => context.isMultiplayer ? (baseStatFromAttrsTypes.atk || (() => 1))(params, context) : 1,
            rcv: (params, context) => context.isMultiplayer ? (baseStatFromAttrsTypes.rcv || (() => 1))(params, context) : 1,
        };
        const atkScalingFromCross = {
            atk: (params, { comboContainer }) => {
                let multiplier = 1;
                for (let i = 0; i + 1 < params.length; i += 2) {
                    const count = comboContainer.combos[common_8.COLORS[params[i]]].filter((c) => c.shape == common_8.Shape.CROSS).length;
                    multiplier *= (params[i + 1] / 100) ** count;
                }
                return multiplier;
            },
        };
        const baseStatFromAttrsTypesMinMatch = {
            minOrbMatch: ([minMatch]) => minMatch,
            hp: ([_, ...params], context) => (baseStatFromAttrsTypes.hp || (() => 1))(params, context),
            atk: ([_, ...params], context) => (baseStatFromAttrsTypes.atk || (() => 1))(params, context),
            rcv: ([_, ...params], context) => (baseStatFromAttrsTypes.rcv || (() => 1))(params, context),
        };
        const bigBoardLeader = {
            bigBoard: true,
        };
        const baseStatFromAttrsTypesNoSkyfall = {
            noSkyfall: true,
            hp: baseStatFromAttrsTypes.hp,
            atk: baseStatFromAttrsTypes.atk,
            rcv: baseStatFromAttrsTypes.rcv,
            damageMult: baseStatFromAttrsTypes.damageMult,
        };
        const atkRcvScalingFromColorMatches = {
            atk: ([a, b, c, d, minMatch, atk100base, _, scale100], { comboContainer }) => {
                if (!atk100base) {
                    return 1;
                }
                scale100 = scale100 || 0;
                const attrs = [a, b, c, d].filter(Boolean).map((bit) => common_8.idxsFromBits(bit)[0]);
                const counts = {};
                for (const attr of attrs) {
                    counts[attr] = (attr in counts) ? counts[attr] + 1 : 1;
                }
                let total = 0;
                for (const attr in counts) {
                    total += Math.max(comboContainer.combos[common_8.COLORS[attr]].length, counts[attr]);
                }
                if (total < minMatch) {
                    return 1;
                }
                return ((total - minMatch) * scale100 + atk100base) / 100;
            },
            rcvPost: ([a, b, c, d, minMatch, _, rcv100base, scale100], { comboContainer }) => {
                if (!rcv100base) {
                    return 1;
                }
                scale100 = scale100 || 0;
                const attrs = [a, b, c, d].filter(Boolean).map((bit) => common_8.idxsFromBits(bit)[0]);
                const counts = {};
                for (const attr of attrs) {
                    counts[attr] = (attr in counts) ? counts[attr] + 1 : 1;
                }
                let total = 0;
                for (const attr in counts) {
                    total += Math.max(comboContainer.combos[common_8.COLORS[attr]].length, counts[attr]);
                }
                if (total < minMatch) {
                    return 1;
                }
                return ((total - minMatch) * scale100 + rcv100base) / 100;
            },
        };
        const atkRcvScalingFromUniqueColorMatches = {
            atk: ([a, b, c, _, d, e], context) => (atkScalingFromUniqueColorMatches.atk || (() => 1))([a, b, c, d, e], context),
            rcvPost: ([attrBits, minColors, _, rcv100base, scale100, maxColors], { team, comboContainer }) => {
                maxColors = maxColors || minColors;
                scale100 = scale100 || 0;
                let count = countMatchedColors(attrBits, comboContainer, team);
                if (count < minColors) {
                    return 1;
                }
                if (count > maxColors) {
                    count = minColors;
                }
                return ((count - minColors) * scale100 + rcv100base) / 100;
            },
        };
        const atkRcvScalingFromCombos = {
            atk: ([minCombo, atk100base, _, atk100scale, _a, maxCombo], { comboContainer }) => {
                atk100scale = atk100scale || 0;
                maxCombo = maxCombo || minCombo;
                let count = comboContainer.comboCount();
                if (count < minCombo) {
                    return 1;
                }
                if (count > maxCombo) {
                    count = maxCombo;
                }
                return ((count - minCombo) * atk100scale + atk100base) / 100;
            },
            rcvPost: ([minCombo, _, rcv100base, _a, rcv100scale, maxCombo], { comboContainer }) => {
                rcv100scale = rcv100scale || 0;
                maxCombo = maxCombo || minCombo;
                let count = comboContainer.comboCount();
                if (count < minCombo) {
                    return 1;
                }
                if (count > maxCombo) {
                    count = maxCombo;
                }
                return ((count - minCombo) * rcv100scale + rcv100base) / 100;
            },
        };
        const atkRcvScalingFromLinkedOrbs = {
            atk: ([attrBits, minLinked, atk100base, _, atk100scale, _a, maxLinked], { comboContainer }) => {
                if (!atk100base) {
                    return 1;
                }
                atk100scale = atk100scale || 0;
                maxLinked = maxLinked || minLinked;
                let highest = 0;
                for (const attr of common_8.idxsFromBits(attrBits)) {
                    for (const c of comboContainer.combos[common_8.COLORS[attr]]) {
                        if (c.count > highest) {
                            highest = c.count;
                        }
                    }
                }
                if (highest < minLinked) {
                    return 1;
                }
                return ((highest - minLinked) * atk100scale + atk100base) / 100;
            },
            rcvPost: ([attrBits, minLinked, _, rcv100base, _a, rcv100scale, maxLinked], { comboContainer }) => {
                if (!rcv100base) {
                    return 1;
                }
                rcv100scale = rcv100scale || 0;
                maxLinked = maxLinked || minLinked;
                let highest = 0;
                for (const attr of common_8.idxsFromBits(attrBits)) {
                    for (const c of comboContainer.combos[common_8.COLORS[attr]]) {
                        if (c.count > highest) {
                            highest = c.count;
                        }
                    }
                }
                if (highest < minLinked) {
                    return 1;
                }
                return ((highest - minLinked) * rcv100scale + rcv100base) / 100;
            },
        };
        const atkShieldFromCombos = {
            atk: ([minCombos, atk100], { comboContainer }) => atk100 && comboContainer.comboCount() >= minCombos ? atk100 / 100 : 1,
            damageMult: ([minCombos, _, shield], { comboContainer }) => shield && comboContainer.comboCount() >= minCombos ? 1 - shield / 100 : 1,
        };
        const atkShieldFromColorMatches = {
            atk: ([attrBits, minMatch, atk100], { comboContainer, team }) => atk100 && countMatchedColors(attrBits, comboContainer, team) >= minMatch ? atk100 / 100 : 1,
            damageMult: ([attrBits, minMatch, _, shield], { comboContainer, team }) => shield && countMatchedColors(attrBits, comboContainer, team) >= minMatch ? 1 - shield / 100 : 1,
        };
        const atkShieldFromColorMatches2 = {
            atk: ([a, b, c, d, minMatch, atk100], { comboContainer }) => {
                if (!atk100) {
                    return 1;
                }
                const counts = {};
                for (const attr of [a, b, c, d].filter(Boolean).map((v) => common_8.idxsFromBits(v)[0])) {
                    counts[attr] = counts[attr] ? counts[attr] + 1 : 1;
                }
                let total = 0;
                for (const attr in counts) {
                    total += Math.min(counts[attr], comboContainer.combos[common_8.COLORS[attr]].length);
                }
                return total >= minMatch ? atk100 : 1;
            },
            damageMult: ([a, b, c, d, minMatch, _, shield], { comboContainer }) => {
                if (!shield) {
                    return 1;
                }
                const counts = {};
                for (const attr of [a, b, c, d].filter(Boolean).map((v) => common_8.idxsFromBits(v)[0])) {
                    counts[attr] = counts[attr] ? counts[attr] + 1 : 1;
                }
                let total = 0;
                for (const attr in counts) {
                    total += Math.min(counts[attr], comboContainer.combos[common_8.COLORS[attr]].length);
                }
                return total >= minMatch ? shield : 1;
            },
        };
        const baseStatFromCollab = {
            hp: ([c1, c2, c3, hp100], { team }) => hp100 && team.slice(1, team.length - 1).every((sub) => [c1, c2, c3].filter(Boolean).some((c) => c == sub.getCard().collab)) ? hp100 / 100 : 1,
            atk: ([c1, c2, c3, _, atk100], { team }) => atk100 && team.slice(1, team.length - 1).every((sub) => [c1, c2, c3].filter(Boolean).some((c) => c == sub.getCard().collab)) ? atk100 / 100 : 1,
            rcv: ([c1, c2, c3, _, _a, rcv100], { team }) => rcv100 && team.slice(1, team.length - 1).every((sub) => [c1, c2, c3].filter(Boolean).some((c) => c == sub.getCard().collab)) ? rcv100 / 100 : 1,
        };
        const atkScalingFromOrbsRemaining = {
            atk: ([a, b, c, d, e, maxRemaining, atk100base, atk100scale], { comboContainer }) => {
                atk100scale = atk100scale || 0;
                const unknowns = [a, b, c, d, e].filter(Boolean);
                if (unknowns.length) {
                    console.warn(`Unhandled parameters from atkScalingFromOrbsRemaining: ${[a, b, c, d, e]}`);
                }
                let remaining = comboContainer.getBoardSize();
                for (const c in comboContainer.combos) {
                    // Do not count uncolored combos, since these can be from actives/combo orbs.
                    if (c == 'u') {
                        continue;
                    }
                    for (const combo of comboContainer.combos[c]) {
                        remaining -= combo.count;
                    }
                }
                if (remaining > maxRemaining) {
                    return 1;
                }
                if (remaining < 0) {
                    remaining = 0;
                }
                return ((maxRemaining - remaining) * atk100scale + atk100base) / 100;
            },
        };
        const baseStatFromAttrsTypesFixedTime = {
            fixedTime: ([fixedSeconds]) => fixedSeconds,
            hp: ([, ...params], context) => (baseStatFromAttrsTypes.hp || (() => 1))(params, context),
            atk: ([, ...params], context) => (baseStatFromAttrsTypes.atk || (() => 1))(params, context),
            rcv: ([, ...params], context) => (baseStatFromAttrsTypes.rcv || (() => 1))(params, context),
        };
        const atkShieldFromLinkedOrbs = {
            atk: ([attrBits, minMatched, atk100], { comboContainer }) => {
                if (!atk100) {
                    return 1;
                }
                let highest = 0;
                for (const attr of common_8.idxsFromBits(attrBits)) {
                    for (const c of comboContainer.combos[common_8.COLORS[attr]]) {
                        highest = c.count > highest ? c.count : highest;
                    }
                }
                return highest > minMatched ? atk100 / 100 : 1;
            },
            damageMult: ([attrBits, minMatched, _, shield], { comboContainer }) => {
                if (!shield) {
                    return 1;
                }
                let highest = 0;
                for (const attr of common_8.idxsFromBits(attrBits)) {
                    for (const c of comboContainer.combos[common_8.COLORS[attr]]) {
                        highest = c.count > highest ? c.count : highest;
                    }
                }
                return highest > minMatched ? shield / 100 : 1;
            },
        };
        const atkRcvShieldFromMultThresh = {
            atk: ([attrBits, typeBits, minThresh, aboveAtk100, _, maxThresh, belowAtk100], { ping, percentHp }) => {
                if (!ping.source.anyAttributeTypeBits(attrBits, typeBits) || (!aboveAtk100 && !belowAtk100)) {
                    return 1;
                }
                maxThresh = maxThresh || 0;
                belowAtk100 = belowAtk100 || 100;
                let multiplier = 1;
                if (percentHp >= minThresh) {
                    multiplier *= aboveAtk100 / 100;
                }
                if (percentHp <= maxThresh) {
                    multiplier *= belowAtk100 / 100;
                }
                return multiplier;
            },
            rcvPost: ([attrBits, typeBits, _, _a, _b, maxThresh, _c, belowRcv100], { monster, percentHp }) => {
                if (!maxThresh || !belowRcv100 || !monster.anyAttributeTypeBits(attrBits, typeBits)) {
                    return 1;
                }
                return percentHp <= maxThresh ? belowRcv100 / 100 : 1;
            },
            damageMult: ([_, _a, minThresh, _b, shield], { percentHp }) => {
                return shield && percentHp <= minThresh ? 1 - shield / 100 : 1;
            },
        };
        const baseStatFromAttrsTypesTimeExtend = {
            timeExtend: ([sec100]) => sec100 / 100,
            hp: ([_, ...params], context) => (baseStatFromAttrsTypes.hp || (() => 1))(params, context),
            atk: ([_, ...params], context) => (baseStatFromAttrsTypes.atk || (() => 1))(params, context),
            rcv: ([_, ...params], context) => (baseStatFromAttrsTypes.rcv || (() => 1))(params, context),
        };
        const baseStatFromAttrsTypesBigBoard = {
            bigBoard: true,
            hp: baseStatFromAttrsTypes.hp,
            atk: baseStatFromAttrsTypes.atk,
            rcv: baseStatFromAttrsTypes.rcv,
        };
        const atkPlusCombosFromAllLinkedOrbs = {
            atk: ([attrBits, minLinked, atk100], { comboContainer }) => {
                if (!atk100) {
                    return 1;
                }
                return common_8.idxsFromBits(attrBits)
                    .every((attr) => comboContainer.combos[common_8.COLORS[attr]]
                    .some((c) => c.count >= minLinked)) ? atk100 / 100 : 1;
            },
            plusCombo: ([attrBits, minLinked, _, comboBonus], { comboContainer }) => {
                if (!comboBonus) {
                    return 1;
                }
                return common_8.idxsFromBits(attrBits)
                    .every((attr) => comboContainer.combos[common_8.COLORS[attr]]
                    .some((c) => c.count >= minLinked)) ? comboBonus : 0;
            },
        };
        const atkRcvShieldFromLMatch = {
            atk: ([attrBits, atk100], { comboContainer }) => atk100 && common_8.idxsFromBits(attrBits).some((attr) => comboContainer.combos[common_8.COLORS[attr]].some((c) => c.shape == common_8.Shape.L)) ? atk100 / 100 : 1,
            rcvPost: ([attrBits, _, rcv100], { comboContainer }) => rcv100 && common_8.idxsFromBits(attrBits).some((attr) => comboContainer.combos[common_8.COLORS[attr]].some((c) => c.shape == common_8.Shape.L)) ? rcv100 / 100 : 1,
            damageMult: ([attrBits, _, _a, shield], { comboContainer }) => shield && common_8.idxsFromBits(attrBits).some((attr) => comboContainer.combos[common_8.COLORS[attr]].some((c) => c.shape == common_8.Shape.L)) ? 1 - shield / 100 : 1,
        };
        const atkPlusCombosFromRainbow = {
            atk: ([attrBits, minColors, atk100], { comboContainer, team }) => atk100 && countMatchedColors(attrBits, comboContainer, team) > minColors ? atk100 / 100 : 1,
            plusCombo: ([attrBits, minColors, _, comboBonus], { comboContainer, team }) => comboBonus && countMatchedColors(attrBits, comboContainer, team) > minColors ? comboBonus : 0,
        };
        const disablePoisonDamage = {
            ignorePoison: true,
        };
        const atkShieldAwokenClearFromHealing = {
            atk: ([thresh, atk100], { healing }) => atk100 && healing >= thresh ? atk100 / 100 : 1,
            damageMult: ([thresh, _, damageMult], { healing }) => damageMult && healing >= thresh ? damageMult / 100 : 1,
            awokenBindClear: ([thresh, _, _a, awokenBindClear], { healing }) => awokenBindClear && healing >= thresh ? awokenBindClear : 0,
        };
        const trueBonusFromColorMatches = {
            trueBonusAttack: ([attrBits, minMatch, trueDamage], { team, comboContainer }) => countMatchedColors(attrBits, comboContainer, team) >= minMatch ? trueDamage : 0,
        };
        const trueBonusFromLinkedOrbs = {
            trueBonusAttack: ([attrBits, minLinked, trueDamage], { comboContainer }) => {
                return common_8.idxsFromBits(attrBits)
                    .some((attr) => comboContainer.combos[common_8.COLORS[attr]]
                    .some((c) => c.count >= minLinked)) ? trueDamage : 1;
            },
        };
        const LEADER_SKILL_GENERATORS = {
            11: atkFromAttr,
            12: bonusAttackScale,
            13: autoHealLead,
            14: resolveLead,
            15: pureTimeExtend,
            16: shieldAgainstAll,
            17: shieldAgainstAttr,
            22: atkFromType,
            23: hpFromType,
            24: rcvFromType,
            26: atkUnconditional,
            28: atkRcvFromAttr,
            29: baseStatFromAttr,
            30: hpFromTwoTypes,
            31: atkFromTwoTypes,
            33: drumSounds,
            36: shieldAgainstTwoAttr,
            38: shieldFromHp,
            39: atkRcvFromSubHp,
            40: atkFromTwoAttrs,
            41: counterattack,
            43: shieldFromAboveHp,
            44: atkRcvFromAboveHp,
            45: atkRcvFromAttr,
            46: hpFromTwoAttrs,
            48: hpFromAttr,
            49: rcvFromAttr,
            52: dropBoost,
            54: coinBoost,
            61: atkScalingFromUniqueColorMatches,
            62: atkHpFromType,
            63: hpRcvFromType,
            64: atkRcvFromType,
            65: baseStatFromType,
            66: atkFromCombos,
            67: hpRcvFromAttr,
            69: atkFromAttrType,
            73: atkHpFromAttrType,
            75: atkRcvFromAttrType,
            76: baseStatFromAttrType,
            77: atkFromTwoTypes,
            79: atkRcvFromTwoTypes,
            94: atkRcvFromAttrAndSubHp,
            95: atkRcvFromTypeAndSubHp,
            96: atkRcvFromAttrAndAboveHp,
            97: atkRcvFromTypeAndAboveHp,
            98: atkScalingFromCombos,
            100: atkRcvFromSkill,
            101: atkFromExactCombos,
            103: atkRcvFromCombos,
            104: atkRcvFromAttrCombos,
            105: atkFromDecreasedRcv,
            106: atkFromDecreasedHp,
            107: hpDecrease,
            108: atkFromTypeDecreasedHp,
            109: atkFromLinkedOrbs,
            111: atkHpFromTwoAttrs,
            114: baseStatFromTwoAttrs,
            119: atkScalingFromLinkedOrbs,
            121: baseStatFromAttrsTypes,
            122: atkRcvFromAttrTypeSubHp,
            123: atkFromAttrTypeAboveHp,
            124: atkScalingFromMatchedColors2,
            125: baseStatFromRequiredSubs,
            129: baseStatShieldFromAttributeType,
            130: atkRcvShieldFromSubHp,
            131: atkRcvShieldFromAboveHp,
            133: atkRcvFromAttrsTypesSkillUse,
            136: stackingBaseStatsFromAttrs,
            137: stackingBaseStatsFromTypes,
            138: multipleLeaderSkills,
            139: atkFromAttrTypeMultiThresh,
            148: expBoost,
            149: rcvFromHpa,
            150: fiveOrbEnhance,
            151: atkRcvShieldFromHeartCross,
            155: baseStatFromAttrTypeMultiplayer,
            157: atkScalingFromCross,
            158: baseStatFromAttrsTypesMinMatch,
            159: atkScalingFromLinkedOrbs,
            162: bigBoardLeader,
            163: baseStatFromAttrsTypesNoSkyfall,
            164: atkRcvScalingFromColorMatches,
            165: atkRcvScalingFromUniqueColorMatches,
            166: atkRcvScalingFromCombos,
            167: atkRcvScalingFromLinkedOrbs,
            169: atkShieldFromCombos,
            170: atkShieldFromColorMatches,
            171: atkShieldFromColorMatches2,
            175: baseStatFromCollab,
            177: atkScalingFromOrbsRemaining,
            178: baseStatFromAttrsTypesFixedTime,
            182: atkShieldFromLinkedOrbs,
            183: atkRcvShieldFromMultThresh,
            185: baseStatFromAttrsTypesTimeExtend,
            186: baseStatFromAttrsTypesBigBoard,
            192: atkPlusCombosFromAllLinkedOrbs,
            193: atkRcvShieldFromLMatch,
            194: atkPlusCombosFromRainbow,
            197: disablePoisonDamage,
            198: atkShieldAwokenClearFromHealing,
            199: trueBonusFromColorMatches,
            200: trueBonusFromLinkedOrbs,
        };
        // Functions for libraries to call directly.
        function bigBoard(id) {
            const playerSkill = vm.model.playerSkills[id];
            // Handle multiple leader skills.
            if (playerSkill.internalEffectId == 138) {
                return playerSkill.internalEffectArguments.some((i) => bigBoard(i));
            }
            return LEADER_SKILL_GENERATORS[playerSkill.internalEffectId].bigBoard || false;
        }
        exports.bigBoard = bigBoard;
        function noSkyfall(id) {
            const playerSkill = vm.model.playerSkills[id];
            if (playerSkill.internalEffectId == 138) {
                return playerSkill.internalEffectArguments.some((i) => noSkyfall(i));
            }
            return LEADER_SKILL_GENERATORS[playerSkill.internalEffectId].noSkyfall || false;
        }
        exports.noSkyfall = noSkyfall;
        function ignorePoison(id) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            // Handle multiple leader skills.
            if (internalEffectId == 138) {
                return internalEffectArguments.some((i) => ignorePoison(i));
            }
            return LEADER_SKILL_GENERATORS[internalEffectId].ignorePoison || false;
        }
        exports.ignorePoison = ignorePoison;
        function drumEffect(id) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            // Handle multiple leader skills.
            if (internalEffectId == 138) {
                return internalEffectArguments.some((i) => drumEffect(i));
            }
            return LEADER_SKILL_GENERATORS[internalEffectId].drumEffect || false;
        }
        exports.drumEffect = drumEffect;
        function minOrbMatch(id) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return Math.max(...internalEffectArguments.map((i) => minOrbMatch(i)));
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].minOrbMatch || (() => 3))(internalEffectArguments);
        }
        exports.minOrbMatch = minOrbMatch;
        function resolve(id) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return Math.min(...internalEffectArguments.map((i) => resolve(i)));
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].resolve || (() => 101))(internalEffectArguments);
        }
        exports.resolve = resolve;
        function fixedTime(id) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                const times = internalEffectArguments.map((i) => fixedTime(i)).filter((t) => t > 0);
                return times.length ? Math.min(...times) : 0;
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].fixedTime || (() => 0))(internalEffectArguments);
        }
        exports.fixedTime = fixedTime;
        function timeExtend(id) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return internalEffectArguments.map((i) => timeExtend(i)).reduce((total, value) => total + value);
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].timeExtend || (() => 0))(internalEffectArguments);
        }
        exports.timeExtend = timeExtend;
        function hp(id, context) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return internalEffectArguments.map((i) => hp(i, context)).reduce((total, value) => total * value);
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].hp || (() => 1))(internalEffectArguments, context);
        }
        exports.hp = hp;
        function atk(id, context) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return internalEffectArguments.map((i) => atk(i, context)).reduce((total, value) => total * value);
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].atk || (() => 1))(internalEffectArguments, context);
        }
        exports.atk = atk;
        function rcv(id, context) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return internalEffectArguments.map((i) => rcv(i, context)).reduce((total, value) => total * value);
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].rcv || (() => 1))(internalEffectArguments, context);
        }
        exports.rcv = rcv;
        function rcvPost(id, context) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return internalEffectArguments.map((i) => rcvPost(i, context)).reduce((total, value) => total * value);
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].rcvPost || (() => 1))(internalEffectArguments, context);
        }
        exports.rcvPost = rcvPost;
        function damageMult(id, context) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return internalEffectArguments.map((i) => damageMult(i, context)).reduce((total, value) => total * value);
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].damageMult || (() => 1))(internalEffectArguments, context);
        }
        exports.damageMult = damageMult;
        function plusCombo(id, context) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return internalEffectArguments.map((i) => plusCombo(i, context)).reduce((total, value) => total + value, 0);
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].plusCombo || (() => 0))(internalEffectArguments, context);
        }
        exports.plusCombo = plusCombo;
        function drop(id) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return internalEffectArguments.map((i) => drop(i)).reduce((total, value) => total * value);
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].drop || (() => 1))(internalEffectArguments);
        }
        exports.drop = drop;
        function coins(id) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return internalEffectArguments.map((i) => coins(i)).reduce((total, value) => total * value);
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].coins || (() => 1))(internalEffectArguments);
        }
        exports.coins = coins;
        function exp(id) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return internalEffectArguments.map((i) => exp(i)).reduce((total, value) => total * value);
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].exp || (() => 1))(internalEffectArguments);
        }
        exports.exp = exp;
        function autoHeal(id) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return internalEffectArguments.map((i) => autoHeal(i)).reduce((total, value) => total + value);
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].autoHeal || (() => 0))(internalEffectArguments);
        }
        exports.autoHeal = autoHeal;
        function trueBonusAttack(id, context) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return internalEffectArguments.map((i) => trueBonusAttack(i, context)).reduce((total, value) => total + value);
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].trueBonusAttack || (() => 0))(internalEffectArguments, context);
        }
        exports.trueBonusAttack = trueBonusAttack;
        function bonusAttack(id) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return internalEffectArguments.map((i) => bonusAttack(i)).reduce((total, value) => total + value);
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].bonusAttack || (() => 0))(internalEffectArguments);
        }
        exports.bonusAttack = bonusAttack;
        function counter(id) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return internalEffectArguments
                    .map((i) => counter(i))
                    .reduce((aggregate, next) => ({
                    multiplier: aggregate.multiplier + next.multiplier,
                    attribute: Math.max(aggregate.attribute, next.attribute)
                }));
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].counter || (() => ({ multiplier: 0, attribute: -1 })))(internalEffectArguments);
        }
        exports.counter = counter;
        function awokenBindClear(id, context) {
            const { internalEffectId, internalEffectArguments } = vm.model.playerSkills[id];
            if (internalEffectId == 138) {
                return internalEffectArguments.map((i) => awokenBindClear(i, context)).reduce((total, value) => total + value);
            }
            return (LEADER_SKILL_GENERATORS[internalEffectId].awokenBindClear || (() => 0))(internalEffectArguments, context);
        }
        exports.awokenBindClear = awokenBindClear;
    });
    define("player_team", ["require", "exports", "common", "monster_instance", "templates", "leaders"], function (require, exports, common_9, monster_instance_1, templates_4, leaders) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        const DEFAULT_STATE = {
            awakenings: true,
            currentHp: 0,
            skillUsed: true,
            shieldPercent: 0,
            attributesShielded: [
                common_9.Attribute.FIRE, common_9.Attribute.WATER, common_9.Attribute.WOOD,
                common_9.Attribute.LIGHT, common_9.Attribute.DARK
            ],
            burst: {
                attrRestrictions: [],
                typeRestrictions: [],
                awakenings: [],
                multiplier: 1,
                awakeningScale: 0,
            },
            ignoreDamageAbsorb: false,
            ignoreAttributeAbsorb: false,
            ignoreDamageVoid: false,
            timeBonus: 0,
            timeIsMult: false,
            rcvMult: 0,
            fixedHp: 0,
        };
        class StoredTeams {
            constructor(team) {
                this.teams = {};
                if (window.localStorage.idcStoredTeams) {
                    this.teams = JSON.parse(window.localStorage.idcStoredTeams);
                }
                this.display = new templates_4.StoredTeamDisplay(
                // On Save Click
                () => {
                    this.saveTeam(team.toJson());
                    this.update();
                }, 
                // On Load Click
                (name) => {
                    team.fromJson(this.getTeam(name));
                }, 
                // On Delete Click
                (name) => {
                    this.deleteTeam(name);
                    this.update();
                });
                this.update();
            }
            getElement() {
                return this.display.getElement();
            }
            update() {
                this.display.update(Object.keys(this.teams));
            }
            getTeam(name) {
                if (!(name in this.teams)) {
                    throw 'Invalid team name.';
                }
                return this.teams[name];
            }
            // TODO: Add confirmation if overriding.
            saveTeam(teamJson) {
                this.teams[teamJson.title] = teamJson;
                window.localStorage.idcStoredTeams = JSON.stringify(this.teams);
            }
            // TODO: Add confirmation.
            deleteTeam(title) {
                delete this.teams[title];
                window.localStorage.idcStoredTeams = JSON.stringify(this.teams);
            }
        }
        const SHARED_AWAKENINGS = new Set([
            common_9.Awakening.SKILL_BOOST,
            common_9.Awakening.SKILL_BOOST_PLUS,
            common_9.Awakening.RESIST_POISON,
            common_9.Awakening.RESIST_POISON_PLUS,
            common_9.Awakening.RESIST_BLIND,
            common_9.Awakening.RESIST_BLIND_PLUS,
            common_9.Awakening.RESIST_JAMMER,
            common_9.Awakening.RESIST_JAMMER_PLUS,
            common_9.Awakening.SBR,
            common_9.Awakening.RESIST_CLOUD,
            common_9.Awakening.RESIST_TAPE,
        ]);
        class Team {
            constructor() {
                this.teamName = '';
                this.description = '';
                this.monsters = [];
                this.playerMode = 1;
                this.activeTeamIdx = 0;
                this.activeMonster = 0;
                this.lastMaxHp = 0;
                this.state = Object.assign({}, DEFAULT_STATE);
                /**
                 * 1P: 0-5
                 * 2P: 0-4, 6-10
                 * 3P: 0-5, 6-11, 12-17
                 */
                for (let i = 0; i < 18; i++) {
                    this.monsters.push(new monster_instance_1.MonsterInstance());
                }
                this.storage = new StoredTeams(this);
                this.teamPane = new templates_4.TeamPane(this.storage.getElement(), this.monsters.map((monster) => monster.getElement()), (idx) => this.setActiveMonsterIdx(idx), (idx) => this.setActiveTeamIdx(idx), (name) => {
                    this.teamName = name;
                });
                this.updateIdxCb = () => null;
                // TODO: Battle Display - Different Class?
            }
            setActiveMonsterIdx(idx) {
                if (this.playerMode == 2) {
                    if (idx == 5) {
                        idx = 6;
                    }
                    if (idx == 11) {
                        idx = 0;
                    }
                }
                this.activeMonster = idx;
                this.updateIdxCb(idx);
            }
            resetState(partial = false) {
                const state = this.state;
                if (partial) {
                    state.currentHp = state.currentHp / this.lastMaxHp * this.getHp();
                    this.lastMaxHp = this.getHp();
                    return;
                }
                Object.assign(this.state, DEFAULT_STATE);
                state.currentHp = this.getHp();
            }
            isMultiplayer() {
                return this.playerMode != 1;
            }
            toPdchu() {
                const strings = this.monsters.map((monster) => monster.toPdchu());
                function combine(s) {
                    return s.join(' / ');
                }
                switch (this.playerMode) {
                    case 1:
                        return combine(strings.slice(0, 6));
                    case 2:
                        return combine(strings.slice(0, 5)) + ' ; ' + combine(strings.slice(6, 12));
                    case 3:
                        return [combine(strings.slice(0, 6)), combine(strings.slice(6, 12)), combine(strings.slice(12, 18))].join(' ; ');
                }
                // Unhandled player mode.
                return '';
            }
            fromPdchu(s) {
                const teamStrings = s.split(';');
                // We don't support >3P.
                if (teamStrings.length > 3) {
                    teamStrings.length = 3;
                }
                this.setPlayerMode(teamStrings.length);
                const defaultMonster = '1929 | +0aw0lv1';
                for (let i = 0; i < teamStrings.length; i++) {
                    const multiplierRegex = /\*\s*\d$/;
                    if (!teamStrings[i]) {
                        teamStrings[i] = defaultMonster;
                    }
                    let monsterStrings = teamStrings[i].split('/')
                        .map((s) => s.trim())
                        .reduce((allStrings, monsterString) => {
                        const multiply = monsterString.match(multiplierRegex);
                        let count = 1;
                        if (multiply) {
                            count = Number(multiply[0][multiply[0].length - 1]);
                            monsterString = monsterString.substring(0, multiply.index);
                        }
                        for (let j = 0; j < count; j++) {
                            allStrings = allStrings.concat([monsterString]);
                        }
                        return allStrings;
                    }, []);
                    if (this.playerMode == 2) {
                        if (monsterStrings.length > 5) {
                            monsterStrings.length = 5;
                        }
                        while (monsterStrings.length < 5) {
                            monsterStrings.push(defaultMonster);
                        }
                    }
                    else {
                        if (monsterStrings.length > 6) {
                            monsterStrings.length = 6;
                        }
                        while (monsterStrings.length < 6) {
                            monsterStrings.push(defaultMonster);
                        }
                    }
                    const team = this.getTeamAt(i);
                    for (let j = 0; j < monsterStrings.length; j++) {
                        team[j].fromPdchu(monsterStrings[j]);
                    }
                }
                this.update();
            }
            getTeamAt(teamIdx) {
                const monsters = Array(6);
                for (let i = 0; i < 6; i++) {
                    monsters[i] = this.monsters[this.getMonsterIdx(teamIdx, i)];
                }
                return monsters;
            }
            getActiveTeam() {
                return this.getTeamAt(this.activeTeamIdx);
            }
            toJson() {
                return {
                    playerMode: this.playerMode,
                    title: this.teamName,
                    description: this.description,
                    monsters: this.monsters.map((monster) => monster.toJson()),
                };
            }
            fromJson(json) {
                this.playerMode = json.playerMode || 1;
                this.teamName = json.title || 'UNTITLED';
                this.description = json.description || '';
                for (let i = 0; i < this.monsters.length; i++) {
                    if (i < json.monsters.length) {
                        this.monsters[i].fromJson(json.monsters[i]);
                    }
                    else {
                        this.monsters[i].setId(-1);
                    }
                }
                this.update();
            }
            setPlayerMode(newMode) {
                if (newMode != 1 && newMode != 2 && newMode != 3) {
                    throw `Invalid player mode, must be 1, 2, or 3, got ${newMode}`;
                }
                if (this.playerMode == 2) {
                    /**
                     0 1 2 3  4 6
                     6 7 8 9 10 0
                     x x x x x x
                     ->
                     0 1 2 3  4  5
                     6 7 8 9 10 11
                     x x x x  x  x
                     */
                    if (newMode == 3) {
                        this.monsters[5].copyFrom(this.monsters[6]);
                        this.monsters[11].copyFrom(this.monsters[0]);
                    }
                    if (newMode == 1) {
                        this.monsters[5].copyFrom(this.monsters[6]);
                    }
                }
                else if (this.playerMode == 3) {
                }
                else { // Handle 1P
                    if (newMode == 2) {
                        this.monsters[6].copyFrom(this.monsters[5]);
                    }
                }
                this.playerMode = newMode;
                if (this.activeTeamIdx >= newMode) {
                    this.setActiveTeamIdx(newMode - 1);
                }
                // TODO: Update UI to reflect this.
            }
            getHpPercent() {
                if (this.getHp() == 0) {
                    return 0;
                }
                return Math.round(100 * this.state.currentHp / this.getHp());
            }
            setActiveTeamIdx(idx) {
                if (idx >= this.playerMode || idx < 0) {
                    throw `Index should be [0, ${this.playerMode}]`;
                }
                if (this.activeTeamIdx == idx) {
                    return;
                }
                this.activeTeamIdx = idx;
                if (this.playerMode != 2) {
                    this.state.currentHp = this.getHp();
                }
                this.update();
                // this.reloadStatDisplay();
                // TODO: Update visuals and calculations when this happens.
            }
            getMonsterIdx(teamIdx, localIdx) {
                let idx = 6 * teamIdx + localIdx;
                if (this.playerMode == 2 &&
                    ((teamIdx == 0 && localIdx == 5) || (teamIdx == 1 && localIdx == 5))) {
                    idx = (1 - teamIdx) * 6;
                }
                return idx;
            }
            getIndividualHp(includeLeaderSkill = false, includeP2 = false) {
                const monsters = this.getActiveTeam();
                const partialLead = (monster) => {
                    return leaders.hp(monsters[0].getCard().leaderSkillId, {
                        monster: monster,
                        team: monsters,
                        isMultiplayer: this.isMultiplayer(),
                    });
                };
                const partialHelper = (monster) => {
                    return leaders.hp(monsters[5].getCard().leaderSkillId, {
                        monster: monster,
                        team: monsters,
                        isMultiplayer: this.isMultiplayer(),
                    });
                };
                if (includeP2) {
                    const p2Monsters = this.getTeamAt(this.activeTeamIdx ^ 1);
                    for (let i = 1; i < 5; i++) {
                        monsters.push(p2Monsters[i]);
                    }
                }
                if (!includeLeaderSkill) {
                    return monsters.map((monster) => monster.getHp(this.isMultiplayer(), this.state.awakenings));
                }
                let hps = [];
                const teamHpAwakeningsMult = 1 + (this.state.awakenings ? (monsters.reduce((total, monster) => total + monster.countAwakening(common_9.Awakening.TEAM_HP), 0) * 0.05) : 0);
                for (const monster of monsters) {
                    if (!monster.id || monster.id <= 0) {
                        hps.push(0);
                        continue;
                    }
                    const hpMult = partialLead(monster) * partialHelper(monster);
                    const hpBase = monster.getHp(this.isMultiplayer(), this.state.awakenings);
                    hps.push(Math.round(hpBase * hpMult * teamHpAwakeningsMult));
                }
                return hps;
            }
            getHp() {
                if (this.state.fixedHp) {
                    return this.state.fixedHp;
                }
                const individualHps = this.getIndividualHp(true, this.playerMode == 2);
                return individualHps.reduce((total, next) => total + next, 0);
            }
            getIndividualRcv(includeLeaderSkill = false) {
                let rcvs = [];
                const monsters = this.getActiveTeam();
                if (!includeLeaderSkill) {
                    return monsters.map((monster) => monster.getRcv(this.isMultiplayer(), this.state.awakenings));
                }
                const partialLead = (monster) => {
                    return leaders.rcv(monsters[0].getCard().leaderSkillId, {
                        monster: monster,
                        team: monsters,
                        isMultiplayer: this.isMultiplayer(),
                    });
                };
                const partialHelper = (monster) => {
                    return leaders.rcv(monsters[5].getCard().leaderSkillId, {
                        monster: monster,
                        team: monsters,
                        isMultiplayer: this.isMultiplayer(),
                    });
                };
                const teamRcvAwakeningsMult = 1 + (this.state.awakenings ? (monsters.reduce((total, monster) => total + monster.countAwakening(common_9.Awakening.TEAM_RCV), 0) * 0.1) : 0);
                for (const monster of monsters) {
                    if (!monster.id || monster.id <= 0) {
                        rcvs.push(0);
                        continue;
                    }
                    const rcvMult = partialLead(monster) * partialHelper(monster);
                    const rcvBase = monster.getRcv(this.isMultiplayer(), this.state.awakenings);
                    rcvs.push(Math.round(rcvBase * rcvMult * teamRcvAwakeningsMult));
                }
                return rcvs;
            }
            // Base recovery before matching.
            getRcv() {
                const rcvs = this.getIndividualRcv(true);
                const totalRcv = rcvs.reduce((total, next) => total + next, 0);
                return totalRcv > 0 ? totalRcv : 0;
            }
            getTime() {
                const monsters = this.getActiveTeam();
                const leadId = monsters[0].getCard().leaderSkillId;
                const helperId = monsters[5].getCard().leaderSkillId;
                const fixedLead = leaders.fixedTime(leadId);
                const fixedHelper = leaders.fixedTime(helperId);
                if (fixedLead || fixedHelper) {
                    return Math.min(...[fixedLead, fixedHelper].filter(Boolean));
                }
                let time = 5;
                time += leaders.timeExtend(leadId) + leaders.timeExtend(helperId);
                for (const monster of monsters) {
                    time += monster.countAwakening(common_9.Awakening.TIME) * 0.5;
                    time += monster.countAwakening(common_9.Awakening.TIME_PLUS);
                    time += monster.latents.filter((l) => l == common_9.Latent.TIME).length * 0.05;
                    time += monster.latents.filter((l) => l == common_9.Latent.TIME_PLUS).length * 0.12;
                }
                if (this.state.timeIsMult) {
                    time *= this.state.timeBonus;
                }
                else {
                    time += this.state.timeBonus;
                }
                return time;
            }
            getBoardWidth() {
                const monsterGroupsToCheck = [[this.monsters[0]]];
                switch (this.playerMode) {
                    case 1:
                        monsterGroupsToCheck[0].push(this.monsters[5]);
                        break;
                    case 2:
                        monsterGroupsToCheck[0].push(this.monsters[6]);
                        break;
                    case 3:
                        monsterGroupsToCheck[0].push(this.monsters[5]);
                        monsterGroupsToCheck.push([this.monsters[6], this.monsters[11]]);
                        monsterGroupsToCheck.push([this.monsters[12], this.monsters[17]]);
                }
                for (const [m1, m2] of monsterGroupsToCheck) {
                    if (leaders.bigBoard(m1.getCard().leaderSkillId)) {
                        continue;
                    }
                    if (leaders.bigBoard(m2.getCard().leaderSkillId)) {
                        continue;
                    }
                    // If neither of the leads have bigBoard, return 6.
                    return 6;
                }
                // All teams have bigBoard.
                return 7;
            }
            update() {
                if (this.playerMode == 2) {
                    this.monsters[5].copyFrom(this.monsters[6]);
                    this.monsters[11].copyFrom(this.monsters[0]);
                }
                this.teamPane.update(this.playerMode, this.teamName, this.description);
                for (const monster of this.monsters) {
                    monster.update(this.isMultiplayer());
                }
                this.teamPane.updateStats(this.getStats());
            }
            countAwakening(awakening) {
                const monsters = this.getActiveTeam();
                if (this.playerMode == 2 && SHARED_AWAKENINGS.has(awakening)) {
                    const p2Monsters = this.getTeamAt(this.activeTeamIdx ^ 1);
                    for (let i = 1; i < 5; i++) {
                        monsters.push(p2Monsters[i]);
                    }
                }
                return monsters.reduce((total, monster) => total + monster.countAwakening(awakening, this.isMultiplayer()), 0);
            }
            getStats() {
                const team = this.getActiveTeam();
                const cds = [];
                for (const monster of team) {
                    const card = monster.getCard();
                    let baseCd = 0;
                    if (card.activeSkillId > 0) {
                        baseCd = common_9.vm.model.playerSkills[card.activeSkillId].maxCooldown;
                    }
                    let inheritCd = 0;
                    const inheritCard = monster.getInheritCard();
                    if (inheritCard && inheritCard.activeSkillId > 0) {
                        inheritCd = common_9.vm.model.playerSkills[inheritCard.activeSkillId].maxCooldown;
                    }
                    if (baseCd && inheritCd) {
                        cds.push(`${baseCd}(${baseCd + inheritCd})`);
                    }
                    else if (baseCd && !inheritCd) {
                        cds.push(`${baseCd}`);
                    }
                    else if (!baseCd && inheritCd) {
                        cds.push(`?(? + ${inheritCd})`);
                    }
                    else {
                        cds.push('');
                    }
                }
                const atks = this.getActiveTeam().map((monster) => monster.getAtk(this.isMultiplayer(), this.state.awakenings));
                const counts = new Map();
                counts.set(common_9.Awakening.SKILL_BOOST, this.countAwakening(common_9.Awakening.SKILL_BOOST) +
                    2 * this.countAwakening(common_9.Awakening.SKILL_BOOST_PLUS));
                counts.set(common_9.Awakening.TIME, this.countAwakening(common_9.Awakening.TIME) +
                    2 * this.countAwakening(common_9.Awakening.TIME_PLUS));
                counts.set(common_9.Awakening.SOLOBOOST, this.countAwakening(common_9.Awakening.SOLOBOOST));
                counts.set(common_9.Awakening.BONUS_ATTACK, this.countAwakening(common_9.Awakening.BONUS_ATTACK));
                counts.set(common_9.Awakening.BONUS_ATTACK_SUPER, this.countAwakening(common_9.Awakening.BONUS_ATTACK_SUPER));
                counts.set(common_9.Awakening.SBR, this.countAwakening(common_9.Awakening.SBR));
                counts.set(common_9.Awakening.RESIST_POISON, this.countAwakening(common_9.Awakening.RESIST_POISON) +
                    5 * this.countAwakening(common_9.Awakening.RESIST_POISON_PLUS));
                counts.set(common_9.Awakening.RESIST_BLIND, this.countAwakening(common_9.Awakening.RESIST_BLIND) +
                    5 * this.countAwakening(common_9.Awakening.RESIST_BLIND_PLUS));
                counts.set(common_9.Awakening.RESIST_JAMMER, this.countAwakening(common_9.Awakening.RESIST_JAMMER) +
                    5 * this.countAwakening(common_9.Awakening.RESIST_JAMMER_PLUS));
                counts.set(common_9.Awakening.RESIST_CLOUD, this.countAwakening(common_9.Awakening.RESIST_CLOUD));
                counts.set(common_9.Awakening.RESIST_TAPE, this.countAwakening(common_9.Awakening.RESIST_TAPE));
                counts.set(common_9.Awakening.OE_FIRE, this.countAwakening(common_9.Awakening.OE_FIRE));
                counts.set(common_9.Awakening.OE_WATER, this.countAwakening(common_9.Awakening.OE_WATER));
                counts.set(common_9.Awakening.OE_WOOD, this.countAwakening(common_9.Awakening.OE_WOOD));
                counts.set(common_9.Awakening.OE_LIGHT, this.countAwakening(common_9.Awakening.OE_LIGHT));
                counts.set(common_9.Awakening.OE_DARK, this.countAwakening(common_9.Awakening.OE_DARK));
                counts.set(common_9.Awakening.OE_HEART, this.countAwakening(common_9.Awakening.OE_HEART));
                return {
                    hps: this.getIndividualHp(),
                    atks: atks,
                    rcvs: this.getIndividualRcv(),
                    cds: cds,
                    totalHp: this.getHp(),
                    totalRcv: this.getRcv(),
                    totalTime: this.getTime(),
                    counts: counts,
                };
            }
        }
        exports.Team = Team;
    });
    /**
     * Main File for Valeria.
     */
    define("valeria", ["require", "exports", "combo_container", "dungeon", "fuzzy_search", "player_team", "templates"], function (require, exports, combo_container_1, dungeon_1, fuzzy_search_3, player_team_1, templates_5) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        async function waitFor(conditionFn, waitMs = 50) {
            while (!conditionFn()) {
                await new Promise((resolve) => setTimeout(resolve, waitMs));
            }
        }
        function annotateMonsterScaling() {
            const VALID_SCALES = new Set([0.7, 1.0, 1, 1.5]);
            for (const id in vm.model.cards) {
                const c = vm.model.cards[id];
                const [hpGrowth, atkGrowth, rcvGrowth] = [c.unknownData[2], c.unknownData[3], c.unknownData[4]];
                if (!VALID_SCALES.has(hpGrowth)) {
                    console.log(`Invalid scaling found! ${hpGrowth} Monster: ${id}`);
                }
                else {
                    c.hpGrowth = hpGrowth;
                }
                if (!VALID_SCALES.has(atkGrowth)) {
                    console.log(`Invalid scaling found! ${atkGrowth} Monster: ${id}`);
                }
                else {
                    c.atkGrowth = atkGrowth;
                }
                if (!VALID_SCALES.has(rcvGrowth)) {
                    console.log(`Invalid scaling found! ${rcvGrowth} Monster: ${id}`);
                }
                else {
                    c.rcvGrowth = rcvGrowth;
                }
            }
        }
        class Valeria {
            constructor() {
                this.display = new templates_5.ValeriaDisplay();
                this.comboContainer = new combo_container_1.ComboContainer();
                // this._testRocheDeleteLater = testRoche();
                this.display.leftTabs.getTab('Combo Editor').appendChild(this.comboContainer.getElement());
                this.monsterEditor = new templates_5.MonsterEditor((ctx) => {
                    const monster = this.team.monsters[this.team.activeMonster];
                    if (ctx.hasOwnProperty('level')) {
                        let level = Number(ctx.level);
                        monster.level = level;
                    }
                    if (ctx.hasOwnProperty('inheritLevel')) {
                        let level = Number(ctx.inheritLevel);
                        monster.inheritLevel = level;
                    }
                    if (ctx.hasOwnProperty('hpPlus')) {
                        monster.setHpPlus(Number(ctx.hpPlus));
                    }
                    if (ctx.hasOwnProperty('atkPlus')) {
                        monster.setAtkPlus(Number(ctx.atkPlus));
                    }
                    if (ctx.hasOwnProperty('rcvPlus')) {
                        monster.setRcvPlus(Number(ctx.rcvPlus));
                    }
                    if (ctx.hasOwnProperty('inheritPlussed')) {
                        monster.inheritPlussed = Boolean(ctx.inheritPlussed);
                    }
                    if (ctx.hasOwnProperty('awakeningLevel')) {
                        monster.awakenings = Number(ctx.awakeningLevel);
                    }
                    if (ctx.hasOwnProperty('superAwakeningIdx')) {
                        monster.superAwakeningIdx = Number(ctx.superAwakeningIdx);
                    }
                    if (ctx.hasOwnProperty('id')) {
                        monster.setId(Number(ctx.id));
                    }
                    if (ctx.hasOwnProperty('inheritId')) {
                        monster.inheritId = Number(ctx.inheritId);
                    }
                    if (ctx.hasOwnProperty('addLatent')) {
                        monster.addLatent(ctx.addLatent);
                    }
                    if (ctx.hasOwnProperty('removeLatent')) {
                        monster.removeLatent(Number(ctx.removeLatent));
                    }
                    this.team.update();
                    this.updateMonsterEditor();
                    console.log(ctx);
                });
                this.monsterEditor.pdchu.importButton.onclick = () => {
                    this.team.fromPdchu(this.monsterEditor.pdchu.io.value);
                };
                this.monsterEditor.pdchu.exportButton.onclick = () => {
                    this.monsterEditor.pdchu.io.value = this.team.toPdchu();
                };
                this.display.leftTabs.getTab('Monster Editor').appendChild(this.monsterEditor.getElement());
                this.team = new player_team_1.Team();
                this.team.updateIdxCb = () => {
                    this.updateMonsterEditor();
                };
                this.team.fromPdchu('3298 (5414 | lv99 +297) | lv110  sa3 / 2957 (5212) | lv103  sa1 / 5521 (5417 | lv99 +297) | lv110  sa3 / 5382 (5239) | lv110  sa5 / 5141 (5411) | lv110  sa3 / 5209 (5190) | lv110 sa2');
                this.display.panes[1].appendChild(this.team.teamPane.getElement());
                this.dungeon = new dungeon_1.DungeonInstance();
                this.display.panes[2].appendChild(this.dungeon.getPane());
            }
            updateMonsterEditor() {
                const monster = this.team.monsters[this.team.activeMonster];
                this.monsterEditor.update({
                    id: monster.id,
                    inheritId: monster.inheritId,
                    level: monster.level,
                    hpPlus: monster.hpPlus,
                    atkPlus: monster.atkPlus,
                    rcvPlus: monster.rcvPlus,
                    awakeningLevel: monster.awakenings,
                    inheritLevel: monster.inheritLevel,
                    inheritPlussed: monster.inheritPlussed,
                    latents: monster.latents,
                    superAwakeningIdx: monster.superAwakeningIdx,
                });
            }
            getElement() {
                return this.display.getElement();
            }
        }
        async function init() {
            await waitFor(() => vm.page() != 0);
            annotateMonsterScaling();
            fuzzy_search_3.SearchInit();
            // testRoche();
            // testAnother();
            const valeria = new Valeria();
            document.body.appendChild(valeria.getElement());
            for (const el of document.getElementsByClassName('main-site-div')) {
                el.style.display = 'none';
            }
        }
        init();
    });
    //# sourceMappingURL=bundle.js.map
    'marker:resolver';

    function get_define(name) {
        if (defines[name]) {
            return defines[name];
        }
        else if (defines[name + '/index']) {
            return defines[name + '/index'];
        }
        else {
            const dependencies = ['exports'];
            const factory = (exports) => {
                try {
                    Object.defineProperty(exports, "__cjsModule", { value: true });
                    Object.defineProperty(exports, "default", { value: require(name) });
                }
                catch {
                    throw Error(['module "', name, '" not found.'].join(''));
                }
            };
            return { dependencies, factory };
        }
    }
    const instances = {};
    function resolve(name) {
        if (instances[name]) {
            return instances[name];
        }
        if (name === 'exports') {
            return {};
        }
        const define = get_define(name);
        instances[name] = {};
        const dependencies = define.dependencies.map(name => resolve(name));
        define.factory(...dependencies);
        const exports = dependencies[define.dependencies.indexOf('exports')];
        instances[name] = (exports['__cjsModule']) ? exports.default : exports;
        return instances[name];
    }
    if (entry[0] !== null) {
        return resolve(entry[0]);
    }
})();