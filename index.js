const TelegramApi = require('node-telegram-bot-api');

// const token ='6129715496:AAEMbDlHnjWpnt_Hs255Pdv7OJuVkmb8Dfg';

const token = '6096177895:AAGuB4WU05_SG0sXBYcaOLLdqb15tNLZuA8';

const bot = new TelegramApi(token, { polling: true })


const bju_types = [
    {
        id: 1,
        name: 'Белок',
    },
    {
        id: 2,
        name: 'Углеводы',
    },
    {
        id: 3,
        name: 'Жиры',
    },
    {
        id: 4,
        name: 'Кето десерт',
    },
    {
        id: 5,
        name: 'Десерт с углеводами',
    },
];

const ingredients = [
    {
        id: 1,
        name: 'курица',
        protein: 31,
        fats: 3.6,
        carbohydrates: 0,
        popular: 1,
        bju_types: [1],
    },
    {
        id: 2,
        name: 'картофель',
        protein: 2,
        fats: 0.4,
        carbohydrates: 16.3,
        popular: 1,
        bju_types: [2, 5],
    },
    {
        id: 3,
        name: 'творог',
        protein: 18,
        fats: 9,
        carbohydrates: 3,
        popular: 1,
        bju_types: [1],
    },
    {
        id: 4,
        name: 'яйцо',
        protein: 7,
        fats: 5,
        carbohydrates: 0.5,
        popular: 1,
        bju_types: [1, 3],
    },
    {
        id: 5,
        name: 'мука',
        protein: 13,
        fats: 2.5,
        carbohydrates: 72,
        popular: 0,
        bju_types: [2],
    },
    {
        id: 6,
        name: 'твердый сыр',
        protein: 26.3,
        fats: 25.6,
        carbohydrates: 0,
        popular: 1,
        bju_types: [2, 4],
    },
    {
        id: 7,
        name: 'макароны',
        protein: 5,
        fats: 1,
        carbohydrates: 72,
        popular: 1,
        bju_types: [2],
    },
    {
        id: 8,
        name: 'индейка',
        protein: 5,
        fats: 1,
        carbohydrates: 72,
        popular: 1,
        bju_types: [1],
    },
];

const types = [
    {
        id: 1,
        name: 'breakfast',
    },
    {
        id: 2,
        name: 'lanch',
    },
    {
        id: 3,
        name: 'dinner',
    },
    {
        id: 4,
        name: 'dessert',
    }

];


const recipe = [
    {
        id: 1,
        name: 'хачапури',
        weight: 300,
        ingredients: [
            {
                ingredientID: 3,
                weight: 100,
            },
            {
                ingredientID: 4,
                weight: 1,
            },
            {
                ingredientID: 5,
                weight: 40,
            },
            {
                ingredientID: 6,
                weight: 40,
            },
        ],
        protein: 45,
        fats: 29.8,
        carbohydrates: 32.8,
        totalCcal: 581.8,
        instructions: [
            '1. Творог, яйцо, муку смешиваем вилкой',
            '2. Лепим форму-лодочку и отправляем в духовку на 180 гр на 10 минут',
            '3. Достаем, кладем сыр и снова в духовку до того, как рпсплавится сыр',
            '4. Дотаем, добавляем желток и в духовку на пару минут',
        ],
        types: {
            id: 1
        }
    },
    {
        id: 2,
        weight: 300,
        name: 'печеный картофель',
        ingredients: [
            {
                ingredientID: 1,
                weight: 200,
            },
            {
                ingredientID: 2,
                weight: 130,
            },
        ],
        protein: 32,
        fats: 4.7,
        carbohydrates: 25.1,
        totalCcal: 278,
        instructions: [
            '1. Отвариваем картофель в мундире',
            '2. Филе мелко режим, солим и перчим и отправляем на сковородку на 5 минут',
            '3. Режем готовый картофель',
            '4. Отправляем в сковородку к филе на 5 минут',
        ],
        types: {
            id: 1
        },

    },
    {
        id: 3,
        name: 'суп',
        ingredients: [
            {
                ingredientID: 2,
                weight: 30,
            },
            {
                ingredientID: 7,
                weight: 30,
            }
        ],
        protein: 3,
        fats: 5,
        carbohydrates: 12,
        totalCcal: 250,
        instructions: [
            '1. Творог, яйцо, муку смешиваем вилкой',
            '2. Лепим форму-лодочку и отправляем в духовку на 180 гр на 10 минут',
            '3. Достаем, кладем сыр и снова в духовку до того, как рпсплавится сыр',
            '4. Дотаем, добавляем желток и в духовку на пару минут',
        ]

    },

]
const startButtons = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Завтрак', callback_data: 'breakfast' }],
            [{ text: 'Обед', callback_data: 'lanch' }],
            [{ text: 'Ужин', callback_data: 'dinner' }],
            [{ text: 'Десерт', callback_data: 'dessert' }]
        ]
    })
}

