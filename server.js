const Discord = require("discord.js");
const Enmap = require("enmap");
const Express = require("express")
require('dotenv').config();

const app = Express();

const client = new Discord.Client();

//client.login('ODQ3MjI1ODk5MjQ5MTcyNDgw.YK6-mw.srlHsoUkfj1Nse-cdPAm85OB68w');
client.login(process.env.DISCORD_TOKEN);

client.usuarios = new Enmap("usuarios");

client.setMaxListeners(20);

//BOT PRENDIDO
client.on("ready", () => {
    console.log("Im 21 years old and I've already wasted my entire life.");    
});

//✅ Corriendo OK
//✅✅ Corriendo y checkeado
//⛔ En Proceso
//⏳ Duración del mensaje
//💵 Emoji de alteración del mensaje (Easter Egg)
//🔒 Bloqueado en una categoría
//🔓 Desbloqueado en todos lados
//🔐 Se puede desbloquear el mensaje con un (Easter Egg)
//💬 Mensaje no interactivo
//🔥 My Anarchist Waifu (Categoría)
//🤖 AntiBot
//🔮 OnlyAdmins 
//🎈 Comandos Activos
//🧰 Comandos de Testing Activos
//📄 Embeds

//LISTEN 🎧
//#region
app.get("/",(req,res) =>{
    res.send("Escuchar");
  })
  
  app.listen(300,() =>{
    console.log("Escuchando")
  })
//#endregion
//LISTEN 🎧


//COMANDOS 🎈🎈🎈🎈
//#region 
//COMANDOS --> burcomandos ✅✅ 30 SEGUNDOS⏳⏳ 🔒 Solo se abre en la categoria 🔥 🤖 #1
client.on("message", (message) => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() === '%burcomandos' && message.channel.parentID === '846878746027491348') 
    {        
        message.channel.send(comandosBur).then(eMsg => 
        {
            //TIMEOUT 30 ⏳
            /////////////////////////////
            function timeOutaso(mensajeBorrado) 
            {
                return new Promise((resolve, reject) => {
                    setTimeout(() => 
                    {
                    if (mensajeBorrado)
                        resolve()
                    else
                        reject( 
                            eMsg.edit(blancoBur .setDescription('Hasta luego, tengo que irme.. ⌛') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')),
                            setTimeout(() => { eMsg.delete().catch(error => {console.log(error)}) }, 4000),
                            setTimeout(() => { message.delete().catch(error => {console.log(error)}) },4000)
                        )
                    })
                })
            }

            setTimeout(() => 
            {
                timeOutaso(eMsg.deleted).then(result => {}).catch(err => {})
            }, 30000);
            //TIMEOUT 30 ⏳

        });         
    }else if(message.content === '%burcomandos')
    {
        message.channel.send(acaNo).then(eMsg => 
        {
            //TIMEOUT 5 ⏳
            /////////////////////////////
            function timeOutaso(mensajeBorrado) 
            {
                return new Promise((resolve, reject) => {
                    setTimeout(() => 
                    {
                    if (mensajeBorrado)
                        resolve()
                    else
                        reject( 
                            eMsg.edit(blancoBur .setDescription('Hasta luego, tengo que irme.. ⌛') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')),
                            setTimeout(() => { eMsg.delete().catch(error => {console.log(error)}) }, 4000),
                            setTimeout(() => { message.delete().catch(error => {console.log(error)}) },4000)
                        )
                    })
                })
            }

            setTimeout(() => 
            {
                timeOutaso(eMsg.deleted).then(result => {}).catch(err => {})
            }, 5000);
            //TIMEOUT 5 ⏳
        });
    }
});

//CHAU --> burchau ✅✅ 5 SEGUNDOS⏳ 🤖 #2
client.on("message", (message) => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() === '%burchau') 
    {        
        message.channel.send(adios .setDescription(`${message.author} se despide...`)).then(eMsg => 
        {    
                setTimeout(function(){
                    
                    message.delete().catch(error => {console.log(error)});
    
                    eMsg.delete().catch(error => {console.log(error)});
                        
                }, 5000); 

        });   
    }
})

//HELP --> burhelp ✅✅ 00:30 segundos⏳⏳ 🔐 Solo se abre en la categoria 🔥+💵 💬 🤖 #3
client.on("message", (message) => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() === '%burhelp') 
    {    
        message.channel.send(helpMe).then(eMsg => 
            {
                eMsg.react('<:sadge:820987711460474911>');

                const stopFilter = (reaction, user) => reaction.emoji.name === "💵" && user.id === message.author.id; //SALIR

                const stopBur = eMsg.createReactionCollector(stopFilter, {time: 20000, dispose: true});

                //TIMEOUT 30 ⏳
                /////////////////////////////
                function timeOutaso(mensajeBorrado) 
                {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => 
                        {
                        if (mensajeBorrado)
                            resolve()
                        else
                            reject( 
                                eMsg.edit(blancoBur .setDescription('Bueno Adios.. ⌛') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')),
                                setTimeout(() => { eMsg.delete().catch(error => {console.log(error)}) }, 4000),
                                setTimeout(() => { message.delete().catch(error => {console.log(error)}) },4000)
                            )
                        })
                    })
                }

                setTimeout(() => 
                {
                    timeOutaso(eMsg.deleted).catch(err => {console.log(err)})
                }, 35000);
                //TIMEOUT 30 ⏳
                
                if(message.channel.parentID === '846878746027491348')
                {
                    stopBur.on("collect", r =>{

                        
                        eMsg.edit(blancoBur .setDescription('Tal vez si pueda ayudarte... \n') .setImage("https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710"));
                                        
                            
                            setTimeout(function(){
                                eMsg.edit(blancoBur .setDescription('Tal vez si pueda ayudarte... \n\n Usa **%burcomandos**...'))   
                            }, 1500);

                            setTimeout(function(){ 
                                eMsg.edit(blancoBur .setDescription('Tal vez si pueda ayudarte... \n\n Usa **%burcomandos**... \n\n pero no le digas a <@364555074900328460> que yo te dije...') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')) 
                            }, 3500);

                            setTimeout(function(){ 
                                eMsg.edit(blancoBur .setDescription('Bueno adios...') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')) 
                            }, 12000);   
                    
                            
                    });
                }else
                {
                    stopBur.on("collect", r =>{
                        setTimeout(function(){ 
                            eMsg.edit(blancoBur .setDescription('...') .setImage('https://static.wikia.nocookie.net/undertale/images/0/0b/Burgerpants_face_1.png/revision/latest/scale-to-width-down/110?cb=20160103175652') )   
                        }, 1500);

                        setTimeout(function(){ 
                            eMsg.edit(blancoBur .setDescription('Mi puesto de trabajo esta en **<#846878746027491348>**...\n\n Así que no puedo aceptarlo...') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') )   
                        }, 3500);

                        setTimeout(function(){ 
                            eMsg.edit(blancoBur .setDescription('Bueno adios...') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')) 
                        }, 12000);                        
                    });
                }
            });         
    } 
});

//BURGUERPANTS --> burguerpants ✅✅ 35 segundos⏳⏳ 🔓 💬 🤖 #4
client.on("message", (message) => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() === '%burguerpants') 
    {        
        message.channel.send(blancoBur .setDescription('Que quien soy? \n') .setImage("https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316")).then(eMsg => 
        {
            setTimeout(function(){ 
                eMsg.edit(blancoBur .setDescription('Que quien soy? \n\n Bueno...<@364555074900328460> Me contrató para que... \n') .setImage("https://static.wikia.nocookie.net/undertale/images/4/48/Burgerpants4.gif/revision/latest/scale-to-width-down/212?cb=20151212023034&path-prefix=es"))
            }, 3500)

            setTimeout(function(){ 
                eMsg.edit(blancoBur .setDescription('Que quien soy? \n\n Bueno...<@364555074900328460> Me contrató para que \n\n Me encargue de un puesto en **<#846878746027491348>** \n'))
            }, 5000)
            
            setTimeout(function(){ 
                eMsg.edit(blancoBur .setDescription('Que quien soy? \n\n Bueno...<@364555074900328460> Me contrató para que \n\n Me encargue de un puesto en **<#846878746027491348>** \n\n La inauguración empieza cuando <#846885946640695366> termine\n') .setImage("https://static.wikia.nocookie.net/undertale/images/8/8c/Burgerpants3.gif/revision/latest/scale-to-width-down/217?cb=20151212023000&path-prefix=es"))
            }, 6500)
                  
            setTimeout(function(){ 
                eMsg.edit(blancoBur .setDescription('Que quien soy? \n\n Bueno...<@364555074900328460> Me contrató para que \n\n Me encargue de un puesto en **<#846878746027491348>** \n\n La inauguración empieza cuando <#846885946640695366> termine  \n\n Usa **%burhelp** si necesitas mi ayuda\n') .setImage("https://static.wikia.nocookie.net/undertale/images/8/8c/Burgerpants3.gif/revision/latest/scale-to-width-down/217?cb=20151212023000&path-prefix=es"))
            }, 8000)
            setTimeout(function(){ 
                eMsg.react("🍔");
            }, 9500)
            
           const stopFilter = (reaction, user) => reaction.emoji.name === "🍔" && user.id === message.author.id; //SALIR

           const stopBur = eMsg.createReactionCollector(stopFilter, {time:34000, dispose: true}); 

            //TIMEOUT 35 ⏳
            /////////////////////////////
            function timeOutaso(mensajeBorrado) 
            {
                return new Promise((resolve, reject) => {
                    setTimeout(() => 
                    {
                    if (mensajeBorrado)
                        resolve()
                    else
                        reject( 
                            eMsg.edit(blancoBur .setDescription('Tengo que volver a mi trabajo.. ⌛') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')),
                            setTimeout(() => { eMsg.delete().catch(error => {console.log(error)}) }, 4000),
                            setTimeout(() => { message.delete().catch(error => {console.log(error)}) },4000)
                        )
                    })
                })
            }

            setTimeout(() => 
            {
                timeOutaso(eMsg.deleted).then(result => {}).catch(err => {})
            }, 35000);
            //TIMEOUT 35 ⏳

           //SALIR
            stopBur.on("collect", r =>{

                eMsg.edit(adios .setDescription('Nos vemos luego... \n\n Tengo que volver al trabajo...'));
                setTimeout(function(){                    
                    
                    eMsg.delete().catch(error => {console.log(error)});

                    return message.delete().catch(error => {console.log(error)});
                    
                }, 5000);
                
            });

        });         
    }   
});

//BOSS --> burboss ✅✅ 00:06 segundos⏳ Solo se abre en la categoria 🔥 🔓 🤖 #5
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() === '%burboss' && message.channel.parentID === '846878746027491348') 
    { 
        message.channel.send(adminCall).then(eMsg => {

            setTimeout(function(){
                eMsg.edit(blancoBur .setDescription('Ya lo llamé asi que adiós') .setImage('https://static.wikia.nocookie.net/undertale/images/d/d5/Burgerpants_face_4.gif/revision/latest/scale-to-width-down/122?cb=20151103104906'));
             }, 3000);
             
            eMsg.delete({ timeout: 6000 });
            message.delete({ timeout: 6000 });
        })           
        message.guild.roles.cache.get('848031701438300160').members.forEach(member => member.send(blancoBur .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') .setDescription(`Hola.. Necesitan un admin en... \n **P I K D O S 𝙧𝙚𝙗𝙤𝙧𝙣**  ${message.channel} \n\n Te llamó ${message.author}` )));
        
    }else 
    if(message.content === '%burboss')
    {
        message.channel.send(acaNo);
    }
});

//BURBET --> burbet solo -> 💬 ✅✅ 00:05 segundos ⏳ 🤖 #6
client.on("message", message =>{
    if(message.author.bot) return;
    if(message.content.toLowerCase() === "%burbet" && message.channel.parentID === '846878746027491348')
    { 
        message.channel.send(acaNo .setDescription('Para hacer una apuesta tenés que poner \n **%burbet** y el nombre de algún **@Usuario**  \n')).then(eMsg =>
        {
            setTimeout(function(){
                        
                message.delete().catch(error => {console.log(error)});
        
                eMsg.delete().catch(error => {console.log(error)});
                
            }, 5000); //SE BORRA SOLO A LOS 30 SEGUNDOS

        });
    }else if(message.content.toLowerCase() === "%burbet" && message.channel.parentID != '846878746027491348')
    {
        return message.channel.send(acaNo).then(eMsg =>{
            setTimeout(function(){
                message.delete().catch(error => {console.log(error)});        
                eMsg.delete().catch(error => {console.log(error)});
            }, 5000); //SE BORRA SOLO A LOS 5 SEGUNDOS
        });
    } 
});

//BURBET --> burbet ✅✅ 01:35 minutos ⏳⏳ Solo se abre en la categoria 🔥 🔒 🤖 #7
client.on("message", message =>{
    if(message.author.bot) return;
    if(message.content.toLowerCase().startsWith("%burbet ") && message.channel.parentID === '846878746027491348') 
    { 
        let index1 = message.content.indexOf('!') + 1 ;
        let index2 = message.content.indexOf('>');
        const betUser = message.content.substring(index1,index2);

        try{
        apostadorQuiere = client.users.cache.find(user => user.id == betUser).id;
        client.users.fetch(apostadorQuiere).then(user => 
        {
            if(user.bot === true)
            {
                message.channel.send(acaNo .setDescription('No podes apostar con un **BOT...**')).then(eMsg => {
                    setTimeout(function(){  
                        message.delete().catch(error => {console.log(error)});                           
                        eMsg.delete().catch(error => {console.log(error)});
                    }, 5000);   
                });
            }
            else if(user.id === message.author.id)
            {
                message.channel.send(acaNo .setDescription('No podes apostar con vos mismo...')).then(eMsg => {
                    setTimeout(function(){  
                        message.delete().catch(error => {console.log(error)});                           
                        eMsg.delete().catch(error => {console.log(error)});
                    }, 5000);   
                });
            }
            else
            {
                apostadorQuiere = client.users.cache.find(user => user.id == betUser).id;  //USUARIO EXISTE - MENCION        
                apostadorQuiereMencion = '<@' + apostadorQuiere + '>'; //EL QUE QUIERE LA APUESTA
                apostadorOriginal = message.author;           //EL QUE ORGANIZO LA APUESTA

                //MENSAJE INICIAL eMsg
                message.channel.send(blancoBur .setDescription(`${apostadorOriginal} ha iniciado una **apuesta**...  \n\n Contra ${apostadorQuiereMencion} ❕❕❕ `) .setImage('https://static.wikia.nocookie.net/undertale/images/0/0b/Burgerpants_face_1.png/revision/latest/scale-to-width-down/110?cb=20160103175652')).then(eMsg => {             
                    
                                //TIMEOUT 95 segundos ⏳
                                /////////////////////////////
                                function timeOutaso(mensajeBorrado) 
                                {
                                    return new Promise((resolve, reject) => {
                                        setTimeout(() => 
                                        {
                                        if (mensajeBorrado)
                                            resolve()
                                        else
                                            reject(
                                                eMsg.edit(blancoBur .setDescription('No tengo todo el dia, me voy..⌛') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')),
                                                setTimeout(() => { eMsg.delete().catch(error => {console.log(error)}) }, 4000),
                                                setTimeout(() => { message.delete().catch(error => {console.log(error)}) }, 4000),
                                                collector.stop(''),
                                                stopBur.stop(''),
                                                adminBur.stop('')
                                            )
                                        })
                                    })
                                }

                                setTimeout(() => 
                                {
                                    timeOutaso(eMsg.deleted).then(result => {}).catch(err => {})
                                }, 95000);

                                //FILTROS PARA LA REACCIÓN DEL MENSAJE
                                const betFilter = (reaction, user) => reaction.emoji.name === "🎰" && user.id === apostadorOriginal.id; //APOSTAR                    
                                const stopFilter = (reaction, user) => reaction.emoji.name === "🍔" && (user.id === apostadorOriginal.id); //SALIR  
                                const okFilter = (reaction, user) => reaction.emoji.name === "✅" && (user.id === apostadorQuiere); //QUIERO 1  
                                const adminFilter = (reaction, user) => reaction.emoji.name === "🚩" && (user.id === apostadorQuiere || user.id === apostadorOriginal.id); //ADMIN 
                                const todoOk1Filter = (reaction, user) => reaction.emoji.name === "🍟" && user.id === apostadorOriginal.id; //TODOOK
                                const todoOk2Filter = (reaction, user) => reaction.emoji.name === "🍕" && user.id === apostadorQuiere; //TODOOK

                                //DEFINO OTRAS CONSTANTES CON EL PASO DE PARAMETROS
                                const stopBur = eMsg.createReactionCollector(stopFilter, {time:90000, dispose: true});  //SALIR                    
                                const betBur = eMsg.createReactionCollector(betFilter, {time:90000, dispose: true});  //APOSTAR    
                                const okBur = eMsg.createReactionCollector(okFilter, {time:90000, dispose: true});  //QUIERO 1
                                const adminBur = eMsg.createReactionCollector(adminFilter, {time:90000, dispose: true});  //ADMIN

                                const todook1Bur = eMsg.createReactionCollector(todoOk1Filter, {time:90000, dispose: true});  //TODOOK
                                const todook2Bur = eMsg.createReactionCollector(todoOk2Filter, {time:90000, dispose: true});  //TODOOK

                                let filterAutor = m => m.author.id === apostadorOriginal.id;   //FILTRO AUTOR
                                let filterApostado = m2 => m2.author.id == apostadorQuiere;   //FILTRO APOSTADO

                                eMsg.edit(blancoBur .setDescription(`${apostadorOriginal} ha iniciado una **apuesta**...  \n\n Contra ${apostadorQuiereMencion} ❕❕❕ \n\n ${apostadorOriginal} Que es lo que queres de ${apostadorQuiereMencion}?`));
                                
                                eMsg.react("🍔");

                                //AUTOR 🅰 APOSTADO 🅱
                                const collector = message.channel.createMessageCollector(filterAutor, { max: 1, time: 60000 })

                                //EMPIEZA TODO 🎯
                                collector.on('collect', mSgc =>{
                                    //UNA VEZ INGRESO LO QUE QUIERO DEL APOSTADO 🅱
                                    stopBur.stop(''); //PARO EL PRIMER STOPBUR🍔
                                    
                                    setTimeout(function(){ mSgc.delete().catch(error => {console.log(error)})}, 1000); //🚮 BORRO EL MSG
                                    let cosaApostar = (mSgc.content)             //💾 GUARDO LO QUE QUIERE

                                    //LE PREGUNTAMOS A APOSTADO 🅱 SI ESTA DISPUESTO A APOSTAR ESA WAIFU 💗
                                    eMsg.edit(blancoBur .setDescription(`${apostadorOriginal} Quiere **${cosaApostar}** de ${apostadorQuiereMencion} \n\n ${apostadorQuiereMencion} estas dispuesto a apostar **${cosaApostar}**? \n\n **Reacciona** con  ✅  para seguir \n\n **Reacciona** con  🍔  para salir`)).then(eMsg.react("✅"));
                                    
                                    //AGREGO AL APOSTADO 🅱 A LAS CONDICIONES PARA INTERACTUAR CON LA 🍔🍔
                                    const stopFilter = (reaction, user) => reaction.emoji.name === "🍔" && (user.id === apostadorOriginal.id || user.id === apostadorQuiere); //SALIR  
                                    const stopBur2 = eMsg.createReactionCollector(stopFilter, {time:90000, dispose: true});  //SALIR STOPBUR2 🍔🍔     

                                    ////EMPIEZA EL SEGUNDO COLLECTOR SI APOSTADO 🅱 REACCIONA CON ✅ 
                                    okBur.on("collect", r =>{
                                        r.users.remove(apostadorQuiere);  
                                        r.remove('✅');

                                        stopBur2.stop('');//PARO EL SEGUNDO STOPBUR🍔🍔

                                        eMsg.edit(blancoBur .setDescription(`Se ve que ${apostadorQuiereMencion} \n\n Esta de acuerdo con la apuesta ✅ \n\n Que queres de ${apostadorOriginal}???`)) 

                                        //COLLECT 2 🎯                        
                                        const collector2 = message.channel.createMessageCollector(filterApostado, { max: 1, time: 60000 });   

                                        const stopBur3 = eMsg.createReactionCollector(stopFilter, {time:90000, dispose: true});  //SALIR STOPBUR3 🍔🍔🍔    

                                        //ACA EL APOSTADO 🅱 PONE LO QUE QUIERE DEL AUTOR 🅰
                                        collector2.on('collect', eMsgCol =>{
                                                setTimeout(function(){eMsgCol.delete().catch(error => {console.log(error)})}, 1000); //🚮 BORRO EL MSG
                                                let cosaApostar2 = (eMsgCol.content)             //💾 GUARDO LO QUE QUIERE

                                                //LE PREGUNTAMOS SI ESTA DISPUESTO A APOSTAR ESA WAIFU
                                                eMsg.edit(blancoBur .setDescription(`${apostadorQuiereMencion} Quiere **${cosaApostar2}** de ${apostadorOriginal} \n\n ${apostadorOriginal}, estas dispuesto a apostar **${cosaApostar2}**? \n\n **Reacciona** con 🎰 para hacer la apuesta \n\n **Reacciona** con  🍔  para salir`)).then( eMsg.react('🍔'), eMsg.react("🎰"));
                                                
                                                stopBur3.stop('');
                                                const stopFilter = (reaction, user) => reaction.emoji.name === "🍔" && (user.id === apostadorOriginal.id); //SALIR  
                                                const stopBur4 = eMsg.createReactionCollector(stopFilter, {time:90000, dispose: true});  //SALIR STOPBUR4 🍔🍔🍔🍔   

                                                //SI AUTOR 🅰 QUIERE REACCIONA CON 🎰 SI NO QUIERE REACCIONA CON 🍔 PARA STOPBUR4 🍔🍔🍔🍔
                                                betBur.on("collect", r =>{
                                                        r.users.remove(apostadorOriginal);  
                                                        r.remove('🎰');  

                                                        //SACAR EL EMOJIs DE HAMBURGUESA 🍔 (+TODOS) UNA VEZ REACCIONADO CON 🎰
                                                        eMsg.reactions.removeAll();
                                                        

                                                        //ROLL ENTRE LOS DOS  
                                                        eMsg.edit(blancoBur  .setImage('https://static.wikia.nocookie.net/undertale/images/d/d5/Burgerpants_face_4.gif/revision/latest/scale-to-width-down/122?cb=20151103104906') .setDescription(`**🎲 ＤＥＡＴＨＲＯＬＬ 🎲** \n\n Entre ${apostadorOriginal} & ${apostadorQuiereMencion} \n\n ${apostadorOriginal} apostó **${cosaApostar2}** \n\n ${apostadorQuiereMencion} apostó **${cosaApostar}**`));
                                                        
                                                        let randomAutor = 0;
                                                        let randomApostado = 0;
                                                        let ganador = 0;
                                                        let rollganador = 0;                                                        

                                                        do{
                                                            randomAutor = Math.floor(Math.random() * 100);
                                                            randomApostado = Math.floor(Math.random() * 100);
                                                        }while(randomAutor == randomApostado);

                                                        if(randomAutor > randomApostado)
                                                        {
                                                            ganador = apostadorOriginal;
                                                            rollganador = randomAutor;
                                                        }else{
                                                            ganador = apostadorQuiereMencion;
                                                            rollganador = randomApostado;
                                                        }

                                                        setTimeout(function()
                                                        {
                                                            eMsg.edit(blancoBur .setDescription(`**🎲 ＤＥＡＴＨＲＯＬＬ　３🎲** \n\n Entre 🍟${apostadorOriginal} & 🍕${apostadorQuiereMencion} \n\n ${apostadorOriginal} apostó **${cosaApostar2}** \n\n ${apostadorQuiereMencion} apostó **${cosaApostar}**`)) 
                                                        
                                                        }, 2000)
                                                        
                                                        setTimeout(function()
                                                        {
                                                            eMsg.edit(blancoBur .setDescription(`**🎲 ＤＥＡＴＨＲＯＬＬ　２🎲** \n\n Entre 🍟${apostadorOriginal} & 🍕${apostadorQuiereMencion} \n\n ${apostadorOriginal} apostó **${cosaApostar2}** \n\n ${apostadorQuiereMencion} apostó **${cosaApostar}**`)) 
                                                        
                                                        }, 3000)

                                                        setTimeout(function()
                                                        {
                                                            eMsg.edit(blancoBur .setDescription(`**🎲 ＤＥＡＴＨＲＯＬＬ　１ 🎲** \n\n Entre 🍟${apostadorOriginal} & 🍕${apostadorQuiereMencion} \n\n ${apostadorOriginal} apostó **${cosaApostar2}** \n\n ${apostadorQuiereMencion} apostó **${cosaApostar}**`))
                                                        
                                                        }, 4000)

                                                        setTimeout(function()
                                                        {
                                                            eMsg.edit(blancoBur 
                                                                
                                                                .setThumbnail('https://imgur.com/brHGFkm.png')
                                                                .setDescription(`**🎲 ＤＥＡＴＨＲＯＬＬ 🎲** \n\n Entre 🍟${apostadorOriginal} & 🍕${apostadorQuiereMencion} \n\n ${apostadorOriginal} apostó **${cosaApostar2}** \n\n ${apostadorQuiereMencion} apostó **${cosaApostar}** \n\n\n ${apostadorOriginal}: **${randomAutor}** \n\n ${apostadorQuiereMencion}: **${randomApostado}** \n\n Ganó ${ganador} Roleando **${rollganador}** \n\n${apostadorOriginal} Debe reaccionar con 🍟 \n\n Y Luego ${apostadorQuiereMencion} Debe reaccionar con 🍕 \n\n Para terminar la **Apuesta**`));
                                                            
                                                            eMsg.react('🚩');
                                                            eMsg.react('🍟'); 
                                                            
                                                            //EDIT DEL EMBED DEATHROLLADMINBUR
                                                            message.channel.edit(deathrollAdminBur .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') .setDescription(`Requieren tu prescencia en ${message.channel} \n\n por un **🎲 ＤＥＡＴＨＲＯＬＬ 🎲** \n\n  ${apostadorOriginal} Rolleo: **${randomAutor}** \n Apostando: **${cosaApostar}** \n\n${apostadorQuiereMencion} Rolleo: **${randomApostado}** \n Apostando: **${cosaApostar2}**`));

                                                        }, 5000)

                                                        //ROLL ENTRE LOS DOS

                                                        //TODO ESTA OK 🍟
                                                        todook1Bur.on("collect", r => {

                                                            r.users.remove(apostadorOriginal); 
                                                            eMsg.react('🍕'); 
                                                            //TODO ESTA OK APOSTADO 🍕
                                                            todook2Bur.on("collect", r => {

                                                                r.users.remove(apostadorOriginal); 
                                                                r.users.remove(apostadorQuiere);  
                                                
                                                                setTimeout(function(){ 
                                                                    eMsg.edit(blancoBur .setDescription('🍟 La apuesta finalizó bien 🍕') .setThumbnail(''));    
                                                                }, 1000);

                                                                setTimeout(function(){ 
                                                                    message.delete().catch(error => {console.log(error)});
                                                                    eMsg.delete().catch(error => {console.log(error)});
                                                                }, 10000);

                                                            }); 

                                                        }); 
                                                        
                                                }); 
                                                
                                                //Se CANCELA LA APUESTA CON 4🍔🍔🍔🍔
                                                stopBur4.on('collect', r =>{
                                                    eMsg.reactions.removeAll();
                                                    r.users.remove(apostadorOriginal); 
                                                    r.users.remove(apostadorQuiere);                                                     
                                                    eMsg.edit(blancoBur .setDescription('Se canceló la apuesta 🍔🍔🍔🍔 ') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') ); 

                                                    setTimeout(function(){  
                                                        message.delete().catch(error => {console.log(error)});                           
                                                        eMsg.delete().catch(error => {console.log(error)});
                                                        collector.stop('');
                                                        collector2.stop('');
                                                    }, 2000); 
                                                });
                                        });

                                        //Se CANCELA LA APUESTA CON 3🍔🍔🍔
                                        stopBur3.on('collect', r =>{
                                            r.users.remove(apostadorOriginal); 
                                            r.users.remove(apostadorQuiere); 
                                            eMsg.reactions.removeAll();
                                            eMsg.edit(blancoBur .setDescription('Se canceló la apuesta 🍔🍔🍔 ') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') ); 

                                            setTimeout(function(){  
                                                message.delete().catch(error => {console.log(error)});                           
                                                eMsg.delete().catch(error => {console.log(error)});
                                                collector.stop('');
                                                collector2.stop('');
                                            
                                            }, 2000); 
                                        });

                                    });
                                    
                                    //SI APOSTADO 🅱 NO QUIER CANCELA LA APUESTA CON STOPBUR2 🍔🍔
                                    stopBur2.on('collect', r =>{
                                        r.users.remove(apostadorOriginal); 
                                        r.users.remove(apostadorQuiere); 
                                        eMsg.reactions.removeAll();
                                        eMsg.edit(blancoBur .setDescription('Se canceló la apuesta 🍔🍔 ') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') ); 

                                        collector.stop('');
                                        stopBur.stop('');
                                        okBur.stop('');
                                            
                                        setTimeout(function(){  
                                            message.delete().catch(error => {console.log(error)});                           
                                            eMsg.delete().catch(error => {console.log(error)});
                                        }, 2000); 
                                    });

                                });
                                
                                //Se CANCELA LA APUESTA CON 1 🍔                
                                stopBur.on('collect', r =>{
                                    r.users.remove(apostadorOriginal.id); 
                                    r.users.remove(apostadorQuiere); 
                                    eMsg.reactions.removeAll();
                                    eMsg.edit(blancoBur .setDescription('Se canceló la apuesta 🍔 ') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') ); 
                                    
                                    setTimeout(function(){                            
                                            eMsg.delete().catch(error => {console.log(error)});    
                                            message.delete().catch(error => {console.log(error)});
                                            collector.stop('');                                
                                        }, 2000);
                                }); 

                                //LLAMO A UN ADMIN 🚩
                                adminBur.on("collect", r => {

                                    r.users.remove(apostadorOriginal); 
                                    r.users.remove(apostadorQuiere);  
                    
                                    setTimeout(function(){ 
                                        eMsg.edit(adminCall);    
                                    }, 1000);

                                    
                                    //DM //848031701438300160 burguerboss
                                    setTimeout(function(){
                                        message.guild.roles.cache.get('848031701438300160').members.forEach(member => member.send(deathrollAdminBur));
                                    }, 3000);
                                    
                                    setTimeout(function(){ 
                                        eMsg.edit(blancoBur .setDescription('Ya lo llamé... \n') .setThumbnail('') .setImage('https://static.wikia.nocookie.net/undertale/images/d/d5/Burgerpants_face_4.gif/revision/latest/scale-to-width-down/122?cb=20151103104906'));
                                    }, 5000);

                                    setTimeout(function(){ 
                                        message.delete().catch(error => {console.log(error)});
                                        eMsg.delete().catch(error => {console.log(error)});
                                    }, 10000);

                                }); 
                                
                                

                                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////🚌🚌🚌🚌🚌🚌🚌🚌🚌🚌🚌🚌🚌🚌🚌🚌                   
                });
            } 
        });
        }catch{
            message.channel.send(acaNo .setDescription('Para hacer una apuesta tenés que poner \n **%burbet** y el nombre de algún **@Usuario** \n\n Que este no sea algo **inválido...**')).then(eMsg => {
                setTimeout(function(){  
                    message.delete().catch(error => {console.log(error)});                           
                    eMsg.delete().catch(error => {console.log(error)});
                }, 10000);   
            });
        }
    }else if(message.content.toLowerCase().startsWith("%burbet ") && message.channel.parentID != '846878746027491348')
    {
        return message.channel.send(acaNo).then(eMsg =>{

            setTimeout(function(){
                message.delete().catch(error => {console.log(error)});        
                eMsg.delete().catch(error => {console.log(error)});
            }, 5000); //SE BORRA SOLO A LOS 5 SEGUNDOS
            
        });
    } 
});

//BURGUER MYSTERY COINS --> burcoins ✅✅  10 segundos ⏳ Solo se abre en la categoria 🔥 🤖  #8
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() === '%burcoins' && message.channel.parentID === '846878746027491348') 
    {   
        const key = `${message.author.id}`; 
        try{
            if(client.usuarios.get(key, "monedas") === 0)
            {
                message.channel.send(blancoBur .setDescription(`No tenes ninguna <:monedasa:847216440053989387> \n\n **Monedas Claimeadas: <:monedasa:847216440053989387> ${totalMonedas()} / 100**`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') ).then(eMsg =>{
                    setTimeout(function(){  
                        message.delete().catch(error => {console.log(error)});                           
                        eMsg.delete().catch(error => {console.log(error)});
                    }, 10000);
                });
            }else
            {
                const key = `${message.author.id}`;  
                message.channel.send(blancoBur .setDescription(`**Ｍｙｓｔｅｙ Ｃｏｉｎｓ** <:sacaso:847275691275452458>  \n\n <:monedasa:847216440053989387><:monedasa:847216440053989387><:monedasa:847216440053989387> ** ${client.usuarios.get(key, "monedas")} / 100 ** <:monedasa:847216440053989387><:monedasa:847216440053989387><:monedasa:847216440053989387> \n\n **Monedas Claimeadas: <:monedasa:847216440053989387> ${totalMonedas()} / 100**`) .setImage("https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710")).then(eMsg =>{
                setTimeout(function(){  
                    message.delete().catch(error => {console.log(error)});                           
                    eMsg.delete().catch(error => {console.log(error)});
                }, 10000);
                });
            }
        }catch
        {
            message.channel.send(blancoBur .setDescription(`No apareceras en los registros \n Hasta que claimees una 💖**MysteryCoin**💖 \n\n **Monedas Claimeadas: <:monedasa:847216440053989387> ${totalMonedas()} / 100**`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')).then(eMsg =>{
                setTimeout(function()
                {  
                    message.delete().catch(error => {console.log(error)});                           
                    eMsg.delete().catch(error => {console.log(error)});
                }, 10000);
            });
        }
    }else if(message.content.toLowerCase() === ("%burcoins"))
    {
        return message.channel.send(acaNo).then(eMsg =>{

            setTimeout(function(){
                message.delete().catch(error => {console.log(error)});        
                eMsg.delete().catch(error => {console.log(error)});
            }, 5000); //SE BORRA SOLO A LOS 5 SEGUNDOS
            
        });
    } 
});

//💖 BURGUER MYSTERY COINS 💖 ✅✅  Solo puede interactuar mudae 🤖 en la categoria 🔥 en die-4-it 💀 #9
client.on("message", message => {
    if(message.channel.id === '858092864067207178') // viejo 846879258534215690 
    {
        if(message.author.id === '432610292342587392' && message.author.bot) 
        {
            if(message.content.includes('💖') && message.content.includes('Mystery Coin') &&  message.content.includes('**'))
            {
                let index1 = message.content.indexOf('💖') + 5;
                let index2 = message.content.indexOf(' y ') - 2;
                const UserDS = message.content.substring(index1,index2);

                let usernameUsuario = client.users.cache.find(user => user.username === UserDS).username;

                const idUsuario = client.users.cache.find(user => user.username === usernameUsuario).id;

                console.log('Se encontro al usuario ' + usernameUsuario + ' ID: ' + idUsuario + ' Reclamando una Mystery Coin');

                const key = `${idUsuario}`;

                try
                {
                    client.usuarios.inc(key, "monedas");
                }
                catch
                {
                    client.usuarios.ensure(key, 
                    {
                        user: idUsuario,
                        username: usernameUsuario,
                        guild: message.guild.name,
                        monedas: 1
                    }); 
                }

                message.channel.send(blancoBur .setDescription(`<@${idUsuario}> ha Claimeado una <:monedasa:847216440053989387> **Mystey Coin**!!!`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));

                message.guild.roles.cache.get('848031701438300160').members.forEach(member => member.send(blancoBur .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') .setDescription(`<@${idUsuario}> Claimeó una <:monedasa:847216440053989387> **Mystery Coin** \n\n UsuarioEnsure: **${client.usuarios.get(key, "username")}** MonedasEnsure: <:monedasa:847216440053989387> **${client.usuarios.get(key, "monedas")}**`)));
        

            }
        }
    }
});

//BURSET --> burset✅✅ 01:35 segundos ⏳⏳ Admin Only 🔮 🤖 #10
client.on("message", message => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() === '%burset' && message.member.roles.cache.has('848031701438300160'))
    {
        //RESET DE MONEDAS
        //SACAR X MONEDAS
        message.channel.send(blancoBur .setDescription('¿Que necesitas hacer? \n\n 🌮 **Ver Monedas** \n\n 🌭 **Resetear Monedas** \n\n 🥞 **Sumar Monedas** \n\n 🥡 **Restar Monedas** \n\n 🥓 **Crear Registro**\n\n 🍔 **Salir**') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') ).then(eMsg =>{
            
            eMsg.react('🌮');
            eMsg.react('🌭');
            eMsg.react('🥞');
            eMsg.react('🥡');
            eMsg.react('🥓');
            eMsg.react('🍔');
            
            //TIMEOUT 95 ⏳
            /////////////////////////////
            function timeOutaso(mensajeBorrado) 
            {
                return new Promise((resolve, reject) => {
                    setTimeout(() => 
                    {
                    if (mensajeBorrado)
                        resolve()
                    else
                        reject( 
                            eMsg.edit(blancoBur .setDescription('Tengo que irme.. ⌛') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')),
                            setTimeout(() => { eMsg.delete().catch(error => {console.log(error)}) }, 4000),
                            setTimeout(() => { message.delete().catch(error => {console.log(error)}) },4000)
                        )
                    })
                })
            }

            setTimeout(() => 
            {
                timeOutaso(eMsg.deleted).then(error => {}).catch(error => {})
            }, 95000);
            //TIMEOUT 95 ⏳

            //FILTROS
            const verFilter = (reaction, user) => reaction.emoji.name === "🌮" && user.id === message.author.id; 
            const resetFilter = (reaction, user) => reaction.emoji.name === "🌭" && user.id === message.author.id; 
            const restarFilter = (reaction, user) => reaction.emoji.name === "🥡" && user.id === message.author.id; 
            const sumarFilter = (reaction, user) => reaction.emoji.name === "🥞" && user.id === message.author.id; 
            const crearFilter = (reaction, user) => reaction.emoji.name === "🥓" && user.id === message.author.id; 
            const stopFilter = (reaction, user) => reaction.emoji.name === "🍔" && user.id === message.author.id; //SALIR  

            const crearCoins = eMsg.createReactionCollector(crearFilter, {time:900000, dispose: true});
            const verCoins = eMsg.createReactionCollector(verFilter, {time:900000, dispose: true});
            const resetCoins = eMsg.createReactionCollector(resetFilter, {time:900000, dispose: true});
            const restarCoins = eMsg.createReactionCollector(restarFilter, {time:900000, dispose: true}); 
            const sumarCoins = eMsg.createReactionCollector(sumarFilter, {time:900000, dispose: true}); 
            const stopBur = eMsg.createReactionCollector(stopFilter, {time:900000, dispose: true});  //SALIR           

            //🌮 ✅✅
            verCoins.on("collect", r => {

                const stopBurVer = eMsg.createReactionCollector(stopFilter, {time:900000, dispose: true});  //SALIR  
                stopBur.stop(''); //BURSTOP 1

                eMsg.reactions.removeAll();
                eMsg.react('🍔');

                let filterAutor = m => m.author.id === message.author.id;
                const collectorVer = message.channel.createMessageCollector(filterAutor, { max: 1, time: 60000 })

                eMsg.edit(blancoBur .setDescription('🌮 **Ver Monedas de @Usuario** 🌮 \n\n Ingrese el @Usuario a **Ver**'));
                
                //COLLECTOR USER
                collectorVer.on('collect', mSgc =>{

                    eMsg.reactions.removeAll();

                    let index1 = mSgc.content.indexOf('@') + 2 ;
                    let index2 = mSgc.content.indexOf('>');
                    const usuarioContent = mSgc.content.substring(index1,index2);

                    mSgc.delete().catch(error => {console.log(error)});

                    //Checkeo que el flaco no haya puesto un ROL
                    try{
                        client.users.cache.find(user => user.id === usuarioContent).id;
                    }catch{
                        eMsg.edit(blancoBur .setDescription(`**Flaco...** Ingresaste un usuario **NO válido**`));

                        setTimeout(function(){ 
                            message.delete().catch(error => {console.log(error)});
                            eMsg.delete().catch(error => {console.log(error)});
                        }, 5000);
                        return;
                    }
                    
                    const idUsuario = client.users.cache.find(user => user.id === usuarioContent).id;
                    let usuarioNombrar = '<@' + idUsuario + '>';
                    const key = `${idUsuario}`;

                    //Checkeo que el flaco no haya puesto un BOT
                    if(client.users.cache.find(user => user.id === usuarioContent).bot)
                    {
                        eMsg.edit(blancoBur .setDescription(`Ingresaste un **BOT...** \n\n **Flaco**, pone un usuario válido.`));

                        setTimeout(function(){ 
                            message.delete().catch(error => {console.log(error)});
                            eMsg.delete().catch(error => {console.log(error)});
                        }, 5000);
                        return;
                    }
                    else
                    {
                        try //Checkeo que el flaco este en los registros
                        {
                            eMsg.edit(blancoBur .setDescription(`**${usuarioNombrar}** \n\n **Ｍｙｓｔｅｙ Ｃｏｉｎｓ** <:sacaso:847275691275452458>  \n\n <:monedasa:847216440053989387><:monedasa:847216440053989387><:monedasa:847216440053989387> ** ${client.usuarios.get(key, "monedas")} / 100 ** <:monedasa:847216440053989387><:monedasa:847216440053989387><:monedasa:847216440053989387>`));
                        }catch{
                            eMsg.edit(blancoBur .setDescription(`No se encontró a **${usuarioNombrar}** en los registros`));
                        }

                        setTimeout(function(){ 
                            message.delete().catch(error => {console.log(error)});
                            eMsg.delete().catch(error => {console.log(error)});
                        }, 5000);
                    }
                });  

                //🍔
                stopBurVer.on('collect', r =>{
                    eMsg.reactions.removeAll();

                    eMsg.edit(blancoBur .setDescription('Se canceló 🍔 ')); 
                    
                    setTimeout(function(){  
                        message.delete().catch(error => {console.log(error)});                           
                        eMsg.delete().catch(error => {console.log(error)});                                  
                    }, 2000); 

                    verCoins.stop('');
                    collectorVer.stop('');
                }); 
            });

            //🌭 ✅✅
            resetCoins.on("collect", r => {
                
                const stopBurReset = eMsg.createReactionCollector(stopFilter, {time:900000, dispose: true});  //SALIR  
                stopBur.stop(''); //BURSTOP 1

                eMsg.reactions.removeAll();
                eMsg.react('🍔');

                let filterAutor = m => m.author.id === message.author.id;
                const collectorReset = message.channel.createMessageCollector(filterAutor, { max: 1, time: 60000 })

                eMsg.edit(blancoBur .setDescription('🌭 **Resetear monedas** 🌭\n\n Ingrese el @Usuario a **Resetear**'));

                //COLLECTOR USER
                collectorReset.on('collect', mSgc =>{

                    eMsg.reactions.removeAll();

                    let index1 = mSgc.content.indexOf('@') + 2 ;
                    let index2 = mSgc.content.indexOf('>');
                    const usuarioContent = mSgc.content.substring(index1,index2);
                    
                    mSgc.delete().catch(error => {console.log(error)});

                    //Checkeo que el flaco no haya puesto un ROL
                    try{
                        client.users.cache.find(user => user.id === usuarioContent).id;
                    }catch{
                        eMsg.edit(blancoBur .setDescription(`**Flaco...** Ingresaste un usuario **NO válido**`));

                        setTimeout(function(){ 
                            message.delete().catch(error => {console.log(error)});
                            eMsg.delete().catch(error => {console.log(error)});
                        }, 5000);
                        return;
                    }

                    const idUsuario = client.users.cache.find(user => user.id === usuarioContent).id;
                    let usuarioNombrar = '<@' + idUsuario + '>';
                    const key = `${idUsuario}`;

                    //Checkeo que el flaco no haya puesto un BOT
                    if(client.users.cache.find(user => user.id === usuarioContent).bot)
                    {
                        eMsg.edit(blancoBur .setDescription(`Ingresaste un **BOT...** \n\n **Flaco**, pone un usuario válido.`));

                        setTimeout(function(){ 
                            message.delete().catch(error => {console.log(error)});
                            eMsg.delete().catch(error => {console.log(error)});
                        }, 5000);
                        return;
                    }
                    else
                    {
                            
                        try{

                            //Checkeo que el flaco este en los registros
                            try{
                                client.usuarios.get(key, "monedas")
                            }catch{
                                eMsg.edit(blancoBur .setDescription(`No se encontró a **${usuarioNombrar}** en los registros`));
                                setTimeout(function(){ 
                                    message.delete().catch(error => {console.log(error)});
                                    eMsg.delete().catch(error => {console.log(error)});
                                }, 5000);
                                return;
                            }
                            
                            client.usuarios.set(key, 0 ,"monedas");
                            eMsg.edit(blancoBur .setDescription(`\n\n**${usuarioNombrar}** \n\n **Ｍｙｓｔｅｙ Ｃｏｉｎｓ** <:sacaso:847275691275452458>  \n\n <:monedasa:847216440053989387><:monedasa:847216440053989387><:monedasa:847216440053989387> ** ${client.usuarios.get(key, "monedas")} / 100 ** <:monedasa:847216440053989387><:monedasa:847216440053989387><:monedasa:847216440053989387>`));
                        
                        }catch{
                            eMsg.edit(blancoBur .setDescription(`No se encontró a **${usuarioNombrar}** en los registros`));
                        }

                        setTimeout(function(){ 
                            message.delete().catch(error => {console.log(error)});
                            eMsg.delete().catch(error => {console.log(error)});
                            return;
                        }, 5000);
                    }
                });  

                //🍔
                stopBurReset.on('collect', r =>{
                    eMsg.reactions.removeAll();

                    eMsg.edit(blancoBur .setDescription('Se canceló 🍔 ')); 
                    
                    setTimeout(function(){  
                        message.delete().catch(error => {console.log(error)});                           
                        eMsg.delete().catch(error => {console.log(error)});    
                        return;                              
                    }, 2000); 

                    resetCoins.stop('');
                    collectorReset.stop('');
                }); 
            });

            //🥞 ✅✅
            sumarCoins.on("collect", r => {
                          
                const stopBurSumar = eMsg.createReactionCollector(stopFilter, {time:900000, dispose: true});  //SALIR  
                stopBur.stop(''); //BURSTOP 1

                eMsg.reactions.removeAll();
                eMsg.react('🍔');
               
                let filterAutor = m => m.author.id === message.author.id;
                const collectorSumar = message.channel.createMessageCollector(filterAutor, { max: 1, time: 70000 })

                eMsg.edit(blancoBur .setDescription('🥞 **Sumar Monedas** \n\n Ingrese el Usuario a **Sumar Monedas**'));

                //COLLECTOR USER
                collectorSumar.on('collect', mSgc =>{

                    const stopBurSumarPlus = eMsg.createReactionCollector(stopFilter, {time:900000, dispose: true});  //SALIR    
                    stopBurSumar.stop('');

                    let index1 = mSgc.content.indexOf('@') + 2 ;
                    let index2 = mSgc.content.indexOf('>');
                    const usuarioContent = mSgc.content.substring(index1,index2);
                    
                    mSgc.delete().catch(error => {console.log(error)});

                    //Checkeo que el flaco no haya puesto un ROL
                    try{
                        client.users.cache.find(user => user.id === usuarioContent).id;
                    }catch{
                        eMsg.edit(blancoBur .setDescription(`**Flaco...** Ingresaste un usuario **NO válido**`));

                        setTimeout(function(){ 
                            message.delete().catch(error => {console.log(error)});
                            eMsg.delete().catch(error => {console.log(error)});
                        }, 5000);
                        return;
                    }

                    const idUsuario = client.users.cache.find(user => user.id === usuarioContent).id;
                    let usuarioNombrar = '<@' + idUsuario + '>';
                    const key = `${idUsuario}`;

                    //Checkeo que el flaco no haya puesto un BOT
                    if(client.users.cache.find(user => user.id === usuarioContent).bot)
                    {
                        eMsg.edit(blancoBur .setDescription(`Ingresaste un **BOT...** \n\n **Flaco**, pone un usuario válido.`));

                        setTimeout(function(){ 
                            message.delete().catch(error => {console.log(error)});
                            eMsg.delete().catch(error => {console.log(error)});
                        }, 5000);
                        return;
                    }
                    else
                    {
                        const collectorSumarPlus = message.channel.createMessageCollector(filterAutor, { max: 1, time: 60000 })

                        //Checkeo que el flaco este en los registros
                        try{
                            client.usuarios.get(key, "monedas")
                        }catch{
                            eMsg.edit(blancoBur .setDescription(`No se encontró a **${usuarioNombrar}** en los registros`));
                            setTimeout(function(){ 
                                message.delete().catch(error => {console.log(error)});
                                eMsg.delete().catch(error => {console.log(error)});
                            }, 5000);
                            return;
                        }

                        eMsg.edit(blancoBur .setDescription(`🥞 **Sumar Monedas** 🥞 \n\n Ingrese monedas a sumar para ${usuarioNombrar}`));   

                        //COLLECTOR A SUMAR 
                        collectorSumarPlus.on('collect', mSgc2 =>{

                            const stopBurSumarPlusPlus = eMsg.createReactionCollector(stopFilter, {time:900000, dispose: true});  //SALIR                              
                            stopBurSumarPlus.stop('');

                            eMsg.reactions.removeAll();
                            
                            var aSumar = parseInt(mSgc2.content, 10);
                            
                            mSgc2.delete().catch(error => {console.log(error)});

                            if(isNaN(aSumar))
                            {
                                eMsg.edit(blancoBur .setDescription(`**Flaco** ingresa un número válido`));
                                setTimeout(function(){ 
                                    message.delete().catch(error => {console.log(error)});
                                    eMsg.delete().catch(error => {console.log(error)});
                                    return;
                                }, 5000);
                            }
                            else
                            {
                                try{
                                    client.usuarios.math(key, "add", aSumar, "monedas");
                                    eMsg.edit(blancoBur .setDescription(`\n\n**${usuarioNombrar}** \n\n **Ｍｙｓｔｅｙ Ｃｏｉｎｓ** <:sacaso:847275691275452458>  \n\n <:monedasa:847216440053989387><:monedasa:847216440053989387><:monedasa:847216440053989387> ** ${client.usuarios.get(key, "monedas")} / 100 ** <:monedasa:847216440053989387><:monedasa:847216440053989387><:monedasa:847216440053989387>`));
                                }catch{
                                    eMsg.edit(blancoBur .setDescription(`No se encontró a **${usuarioNombrar}** en los registros`));
                                }

                                setTimeout(function(){ 
                                    message.delete().catch(error => {console.log(error)});
                                    eMsg.delete().catch(error => {console.log(error)});
                                }, 5000);
                            }

                            //🍔3
                            stopBurSumarPlusPlus.on('collect', r =>{
                                eMsg.reactions.removeAll();

                                eMsg.edit(blancoBur .setDescription('Se canceló 🍔 ')); 
                                
                                setTimeout(function(){  
                                    message.delete().catch(error => {console.log(error)});                           
                                    eMsg.delete().catch(error => {console.log(error)});                                  
                                }, 2000); 

                                sumarCoins.stop('');
                                collectorSumarPlus.stop('');
                            });

                        });

                        //🍔2
                        stopBurSumarPlus.on('collect', r =>{
                            eMsg.reactions.removeAll();

                            eMsg.edit(blancoBur .setDescription('Se canceló 🍔 ')); 
                            
                            setTimeout(function(){  
                                message.delete().catch(error => {console.log(error)});                           
                                eMsg.delete().catch(error => {console.log(error)});                                  
                            }, 2000); 

                            sumarCoins.stop('');
                            collectorSumar.stop('');
                            collectorSumarPlus.stop('');
                        }); 
                    }
                }); 

                //🍔1
                stopBurSumar.on('collect', r =>{
                    eMsg.reactions.removeAll();

                    eMsg.edit(blancoBur .setDescription('Se canceló 🍔 ')); 
                    
                    setTimeout(function(){  
                        message.delete().catch(error => {console.log(error)});                           
                        eMsg.delete().catch(error => {console.log(error)});                                  
                    }, 2000); 

                    sumarCoins.stop('');
                    collectorSumar.stop('');
                }); 
            });

            //🥡 ✅✅
            restarCoins.on("collect", r => {
                          
                const stopBurRestar = eMsg.createReactionCollector(stopFilter, {time:900000, dispose: true});  //SALIR  
                stopBur.stop(''); //BURSTOP 1

                eMsg.reactions.removeAll();
                eMsg.react('🍔');
               
                let filterAutor = m => m.author.id === message.author.id;
                const collectorRestar = message.channel.createMessageCollector(filterAutor, { max: 1, time: 60000 })

                eMsg.edit(blancoBur .setDescription('🥡 **Restar 10 Monedas**  🥡 \n\n Ingrese el Usuario a **Restar Monedas**'));

                //Collect Usuario
                collectorRestar.on('collect', mSgc =>{

                    const stopBurRestarPlus = eMsg.createReactionCollector(stopFilter, {time:900000, dispose: true});  //SALIR    
                    stopBurRestar.stop('');

                    let index1 = mSgc.content.indexOf('@') + 2 ;
                    let index2 = mSgc.content.indexOf('>');
                    const usuarioContent = mSgc.content.substring(index1,index2);
                    
                    mSgc.delete().catch(error => {console.log(error)});

                    //Checkeo que el flaco no haya puesto un ROL
                    try{
                        client.users.cache.find(user => user.id === usuarioContent).id;
                    }catch{
                        eMsg.edit(blancoBur .setDescription(`**Flaco...** Ingresaste un usuario **NO válido**`));

                        setTimeout(function(){ 
                            message.delete().catch(error => {console.log(error)});
                            eMsg.delete().catch(error => {console.log(error)});
                        }, 5000);
                        return;
                    }

                    const idUsuario = client.users.cache.find(user => user.id === usuarioContent).id;
                    let usuarioNombrar = '<@' + idUsuario + '>';
                    const key = `${idUsuario}`;
                    
                    //Checkeo que el flaco no haya puesto un BOT
                    if(client.users.cache.find(user => user.id === usuarioContent).bot)
                    {
                        eMsg.edit(blancoBur .setDescription(`Ingresaste un **BOT...** \n\n **Flaco**, pone un usuario válido.`));

                        setTimeout(function(){ 
                            message.delete().catch(error => {console.log(error)});
                            eMsg.delete().catch(error => {console.log(error)});
                        }, 5000);
                        return;
                    }
                    else
                    {
                        const collectorRestarPlus = message.channel.createMessageCollector(filterAutor, { max: 1, time: 60000 })

                        //Checkeo que el flaco este en los registros
                        try{
                            client.usuarios.get(key, "monedas")
                        }catch{
                            eMsg.edit(blancoBur .setDescription(`No se encontró a **${usuarioNombrar}** en los registros`));
                            setTimeout(function(){ 
                                message.delete().catch(error => {console.log(error)});
                                eMsg.delete().catch(error => {console.log(error)});
                            }, 5000);
                            return;
                        }

                        eMsg.edit(blancoBur .setDescription(`🥡 **Restar Monedas** 🥡 \n\n Ingrese monedas a restar para ${usuarioNombrar}`));   

                        //COLLECTOR A RESTAR
                        collectorRestarPlus.on('collect', mSgc2 =>{
                            
                            eMsg.reactions.removeAll();
                            const stopBurRestarPlusPlus = eMsg.createReactionCollector(stopFilter, {time:900000, dispose: true});  //SALIR  
                            stopBurRestarPlus.stop(''); //BURSTOP 1

                            var aRestar = parseInt(mSgc2.content, 10);

                            mSgc2.delete().catch(error => {console.log(error)});

                            if(isNaN(aRestar))
                            {
                                eMsg.edit(blancoBur .setDescription(`**Flaco** ingresa un número válido`));
                                setTimeout(function(){ 
                                    message.delete().catch(error => {console.log(error)});
                                    eMsg.delete().catch(error => {console.log(error)});
                                    return;
                                }, 5000);
                            }
                            else
                            {
                                try{
                                    client.usuarios.math(key, "-", aRestar, "monedas");
                                    eMsg.edit(blancoBur .setDescription(`\n\n**${usuarioNombrar}** \n\n **Ｍｙｓｔｅｙ Ｃｏｉｎｓ** <:sacaso:847275691275452458>  \n\n <:monedasa:847216440053989387><:monedasa:847216440053989387><:monedasa:847216440053989387> ** ${client.usuarios.get(key, "monedas")} / 100 ** <:monedasa:847216440053989387><:monedasa:847216440053989387><:monedasa:847216440053989387>`));
                                }catch{
                                    eMsg.edit(blancoBur .setDescription(`No se encontró a **${usuarioNombrar}** en los registros`));
                                }

                                setTimeout(function(){ 
                                    message.delete().catch(error => {console.log(error)});
                                    eMsg.delete().catch(error => {console.log(error)});
                                }, 5000);
                            }

                             //🍔3
                             stopBurRestarPlusPlus.on('collect', r =>{
                                eMsg.reactions.removeAll();

                                eMsg.edit(blancoBur .setDescription('Se canceló 🍔 ')); 
                                
                                setTimeout(function(){  
                                    message.delete().catch(error => {console.log(error)});                           
                                    eMsg.delete().catch(error => {console.log(error)});                                  
                                }, 2000); 

                                restarCoins.stop('');
                                collectorRestarPlus.stop('');
                            });

                        });

                        //🍔2
                        stopBurRestarPlus.on('collect', r =>{
                            eMsg.reactions.removeAll();

                            eMsg.edit(blancoBur .setDescription('Se canceló 🍔 ')); 
                            
                            setTimeout(function(){  
                                message.delete().catch(error => {console.log(error)});                           
                                eMsg.delete().catch(error => {console.log(error)});                                  
                            }, 2000); 

                            restarCoins.stop('');
                            collectorRestar.stop('');
                            collectorRestarPlus.stop('');
                        });

                    }
                    
                }); 

                //🍔1
                stopBurRestar.on('collect', r =>{
                    eMsg.reactions.removeAll();

                    eMsg.edit(blancoBur .setDescription('Se canceló 🍔 ')); 
                    
                    setTimeout(function(){  
                        message.delete().catch(error => {console.log(error)});                           
                        eMsg.delete().catch(error => {console.log(error)});                                  
                    }, 2000); 

                    restarCoins.stop('');
                    collectorRestar.stop('');
                }); 
            });

            //🥓 ✅✅
            crearCoins.on("collect", r => {

                const crearBurReset = eMsg.createReactionCollector(stopFilter, {time:900000, dispose: true});  //SALIR  
                stopBur.stop(''); //BURSTOP 1

                eMsg.reactions.removeAll();
                eMsg.react('🍔');

                let filterAutor = m => m.author.id === message.author.id;
                const collectorCrear = message.channel.createMessageCollector(filterAutor, { max: 1, time: 60000 })

                eMsg.edit(blancoBur .setDescription('🥓 **Crear Registro** 🥓\n\n Ingrese el @Usuario a **Crear**'));

                //COLLECTOR USER
                collectorCrear.on('collect', mSgc =>{

                    eMsg.reactions.removeAll();

                    let index1 = mSgc.content.indexOf('@') + 2 ;
                    let index2 = mSgc.content.indexOf('>');
                    const usuarioContent = mSgc.content.substring(index1,index2);
                    
                    mSgc.delete().catch(error => {console.log(error)});

                    //Checkeo que el flaco no haya puesto un ROL
                    try{
                        client.users.cache.find(user => user.id === usuarioContent).id;
                    }catch{
                        eMsg.edit(blancoBur .setDescription(`**Flaco...** Ingresaste un usuario **NO válido**`));

                        setTimeout(function(){ 
                            message.delete().catch(error => {console.log(error)});
                            eMsg.delete().catch(error => {console.log(error)});
                        }, 5000);
                        return;
                    }

                    const idUsuario = client.users.cache.find(user => user.id === usuarioContent).id;

                    const usernameUsuario = client.users.cache.find(user => user.id === idUsuario).username;

                    let usuarioNombrar = '<@' + idUsuario + '>';
                    const key = `${idUsuario}`;

                    //Checkeo que el flaco no haya puesto un BOT
                    if(client.users.cache.find(user => user.id === usuarioContent).bot)
                    {
                        eMsg.edit(blancoBur .setDescription(`Ingresaste un **BOT...** \n\n **Flaco**, pone un usuario válido.`));

                        setTimeout(function(){ 
                            message.delete().catch(error => {console.log(error)});
                            eMsg.delete().catch(error => {console.log(error)});
                        }, 5000);
                        return;
                    }
                    else
                    {
                        try{
                            const key = `${idUsuario}`;
                            client.usuarios.ensure(key, 
                            {
                                user: idUsuario,
                                username: usernameUsuario,
                                guild: message.guild.name,
                                monedas: 0
                            }); 

                            eMsg.edit(blancoBur .setDescription(`\n\n**Registro de ${usuarioNombrar} creado exitosamente**`) .setImage('https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710'));

                            setTimeout(function(){ 
                                message.delete().catch(error => {console.log(error)});
                                eMsg.delete().catch(error => {console.log(error)});
                                return;
                            }, 5000);
                        }catch{}
                    }
                
            });
            //🍔1
            stopBur.on('collect', r =>{
                eMsg.reactions.removeAll();

                eMsg.edit(blancoBur .setDescription('Se canceló 🍔 ')); 
                
                setTimeout(function(){  
                    message.delete().catch(error => {console.log(error)});                           
                    eMsg.delete().catch(error => {console.log(error)});                                  
                }, 2000); 
            }); 
        
            });

            //🍔 ✅✅
            stopBur.on('collect', r =>{
                eMsg.reactions.removeAll();

                eMsg.edit(blancoBur .setDescription('Se canceló 🍔')); 
                
                setTimeout(function(){  
                    message.delete().catch(error => {console.log(error)});                           
                    eMsg.delete().catch(error => {console.log(error)});                                  
                }, 2000); 
            }); 
    });

    }else 
    if(message.content.toLowerCase() === '%burset')
    {
        message.channel.send(blancoBur .setDescription('Solo los <@&848031701438300160> \n pueden acceder a este comando') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') ).then(eMsg =>{
            
            setTimeout(function(){  
                message.delete().catch(error => {console.log(error)});                           
                eMsg.delete().catch(error => {console.log(error)});
            }, 3000); 
        });
    }
});

//FUNCION ✅✅ SI EXISTE -> MONEDAS SINO -> -99
function tieneMonedas(message)
{  
    const key = `${message.author.id}`; 
    try{
        return (client.usuarios.get(key, "monedas"));
    }catch
    {
        return -99;
    }
}

//FUNCION ✅✅ MONEDAS TOTALES
function totalMonedas()
{
    const Guild = client.guilds.cache.get("778552958236229693"); // Getting the guild.
    const Members = Guild.members.cache.map(member => member.id); // Getting the members and mapping them by ID.
     

    var sumatoria = parseInt(0, 10);

        Members.forEach(element => 
        {
            const key = `${element}`; 
            
            try{
                sumatoria = sumatoria + client.usuarios.get(key, "monedas");
            }catch
            {}
        });
    
    return sumatoria;
}

//TIENDA --> burshop ✅✅ 70 segundos⏳ Solo se abre en la categoria 🔥 🔒 🤖 #5
client.on("message", (message) => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() === '%burshop' && message.channel.parentID === '846878746027491348') 
    {        
        tienda();
        function tienda()
        {
            message.channel.send(mysteryShop).then(eMsg => 
            {

                const compras = client.channels.cache.find(channel => channel.id === '857736798436327434')

                //#region REACTS 
                eMsg.react("🍔");
                eMsg.react('💸');
                eMsg.react('💵');
                eMsg.react('🤏');
                eMsg.react('🖤');
                eMsg.react('<:snap:857729463156342824>');
                eMsg.react('🎀');
                eMsg.react('💀');
                eMsg.react('👌');
                eMsg.react('<:thanos:857729982486937620>');
                eMsg.react('<:monkaS:832289245077962792>');
                eMsg.react('💞');
                //#endregion

                //#region FILTROS
                
                const volverFilter = (reaction, user) => reaction.emoji.id === "847275691275452458" && user.id === message.author.id; //VOLVER
                const volverBurguer = eMsg.createReactionCollector(volverFilter, {time:65000, dispose: true}); //VOLVER

                const stopFilter = (reaction, user) => reaction.emoji.name === "🍔" && user.id === message.author.id; //SALIR
                const stopBurguer = eMsg.createReactionCollector(stopFilter, {time:65000, dispose: true}); //SALIR

                const kakeraFilter = (reaction, user) => reaction.emoji.name === "💸" && user.id === message.author.id; //500 KAKERA
                const kakeraBurguer = eMsg.createReactionCollector(kakeraFilter, {time:65000, dispose: true}); //500 KAKERA

                const kakerasFilter = (reaction, user) => reaction.emoji.name === "💵" && user.id === message.author.id; //1500 KAKERA
                const kakerasBurguer = eMsg.createReactionCollector(kakerasFilter, {time:65000, dispose: true}); //1500 KAKERA

                const divorceFilter = (reaction, user) => reaction.emoji.name === "🤏" && user.id === message.author.id; //DIVORCIAR UNA WAIFU
                const divorceBurguer = eMsg.createReactionCollector(divorceFilter, {time:65000, dispose: true}); //DIVORCIAR UNA WAIFU

                const waifuFilter = (reaction, user) => reaction.emoji.name === "🖤" && user.id === message.author.id; //WAIFU CATCHER
                const waifuBurguer = eMsg.createReactionCollector(waifuFilter, {time:65000, dispose: true}); //WAIFU CATCHER

                const thanosFilter = (reaction, user) => reaction.emoji.id === "857729463156342824" && user.id === message.author.id; //THANOS A ALGUIEN
                const thanosBurguer = eMsg.createReactionCollector(thanosFilter, {time:65000, dispose: true}); //THANOS

                const haremFilter = (reaction, user) => reaction.emoji.name === "🎀" && user.id === message.author.id; //HAREM MASTER
                const haremBurguer = eMsg.createReactionCollector(haremFilter, {time:65000, dispose: true}); //HAREM MASTER

                const divorceallFilter = (reaction, user) => reaction.emoji.name === "💀" && user.id === message.author.id; //DIVORCE ALL A ALGUIEN
                const divorceallBurguer = eMsg.createReactionCollector(divorceallFilter, {time:65000, dispose: true}); //DIVORCE ALL A ALGUIEN

                const thanosallFilter = (reaction, user) => reaction.emoji.id === "857729982486937620" && user.id === message.author.id; //THANOS ALL
                const thanosallBurguer = eMsg.createReactionCollector(thanosallFilter, {time:65000, dispose: true}); //THANOS ALL

                const bitesFilter = (reaction, user) => reaction.emoji.id === "832289245077962792" && user.id === message.author.id; //BITES THE DUST
                const bitesBurguer = eMsg.createReactionCollector(bitesFilter, {time:65000, dispose: true}); //BITES THE DUST

                const coinFilter = (reaction, user) => reaction.emoji.name === "👌" && user.id === message.author.id; //COIN COLLECTOR
                const coinBurguer = eMsg.createReactionCollector(coinFilter, {time:65000, dispose: true}); //COIN COLLECTOR

                const restoreFilter = (reaction, user) => reaction.emoji.name === "💞" && user.id === message.author.id; //RESTORE WAIFU POSTING
                const restoreBurguer = eMsg.createReactionCollector(restoreFilter, {time:65000, dispose: true}); //RESTORE WAIFU POSTING
                //#endregion

                //TIMEOUT 70 ⏳
                /////////////////////////////
                function timeOutaso(mensajeBorrado) 
                {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => 
                        {
                        if (mensajeBorrado)
                            resolve()
                        else
                            reject( 
                                eMsg.edit(blancoBur .setDescription('Tengo que seguir atendiendo, nos vemos.. ⌛') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')),
                                eMsg.reactions.removeAll(),
                                setTimeout(() => { eMsg.delete().catch(error => {console.log(error)}) }, 4000),
                                setTimeout(() => { message.delete().catch(error => {console.log(error)}) },4000)
                            )
                        })
                    })
                }
                setTimeout(() => 
                {
                    timeOutaso(eMsg.deleted).then(result => {}).catch(err => {})
                }, 70000);
                //TIMEOUT 70 ⏳

                
                //1000 KAKERA 💸 1
                kakeraBurguer.on("collect", r =>{

                    eMsg.reactions.removeAll();

                    stopBurguer.stop('');
                    kakerasBurguer.stop('');
                    divorceBurguer.stop('');
                    waifuBurguer.stop('');
                    thanosBurguer.stop('');
                    haremBurguer.stop('');
                    divorceallBurguer.stop('');
                    thanosallBurguer.stop('');
                    bitesBurguer.stop('');
                    coinBurguer.stop('');
                    restoreBurguer.stop('');

                    eMsg.react("<:sacaso:847275691275452458>");
                    
                    var monedasUsuario = parseInt(tieneMonedas(message), 10);

                    if(monedasUsuario >= 1)
                    {
                        client.usuarios.math(message.author.id, "-", 1, "monedas");
                        compras.send(`<@${message.author.id}> Compró **1000** de Kakera 💸`)
                        eMsg.edit(blancoBur .setDescription(`Compraste **1000** de Kakera 💸... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710'));
                    }else if(monedasUsuario === -99)
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo Apareces en los **Registros** \n\n Claimea 💖 una <:monedasa:847216440053989387> **Mystery Coin** <:monedasa:847216440053989387> \n\n Para aparecer en los **Registros** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }else
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo tenes suficientes <:monedasa:847216440053989387> para comprar eso... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }

                });

                //4000 KAKERA 💵 3
                kakerasBurguer.on("collect", r =>{

                    eMsg.reactions.removeAll();

                    stopBurguer.stop('');
                    kakeraBurguer.stop('');
                    divorceBurguer.stop('');
                    waifuBurguer.stop('');
                    thanosBurguer.stop('');
                    haremBurguer.stop('');
                    divorceallBurguer.stop('');
                    thanosallBurguer.stop('');
                    bitesBurguer.stop('');
                    coinBurguer.stop('');
                    restoreBurguer.stop('');

                    eMsg.react("<:sacaso:847275691275452458>");

                    var monedasUsuario = parseInt(tieneMonedas(message), 10);

                    if(monedasUsuario >= 1)
                    {
                        client.usuarios.math(message.author.id, "-", 3, "monedas");
                        compras.send(`<@${message.author.id}> Compró **4000** de Kakera 💵`)
                        eMsg.edit(blancoBur .setDescription(`Compraste **4000** de Kakera 💵... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710'));
                    }else if(monedasUsuario === -99)
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo Apareces en los **Registros** \n\n Claimea 💖 una <:monedasa:847216440053989387> **Mystery Coin** <:monedasa:847216440053989387> \n\n Para aparecer en los **Registros** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }else
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo tenes suficientes <:monedasa:847216440053989387> para comprar eso... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }

                });

                //DIVORCIAR UNA WAIFU 🤏 5
                divorceBurguer.on("collect", r =>{

                    eMsg.reactions.removeAll();

                    stopBurguer.stop('');
                    kakeraBurguer.stop('');
                    kakerasBurguer.stop('');
                    waifuBurguer.stop('');
                    thanosBurguer.stop('');
                    haremBurguer.stop('');
                    divorceallBurguer.stop('');
                    thanosallBurguer.stop('');
                    bitesBurguer.stop('');
                    coinBurguer.stop('');
                    restoreBurguer.stop('');

                    eMsg.react("<:sacaso:847275691275452458>");

                    var monedasUsuario = parseInt(tieneMonedas(message), 10);

                    if(monedasUsuario >= 1)
                    {
                        client.usuarios.math(message.author.id, "-", 5, "monedas");
                        compras.send(`<@${message.author.id}> Quiere divorciar una Waifu 🤏`)
                        eMsg.edit(blancoBur .setDescription(`Compraste un Divorce  🤏... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710'));
                    }else if(monedasUsuario === -99)
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo Apareces en los **Registros** \n\n Claimea 💖 una <:monedasa:847216440053989387> **Mystery Coin** <:monedasa:847216440053989387> \n\n Para aparecer en los **Registros** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }else
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo tenes suficientes <:monedasa:847216440053989387> para comprar eso... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }

                });

                //WAIFU CATCHER 🖤 10
                waifuBurguer.on("collect", r =>{

                    eMsg.reactions.removeAll();

                    stopBurguer.stop('');
                    kakeraBurguer.stop('');
                    kakerasBurguer.stop('');
                    divorceBurguer.stop('');
                    thanosBurguer.stop('');
                    haremBurguer.stop('');
                    divorceallBurguer.stop('');
                    thanosallBurguer.stop('');
                    bitesBurguer.stop('');
                    coinBurguer.stop('');
                    restoreBurguer.stop('');

                    eMsg.react("<:sacaso:847275691275452458>");

                    var monedasUsuario = parseInt(tieneMonedas(message), 10);

                    if(monedasUsuario >= 1)
                    {
                        client.usuarios.math(message.author.id, "-", 10, "monedas");
                        compras.send(`<@${message.author.id}> Compró el titúlo <@&822556724384104478>`)
                        eMsg.edit(blancoBur .setDescription(`Compraste el titúlo  <@&822556724384104478>... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710'));
                        member = message.guild.members.cache.get(message.author.id)
                        member.roles.add("822556724384104478") 
                    }else if(monedasUsuario === -99)
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo Apareces en los **Registros** \n\n Claimea 💖 una <:monedasa:847216440053989387> **Mystery Coin** <:monedasa:847216440053989387> \n\n Para aparecer en los **Registros** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }else
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo tenes suficientes <:monedasa:847216440053989387> para comprar eso... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }

                });

                //THANOS A ALGUIEN 🔶 15
                thanosBurguer.on("collect", r =>{

                    eMsg.reactions.removeAll();

                    stopBurguer.stop('');
                    kakeraBurguer.stop('');
                    kakerasBurguer.stop('');
                    divorceBurguer.stop('');
                    waifuBurguer.stop('');
                    haremBurguer.stop('');
                    divorceallBurguer.stop('');
                    thanosallBurguer.stop('');
                    bitesBurguer.stop('');
                    coinBurguer.stop('');
                    restoreBurguer.stop('');

                    eMsg.react("<:sacaso:847275691275452458>");

                    var monedasUsuario = parseInt(tieneMonedas(message), 10);

                    if(monedasUsuario >= 1)
                    {
                        client.usuarios.math(message.author.id, "-", 15, "monedas");
                        compras.send(`<@${message.author.id}> Compró un **𝖙 𝖍 𝖆 𝖓 𝖔 𝖘** a alguien <:snap:857729463156342824>`)
                        eMsg.edit(blancoBur .setDescription(`Cuidado con lo que haces flaco \n\n Compraste un **𝖙 𝖍 𝖆 𝖓 𝖔 𝖘** <:snap:857729463156342824> ... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710'));
                    }else if(monedasUsuario === -99)
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo Apareces en los **Registros** \n\n Claimea 💖 una <:monedasa:847216440053989387> **Mystery Coin** <:monedasa:847216440053989387> \n\n Para aparecer en los **Registros** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }else
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo tenes suficientes <:monedasa:847216440053989387> para comprar eso... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }

                });

                //HAREM MASTER 🎀 25
                haremBurguer.on("collect", r =>{

                    eMsg.reactions.removeAll();

                    stopBurguer.stop('');
                    kakeraBurguer.stop('');
                    kakerasBurguer.stop('');
                    divorceBurguer.stop('');
                    waifuBurguer.stop('');
                    thanosBurguer.stop('');
                    divorceallBurguer.stop('');
                    thanosallBurguer.stop('');
                    bitesBurguer.stop('');
                    coinBurguer.stop('');
                    restoreBurguer.stop('');

                    eMsg.react("<:sacaso:847275691275452458>");

                    var monedasUsuario = parseInt(tieneMonedas(message), 10);

                    if(monedasUsuario >= 1)
                    {
                        client.usuarios.math(message.author.id, "-", 25, "monedas");
                        compras.send(`<@${message.author.id}> Compró el titúlo <@&778575328804732938>`)
                        eMsg.edit(blancoBur .setDescription(`Compraste el titúlo  <@&778575328804732938>... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710'));
                        member = message.guild.members.cache.get(message.author.id)
                        member.roles.add("778575328804732938") 
                    }else if(monedasUsuario === -99)
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo Apareces en los **Registros** \n\n Claimea 💖 una <:monedasa:847216440053989387> **Mystery Coin** <:monedasa:847216440053989387> \n\n Para aparecer en los **Registros** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }else
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo tenes suficientes <:monedasa:847216440053989387> para comprar eso... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }
                });

                //DIVORCE ALL A ALGUIEN 💀 35
                divorceallBurguer.on("collect", r =>{

                    eMsg.reactions.removeAll();

                    stopBurguer.stop('');
                    kakeraBurguer.stop('');
                    kakerasBurguer.stop('');
                    divorceBurguer.stop('');
                    waifuBurguer.stop('');
                    thanosBurguer.stop('');
                    haremBurguer.stop('');
                    thanosallBurguer.stop('');
                    bitesBurguer.stop('');
                    coinBurguer.stop('');
                    restoreBurguer.stop('');

                    eMsg.react("<:sacaso:847275691275452458>");

                    var monedasUsuario = parseInt(tieneMonedas(message), 10);

                    if(monedasUsuario >= 1)
                    {
                        client.usuarios.math(message.author.id, "-", 35, "monedas");
                        compras.send(`<@${message.author.id}> Compró un **ᴅɪᴠᴏʀᴄᴇ ᴀʟʟ** a alguien 💀`)
                        eMsg.edit(blancoBur .setDescription(`Cuidado con lo que haces flaco \n\n Compraste un **ᴅɪᴠᴏʀᴄᴇ ᴀʟʟ** 💀 ... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710'));
                    }else if(monedasUsuario === -99)
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo Apareces en los **Registros** \n\n Claimea 💖 una <:monedasa:847216440053989387> **Mystery Coin** <:monedasa:847216440053989387> \n\n Para aparecer en los **Registros** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }else
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo tenes suficientes <:monedasa:847216440053989387> para comprar eso... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }

                });

                //COIN COLLECTOR 👌 50
                coinBurguer.on("collect", r =>{

                    eMsg.reactions.removeAll();

                    stopBurguer.stop('');
                    kakeraBurguer.stop('');
                    kakerasBurguer.stop('');
                    divorceBurguer.stop('');
                    waifuBurguer.stop('');
                    thanosBurguer.stop('');
                    haremBurguer.stop('');
                    divorceallBurguer.stop('');
                    thanosallBurguer.stop('');
                    bitesBurguer.stop('');
                    restoreBurguer.stop('');

                    eMsg.react("<:sacaso:847275691275452458>");

                    var monedasUsuario = parseInt(tieneMonedas(message), 10);

                    if(monedasUsuario >= 1)
                    {
                        client.usuarios.math(message.author.id, "-", 50, "monedas");
                        compras.send(`<@${message.author.id}> Compró el titúlo <@&847353073688248340>`)
                        eMsg.edit(blancoBur .setDescription(`Compraste el titúlo  <@&847353073688248340>... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710'));
                        member = message.guild.members.cache.get(message.author.id)
                        member.roles.add("847353073688248340") 
                    }else if(monedasUsuario === -99)
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo Apareces en los **Registros** \n\n Claimea 💖 una <:monedasa:847216440053989387> **Mystery Coin** <:monedasa:847216440053989387> \n\n Para aparecer en los **Registros** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }else
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo tenes suficientes <:monedasa:847216440053989387> para comprar eso... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }

                });

                //THANOS ALL 💠 60
                thanosallBurguer.on("collect", r =>{

                    eMsg.reactions.removeAll();

                    stopBurguer.stop('');
                    kakeraBurguer.stop('');
                    kakerasBurguer.stop('');
                    divorceBurguer.stop('');
                    waifuBurguer.stop('');
                    thanosBurguer.stop('');
                    haremBurguer.stop('');
                    divorceallBurguer.stop('');
                    bitesBurguer.stop('');
                    coinBurguer.stop('');
                    restoreBurguer.stop('');

                    eMsg.react("<:sacaso:847275691275452458>");

                    var monedasUsuario = parseInt(tieneMonedas(message), 10);

                    if(monedasUsuario >= 1)
                    {
                        client.usuarios.math(message.author.id, "-", 60, "monedas");
                        compras.send(`<@${message.author.id}> Compró un **𝖙 𝖍 𝖆 𝖓 𝖔 𝖘  𝖆 𝖑 𝖑** <:thanos:857729982486937620>'`)
                        eMsg.edit(blancoBur .setDescription(`Flaco estas medio demente \n\n Compraste un **𝖙 𝖍 𝖆 𝖓 𝖔 𝖘  𝖆 𝖑 𝖑** <:thanos:857729982486937620> ... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710'));
                    }else if(monedasUsuario === -99)
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo Apareces en los **Registros** \n\n Claimea 💖 una <:monedasa:847216440053989387> **Mystery Coin** <:monedasa:847216440053989387> \n\n Para aparecer en los **Registros** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }else
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo tenes suficientes <:monedasa:847216440053989387> para comprar eso... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }

                });

                //BITES THE DUST 🚧 75
                bitesBurguer.on("collect", r =>{

                    eMsg.reactions.removeAll();

                    stopBurguer.stop('');
                    kakeraBurguer.stop('');
                    kakerasBurguer.stop('');
                    divorceBurguer.stop('');
                    waifuBurguer.stop('');
                    thanosBurguer.stop('');
                    haremBurguer.stop('');
                    divorceallBurguer.stop('');
                    thanosallBurguer.stop('');
                    coinBurguer.stop('');
                    restoreBurguer.stop('');

                    eMsg.react("<:sacaso:847275691275452458>");

                    var monedasUsuario = parseInt(tieneMonedas(message), 10);

                    if(monedasUsuario >= 1)
                    {
                        client.usuarios.math(message.author.id, "-", 75, "monedas");
                        compras.send(`<@${message.author.id}> Compró un **𝙗𝙞𝙩𝙚𝙨 𝙩𝙝𝙚 𝙙𝙪𝙨𝙩** <:monkaS:832289245077962792>'`)
                        eMsg.edit(blancoBur .setDescription(`Flaco estas full demente \n\n Compraste un **𝙗𝙞𝙩𝙚𝙨 𝙩𝙝𝙚 𝙙𝙪𝙨𝙩** <:monkaS:832289245077962792> ... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710'));
                    }else if(monedasUsuario === -99)
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo Apareces en los **Registros** \n\n Claimea 💖 una <:monedasa:847216440053989387> **Mystery Coin** <:monedasa:847216440053989387> \n\n Para aparecer en los **Registros** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }else
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo tenes suficientes <:monedasa:847216440053989387> para comprar eso... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }

                });    

                //RESTORE WAIFU POSTING 💞 100
                restoreBurguer.on("collect", r =>{

                    eMsg.reactions.removeAll();

                    const general = client.channels.cache.find(channel => channel.id === '846165300126416906') //ID PRIVADO
                    
                    stopBurguer.stop('');
                    kakeraBurguer.stop('');
                    kakerasBurguer.stop('');
                    divorceBurguer.stop('');
                    waifuBurguer.stop('');
                    thanosBurguer.stop('');
                    haremBurguer.stop('');
                    divorceallBurguer.stop('');
                    thanosallBurguer.stop('');
                    bitesBurguer.stop('');
                    coinBurguer.stop('');

                    eMsg.react("<:sacaso:847275691275452458>");

                    var monedasUsuario = parseInt(tieneMonedas(message), 10);

                    if(monedasUsuario >= 1)
                    {
                        client.usuarios.math(message.author.id, "-", 100, "monedas");
                        compras.send(`<@${message.author.id}> Liberó **💞 Waifu posting 💞**`)
                        eMsg.edit(blancoBur .setDescription(`Liberaste **💞 Waifu posting 💞** \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710'));
                        general.send(`<@${message.author.id}> Liberó **💞 Waifu Posting 💞** de las garras <@364555074900328460> y <@206597687687118849>`);
                    }else if(monedasUsuario === -99)
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo Apareces en los **Registros** \n\n Claimea 💖 una <:monedasa:847216440053989387> **Mystery Coin** <:monedasa:847216440053989387> \n\n Para aparecer en los **Registros** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }else
                    {
                        eMsg.edit(blancoBur .setDescription(`\nNo tenes suficientes <:monedasa:847216440053989387> para comprar eso... \n\n **Coins Actuales: <:monedasa:847216440053989387> ${client.usuarios.get(message.author.id, "monedas")}** \n\n Nos vemos luego...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'));
                    }

                });

                //SALIR 🍔
                stopBurguer.on("collect", r =>{

                    eMsg.reactions.removeAll();

                    kakeraBurguer.stop('');
                    kakerasBurguer.stop('');
                    divorceBurguer.stop('');
                    waifuBurguer.stop('');
                    thanosBurguer.stop('');
                    haremBurguer.stop('');
                    divorceallBurguer.stop('');
                    thanosallBurguer.stop('');
                    bitesBurguer.stop('');
                    coinBurguer.stop('');
                    restoreBurguer.stop('');

                    eMsg.edit(adios .setDescription('Voy a cerrar la tienda... \n\n Nos vemos luego...'));
                    setTimeout(function(){
                        message.delete().catch(error => {console.log(error)});
                        setTimeout(function(){
                            eMsg.delete().catch(error => {console.log(error)});
                        }, 10000)
                    }, 4000)
                    
                });

                //VOLVER 👛
                volverBurguer.on("collect", r =>{

                    eMsg.reactions.removeAll();

                    kakeraBurguer.stop('');
                    kakerasBurguer.stop('');
                    divorceBurguer.stop('');
                    waifuBurguer.stop('');
                    thanosBurguer.stop('');
                    haremBurguer.stop('');
                    divorceallBurguer.stop('');
                    thanosallBurguer.stop('');
                    bitesBurguer.stop('');
                    coinBurguer.stop('');
                    restoreBurguer.stop('');
                   
                    setTimeout(function(){
                        eMsg.delete().catch(error => {console.log(error)});
                        tienda({ timeout: 4000 });
                    }, 3000);
                    
                    
                });

            });   
        }      
    }else
    if(message.content === '%burshop')
    {
        return message.channel.send(acaNo);
    }    
});

//COINSLOG --> MONEDAS DE CADA UNO ✅✅ Admin Only 🔮
client.on("message", async message => {

    if(message.author.bot) return;
    if(message.content.toLowerCase() === '%coinslog' && message.member.roles.cache.has('848031701438300160')) 
    { 
        const Guild = client.guilds.cache.get("778552958236229693");
        const Members = Guild.members.cache.map(member => member.id); 
        message.delete().catch(error => {console.log(error)});
        console.log(client.usuarios);
        Members.forEach(element => 
        {
            const key = `${element}`; 
            try{    
                message.channel.send(`Usuario: **${client.usuarios.get(key, "username")}** Monedas: <:monedasa:847216440053989387> **${client.usuarios.get(key, "monedas")}** \n\n\n`);
            }catch{}

        });
    }else 
    if(message.content.toLowerCase() === '%coinslog')
    {
        message.channel.send(blancoBur .setDescription('Solo los <@&848031701438300160> \n pueden acceder a este comando') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') ).then(eMsg =>{
            
            setTimeout(function(){  
                message.delete().catch(error => {console.log(error)});                           
                eMsg.delete().catch(error => {console.log(error)});
            }, 5000); 
        });
    }
});

//TRADECOINS --> trade MONEDAS DE CADA UNO ✅✅ 65 segundos⏳ Solo se abre en la categoria 🔥
client.on("message", message => {

    if(message.author.bot) return;
    if(message.content.toLowerCase().startsWith('%tradecoins ') && message.channel.parentID === '846878746027491348') 
    { 
        const compras = client.channels.cache.find(channel => channel.id === '857736798436327434')
        
        //TIMEOUT 65 ⏳
        /////////////////////////////
        function timeOutaso(mensajeBorrado) 
        {
            return new Promise((resolve, reject) => {
                setTimeout(() => 
                {
                if (mensajeBorrado)
                    resolve()
                else
                    reject( 
                        eMsg.edit(blancoBur .setDescription('Se termino el tradeo, tengo que irme.. ⌛') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')),
                        setTimeout(() => { eMsg.delete().catch(error => {console.log(error)}) }, 4000),
                        setTimeout(() => { message.delete().catch(error => {console.log(error)}) },4000)
                    )
                })
            })
        }

        setTimeout(() => 
        {
            timeOutaso(eMsg.deleted).then(error => {}).catch(errr => {})
        }, 65000);
        //TIMEOUT 65 ⏳

        let index1 = message.content.indexOf('!') + 1 ;
        let index2 = message.content.indexOf('>');
        const tradeUser = message.content.substring(index1,index2); //SACO DEL MENSAJE EL ID DEL USUARIO A TRADEAR

        //SI EXISTE EL USUARIO EN LOS LOGUEOS
        try{
            
            let intentar = client.usuarios.get(message.author.id, "monedas"); 

            //EXISTE POR LO TANTO HAGO ESTE TRY QUE BUSCA AL USUARIO INDEXEADO
            try{
                const traderId = client.users.cache.find(trader => trader.id == tradeUser).id; //BUSCO EL ID DEL USUARIO A TRADEAR EN EL CACHE DE LOS USUARIOS DEL DISCORD
                client.users.fetch(traderId).then(trader => 
                {
                    if(trader.bot === true)
                    {
                        message.channel.send(blancoBur .setDescription('No podes tradear monedas con un **BOT...**') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') ).then(eMsg => {
                            setTimeout(function(){  
                                message.delete().catch(error => {console.log(error)});                           
                                eMsg.delete().catch(error => {console.log(error)});
                            }, 5000);   
                        });
                    }
                    else if(trader.id === message.author.id)
                    {
                        message.channel.send(blancoBur .setDescription('No podes tradearte monedas a vos mismo...') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') ).then(eMsg => {
                            setTimeout(function(){  
                                message.delete().catch(error => {console.log(error)});                           
                                eMsg.delete().catch(error => {console.log(error)});
                            }, 5000);   
                        });
                    }
                    else
                    {
                        const originalId = message.author.id;//EL QUE TIRO EL COMANDO

                        //CONSTRUCTOR PARA AGARRAR LAS MONEDAS
                        filterAutor = m => m.author.id === message.author.id;   //FILTRO AUTOR
                        const collector = message.channel.createMessageCollector(filterAutor, { max: 1, time: 60000 })

                        message.channel.send(blancoBur .setDescription(`Cuantas monedas le queres dar a <@${traderId}>?...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') ).then(eMsg => {
                            
                            //CONSTRUCTOR ON
                            collector.on('collect', mSgc =>{
                                var tradeMonedas = parseInt(mSgc.content, 10);
                                if(isNaN(tradeMonedas) || tradeMonedas <= 0)
                                {
                                    eMsg.edit(blancoBur .setDescription(`**Flaco** ingresa un número válido`));
                                    setTimeout(function(){ 
                                        message.delete().catch(error => {console.log(error)});
                                        eMsg.delete().catch(error => {console.log(error)});
                                        mSgc.delete().catch(error => {console.log(error)});
                                        return;
                                    }, 5000);
                                }
                                else 
                                if(client.usuarios.get(originalId, "monedas") >= tradeMonedas && tradeMonedas >= 0)
                                {
                                    client.usuarios.math(originalId, "-", tradeMonedas, "monedas");
                                    try{
                                        client.usuarios.math(traderId, "add", tradeMonedas, "monedas");
                                    }catch{
                                        client.usuarios.ensure(traderId, 
                                        {
                                            user: originalId,
                                            username: usernameUsuario,
                                            guild: message.guild.name,
                                            monedas: 0
                                        }); 
                                        client.usuarios.math(traderId, "add", tradeMonedas, "monedas");
                                    }

                                    eMsg.edit(blancoBur .setDescription(`<@${traderId}> recibió <:monedasa:847216440053989387> **${tradeMonedas} ** de: <@${originalId}>\n\n Monedas actuales de: <@${originalId}> son de: <:monedasa:847216440053989387> **${client.usuarios.get(originalId, "monedas")}**`));
                                    
                                    compras.send(`<@${traderId}> recibió <:monedasa:847216440053989387> **${tradeMonedas} **\n\n Tus monedas actuales son de: <:monedasa:847216440053989387> **${client.usuarios.get(originalId, "monedas")}**`);
                                    setTimeout(function(){  
                                        message.delete().catch(error => {console.log(error)});                           
                                        eMsg.delete().catch(error => {console.log(error)});
                                        mSgc.delete().catch(error => {console.log(error)});
                                    }, 7000); 
                                }
                                else
                                {
                                    eMsg.edit(blancoBur .setDescription(`No tenes esa cantidad de monedas para tradear...`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316'))
                                    setTimeout(function(){  
                                        message.delete().catch(error => {console.log(error)});                           
                                        eMsg.delete().catch(error => {console.log(error)});
                                        mSgc.delete().catch(error => {console.log(error)});
                                    }, 5000); 
                                 }

                            });
                        });
                    }
                });        
            }catch
            {
                message.channel.send(blancoBur .setDescription('No se encontro al Usuario') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')).then(eMsg => {
                    setTimeout(function(){  
                        message.delete().catch(error => {console.log(error)});                           
                        eMsg.delete().catch(error => {console.log(error)});
                    }, 5000); 
                });
            }

        }catch{
            message.channel.send(blancoBur .setDescription('No se te encontro en los registros \n Tenes que claimear una 💖**MysteryCoin**💖') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')).then(eMsg => {
                setTimeout(function(){  
                    message.delete().catch(error => {console.log(error)});                           
                    eMsg.delete().catch(error => {console.log(error)});
                }, 10000);         
            });
        }
    }else if(message.content.toLowerCase() === ("%tradecoins") && message.channel.parentID === '846878746027491348')
    {
        message.channel.send(blancoBur .setDescription(`Para tradear 💖**Mystery Coins**💖 con alguien \n\n tenes que usar propiamente el comando \n\n %tradecoins **@Usuario**`) .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')).then(eMsg =>{
                setTimeout(function()
                {  
                    message.delete().catch(error => {console.log(error)});                           
                    eMsg.delete().catch(error => {console.log(error)});
                }, 10000);
            });
    }else if(message.content.toLowerCase() === ("%tradecoins"))
    {
        message.channel.send(acaNo).then(eMsg =>{
                setTimeout(function()
                {  
                    message.delete().catch(error => {console.log(error)});                           
                    eMsg.delete().catch(error => {console.log(error)});
                }, 5000);
            });
    }
});
//#endregion
//COMANDOS 🎈🎈🎈🎈

//TESTING 🧰🧰🧰🧰
//#region

//SETNAME  ✅✅🔮
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() === '%setname' && message.member.roles.cache.has('848031701438300160')) 
    { 
        message.channel.send(blancoBur .setDescription('Ingrese nombre: ') .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') ).then(eMsg =>{
            let filterAutor = m => m.author.id === message.author.id;
            const collectorCrear = message.channel.createMessageCollector(filterAutor, { max: 1, time: 60000 })
            
            collectorCrear.on('collect', mSgc =>{
            

                let index1 = mSgc.content.indexOf('@') + 2 ;
                let index2 = mSgc.content.indexOf('>');
                const usuarioContent = mSgc.content.substring(index1,index2);

                const idUsuario = client.users.cache.find(user => user.id === usuarioContent).id;

                const usernameUsuario = client.users.cache.find(user => user.id === idUsuario).username;

                //Checkeo que el flaco no haya puesto un ROL
                try{
                    client.users.cache.find(user => user.id === usuarioContent).id;
                }catch{
                    eMsg.edit(blancoBur .setDescription(`**Flaco...** Ingresaste un usuario **NO válido**`));

                    setTimeout(function(){ 
                        message.delete().catch(error => {console.log(error)});
                        eMsg.delete().catch(error => {console.log(error)});
                    }, 5000);
                    return;
                }

                //Checkeo que el flaco no haya puesto un BOT
                if(client.users.cache.find(user => user.id === usuarioContent).bot)
                {
                    eMsg.edit(blancoBur .setDescription(`Ingresaste un **BOT...** \n\n **Flaco**, pone un usuario válido.`));

                    setTimeout(function(){ 
                        message.delete().catch(error => {console.log(error)});
                        eMsg.delete().catch(error => {console.log(error)});
                    }, 5000);
                    return;
                }
                else
                {
                    try{

                        const key = `${idUsuario}`;

                        try{
                            let aux = client.usuarios.get(key, "monedas");
                            client.usuarios.set(key, usernameUsuario ,"username");
    
                            eMsg.edit(blancoBur .setDescription(`\n\nSe registro el nuevo username de de **<@${idUsuario}> Exitosamente** \n\n  Nuevo username del registro: **${usernameUsuario}**`) .setImage('https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710'));
                        }catch{
                            eMsg.edit(blancoBur .setDescription(`\n\n**No se pudo** registrar el Nuevo username de **<@${idUsuario}>** \n\n Porque **No aparece en los registros**`)); 
                        }
                        setTimeout(function(){ 
                            message.delete().catch(error => {console.log(error)});
                            eMsg.delete().catch(error => {console.log(error)});
                            mSgc.delete().catch(error => {console.log(error)});
                            return;
                        }, 5000);
                    }catch{}
                }
            
            });
        });
    }
});