const caloriesButtons = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '300-400кКал', callback_data: '300' }],
            [{ text: '400-500кКал', callback_data: '500' }],
            [{ text: '500-700кКал', callback_data: '700' }],

        ]
    })
}

const productButtons = {
    reply_markup: JSON.stringify({
        inline_keyboard: bjuTypesButtons(),
        // [
        //     [{ text: 'Белок', callback_data: 'protein' }],
        //     [{ text: 'Углеводы', callback_data: 'carbohydrates' }],
        //     [{ text: 'Жиры', callback_data: 'fats' }],
        //     [{ text: 'Кето десерт', callback_data: 'keto' }],
        //     [{ text: 'Десерт с углеводами', callback_data: 'carboDese' }],
        // ]
    })
}
// const proteinButtons = {
//     reply_markup: JSON.stringify({
//         inline_keyboard: ingredientsButtons()
//         // [
//         // [{ text: 'Курица', callback_data: 'ingredient::1' }],
//         // [{ text: 'Индейка', callback_data: 'turkey' }],
//         // [{ text: 'Говядина', callback_data: 'beef' }],
//         // [{ text: 'Рыба', callback_data: 'fish' }],
//         // [{ text: 'Яйца', callback_data: 'eggs' }],
//         // ]
//     })
// }

function ingredientsButtons(bju_type) {
    let result = [];

    console.log("bju_type", bju_type)
    debugger //line added``` 

    for (i = 0; i < ingredients.length; i++) {
        if (ingredients[i].popular === 1 && ingredients[i].bju_types.indexOf(bju_type) > -1) {
            result.push([{ text: ingredients[i].name, callback_data: "ingredient::" + ingredients[i].id.toString() }]);
        }
    }

    return {
        reply_markup: JSON.stringify({
            inline_keyboard: result
        })
    }
}

function bjuTypesButtons() {
    let result = [];
    for (i = 0; i < bju_types.length; i++) {
        result.push([{ text: bju_types[i].name, callback_data: "bju_types::" + bju_types[i].id.toString() }]);
    }

    return result;
}

function getReciepts(ingredientID) {
    let response = ``
    let matchedRecipes = [];
    for (i = 0; i < recipe.length; i++) {

        for (j = 0; j < recipe[i].ingredients.length; j++) {
            if (recipe[i].ingredients[j].ingredientID === ingredientID) {
                matchedRecipes.push(recipe[i])
                break
            }
        }
    }

    // const matchedRecipes = recipe.filter(recipe =>
    //     recipe.ingredients.some(ingredient => ingredient.includes(ingredientID))
    // );


    if (matchedRecipes.length > 0) {
        response = `Рецепты с ингредиентом "${ingredientID}":\n\n`;
        matchedRecipes.forEach(recipe => {
            response += `Название: ${recipe.name}\n`;
            response += `Ингредиенты: ` + renderIngredients(recipe.ingredients) + `\n`;
            response += `Белки: ${recipe.protein} г\n`;
            response += `Жиры: ${recipe.fats} г\n`;
            response += `Углеводы: ${recipe.carbohydrates} г\n`;
            response += `Общая калорийность: ${recipe.totalCcal} ккал\n`;
            response += `Описание:\n${recipe.instructions.join('\n')}\n\n`;
        });
    }

    return response;
}

function renderIngredients(ingredients) {
    let result = [];
    console.log(ingredients)
    // let ingredient;

    ingredients.forEach(ingredient => {
        let _ingredient = findIngredientById(ingredient.ingredientID)
        if (ingredient !== false) {
            result.push(_ingredient.name + ` - ${ingredient.weight}`);
        } else {
            result.push(_ingredient.name + ` - ${ingredient.weight}`);
        }
    });

    return result.join(', ');
}

function findIngredientById(ingredientID) {
    for (i = 0; i <= ingredients.length; i++) {
        if (ingredients[i].id === ingredientID) {
            return ingredients[i]
        }
    }

    return false;
}

const start = () => {
    bot.setMyCommands([
        { command: '/start', description: 'приветствие' },
        { command: '/info', description: 'получить инфу' }
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;


        if (text === '/start') {
            await bot.sendMessage(chatId, `Добро пожаловать в мир еды`)
            return bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/1f2/0f2/1f20f28d-20fb-321c-aa6c-d5a174dffd4c/3.webp')
        }
        if (text === '/info') {
            await bot.sendMessage(chatId, 'какой прием пищи?')
            return bot.sendMessage(chatId, 'выбери', startButtons);
        }


        return bot.sendMessage(chatId, 'я тебя не понимаю, попробуй еще раз')
    })
}
bot.on('callback_query', async msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    if (data === 'breakfast' || data === 'lanch' || data === 'dinner' || data === 'dessert') {
        await bot.sendMessage(chatId, 'выбери', caloriesButtons);
    }
    console.log(msg);
})
bot.on('callback_query', async msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    if (data === '300' || data === '500' || data === '700') {
        await bot.sendMessage(chatId, 'выбери', productButtons);
    }

})

bot.on('callback_query', async msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id;

    let optionsData = data.split('::');

    if (optionsData[0] === 'bju_types') {
        await bot.sendMessage(chatId, 'выбери', ingredientsButtons(parseInt(optionsData[1])));
    } else if (optionsData[0] === 'ingredient') {
        let response = getReciepts(parseInt(optionsData[1]))

        await bot.sendMessage(chatId, response);
    }





    // if (data === 'protein') {
    //     await bot.sendMessage(chatId, 'выбери', proteinButtons);
    // }
})


// bot.on('callback_query', async msg => {
//     const data = msg.data;
//     const chatId = msg.message.chat.id;

//     if (data === 'chiken') {

//         let response = 'Вот все рецепты:\n\n';
//         recipeBreakfast.forEach(recipe => {
//             response += `${recipe.name}:\nИнгредиенты: ${recipe.ingredients}\n\n БЖУ${recipe.protein} ${recipe.fats} ${recipe.carbohydrates}\n
//         Ккал${recipe.totalCcal}\n\nОписание:${recipe.instructions}
//         \n`;
//         });

//         await bot.sendMessage(chatId, response);
//     }
// });


// bot.on('callback_query', async msg => {
//     const data = msg.data;
//     const chatId = msg.message.chat.id;

//     if (data === 'chicken') {
//       const selectedIngredient = data; 

//       const matchedRecipes = recipeBreakfast.filter(recipe =>
//         recipe.ingredients.some(ingredient => ingredient.includes(selectedIngredient))
//       );

//       if (matchedRecipes.length > 0) {
//         let response = `Рецепты с ингредиентом "${selectedIngredient}":\n\n`;
//         matchedRecipes.forEach(recipe => {
//           response += `Название: ${recipe.name}\n`;
//           response += `Ингредиенты: ${recipe.ingredients.join(', ')}\n`;
//           response += `Белки: ${recipe.protein} г\n`;
//           response += `Жиры: ${recipe.fats} г\n`;
//           response += `Углеводы: ${recipe.carbohydrates} г\n`;
//           response += `Общая калорийность: ${recipe.totalCcal} ккал\n`;
//           response += `Описание:\n${recipe.instructions.join('\n')}\n\n`;
//         });
//         await bot.sendMessage(chatId, response);
//       }
//     }
//   });


start();