//#endregion
//TESTING 🧰🧰🧰🧰

//EMBEDS 📄📄📄📄
//#region
//Embed En Blanco 📄
const blancoBur = new Discord.MessageEmbed()
    .setColor('#eb7d34') 
    .setTitle('Burguerpants')

//Embed Apostar llamar Admin si Deathroll no se cumple
const deathrollAdminBur = new Discord.MessageEmbed()
    .setColor('#eb7d34') 
    .setTitle('Burguerpants')  

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const comandosBur = new Discord.MessageEmbed()
    .setColor('#eb7d34') 
    .setTitle('Burguerpants')     
    .setDescription('Acá esta la lista de **comandos**..')   

    .addField("Salir","🍔")

    .addField("%burcomandos","📝")

    .addField("%burhelp","❓")

    .addField("%burcoins","🤑")      

    .addField("%burchau","⏰")   

    .addField("%burbet **@Usuario**","🎰")

    .addField("%tradecoins **@Usuario**","<:monedasa:847216440053989387>")

    .addField("%burboss","💥")

    .addField("%burshop","👛")    

    .addField("%burguerpants","🍜")

    .addField("%burset","🔮 Admin Only 🔮")

    .addField("%coinslog","🔮 Admin Only 🔮")

    .setImage('https://static.wikia.nocookie.net/undertale/images/0/0b/Burgerpants_face_1.png/revision/latest/scale-to-width-down/110?cb=20160103175652') 

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const acaNo = new Discord.MessageEmbed()
    .setColor('#eb7d34') 
    .setTitle('Burguerpants')     
    .setDescription('No puedo ayudarte en esta categoría.. \n Mi trabajo esta en **<#846878746027491348>** \n')   
    .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316') 

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const holaQuetal = new Discord.MessageEmbed()
    .setColor('#eb7d34') 
    .setTitle('Burguerpants')     
    .setDescription('Hola...Solo tengo **5 minutos**.. \n Que necesitas?')   
    .addField("Salir","🍔")
    .addField("Inicio","🛎")
    .addField("Admin","🚩")
    .addField("Shop","<:sacaso:847275691275452458>")
    .setImage('https://static.wikia.nocookie.net/undertale/images/0/0b/Burgerpants_face_1.png/revision/latest/scale-to-width-down/110?cb=20160103175652') 

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const yendoAtienda = new Discord.MessageEmbed()
    .setColor('#eb7d34') 
    .setTitle('Burguerpants')     
    .setDescription('Abriendo la tienda... <:sacaso:847275691275452458> \n\nDame unos segundos...') 
    .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const adminCall = new Discord.MessageEmbed()
    .setColor('#eb7d34') 
    .setTitle('Burguerpants')                      
    .setDescription('**Llamando a un** \n\n <@&848031701438300160>  \n ')
    .setImage('https://static.wikia.nocookie.net/undertale/images/5/55/Burgerpants_face_3.gif/revision/latest/scale-to-width-down/126?cb=20151103103710')

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const adios = new Discord.MessageEmbed()
    .setColor('#eb7d34') 
    .setTitle('Burguerpants')     
	.setDescription('Nos vemos luego... \n\n Tengo que volver al trabajo...')
    .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const helpMe = new Discord.MessageEmbed()
    .setColor('#eb7d34') 
    .setTitle('Burguerpants')
	.setDescription('No puedo ayudarte... \n\n <@364555074900328460> No me paga el suficiente 💵...')
    .setURL('')
    .setImage('https://static.wikia.nocookie.net/undertale/images/a/a7/Burgerpants_face_awkward.png/revision/latest/scale-to-width-down/124?cb=20151026050316')


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const mysteryShop = new Discord.MessageEmbed()
    .setColor('#ffdd00')
	.setURL('')
	.setAuthor('Mystery Shop', 'https://imgur.com/fHNQ0uJ.png')
	.setDescription('**Canjea tus Mystery Coins!!!**')
	.setThumbnail('https://imgur.com/efO1SoU.png')  
    
	.addField(" 🍔  ", '**Salir**')

	.addField("<:monedasa:847216440053989387> 1", '**1000** de Kakera 💸')   

	.addField("<:monedasa:847216440053989387> 3", '**4000** de Kakera 💵')   

    .addField("<:monedasa:847216440053989387> 5", '**Divorciar** una waifu 🤏')  
    
	.addField("<:monedasa:847216440053989387> 10", '**Titulo:** <@&822556724384104478>')   

    .addField("<:monedasa:847216440053989387> 15", '**𝖙 𝖍 𝖆 𝖓 𝖔 𝖘** a alguien <:snap:857729463156342824>')   
    
    .addField("<:monedasa:847216440053989387> 25", '**Titulo:** <@&778575328804732938>')  

    .addField("<:monedasa:847216440053989387> 35", '**ᴅɪᴠᴏʀᴄᴇ ᴀʟʟ** a alguien 💀')   
    
    .addField("<:monedasa:847216440053989387> 50", '**Titulo:** <@&847353073688248340>')
    
    .addField("<:monedasa:847216440053989387> 60", '**𝖙 𝖍 𝖆 𝖓 𝖔 𝖘   𝖆 𝖑 𝖑** a todo el SV  <:thanos:857729982486937620>')   

    .addField("<:monedasa:847216440053989387> 75", '**𝙗𝙞𝙩𝙚𝙨 𝙩𝙝𝙚 𝙙𝙪𝙨𝙩** <:monkaS:832289245077962792>')       

    .addField("<:monedasa:847216440053989387> 100", '💞 𝐑𝐞𝐬𝐭𝐨𝐫𝐞 𝐰𝐚𝐢𝐟𝐮 𝐩𝐨𝐬𝐭𝐢𝐧𝐠 💞')  

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//#endregion
//EMBEDS 📄📄📄📄