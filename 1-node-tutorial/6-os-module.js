const os = require('os');


//INFORMAÇÃO DO SISTEMA
//=============================================================

//FASER A LEITURA DOS DADOS NO SISTEMA
const systemData = () => {
    console.log('DADOS DO SYSTEMA');
    console.log('Nome do dispositivo: ' + os.hostname());
    console.log('Nome do sistema operativo: ' + os.platform());
    console.log('Dados do User: ' + os.userInfo().username);
    console.log('Arquitetura da CPU: ' + os.arch());
    console.log('Versão do sistema: ' + os.release());
    console.log('Tipo de sistema: ' + os.type())
};

//VERIFICAR O TEMPO DE EXCUÇÃO DO SISTEMA
const systemUptme = () => {
    const upTimeSeconds = os.uptime(); //retorna op tempo de excução em segundos
    const upTimeMinute = upTimeSeconds / 60; //retorna o tempo de execuçãompor minutos
    const upTimeHours = upTimeMinute / 60; //retorna o tempo de execução em horas
    
    console.log('Execução em segundos: ' + upTimeSeconds);
    console.log('Execução em minutos: ' + upTimeMinute.toFixed(2));
    console.log('Execução em horas: ' + upTimeHours.toFixed(2));
};

//INFORMAÇÃO DE CAMINHO E ARWUIVOS
//========================================================

const systemArquiv = () => {
    console.log('Direitorio inicial do usuario: ' + os.homedir());
    console.log('Direitorio temporario: ' + os.tmpdir());
    console.log('Memoria total do sistema: ' + os.totalmem() + ' Bytes');
    console.log('Espaço vasio do siistema: ' + os.freemem() + ' Bytes');
    console.log('Memoria total do sistema: ' + os.totalmem() / (1024 * 1024) + ' MB');
    console.log('Espaço vasio do siistema: ' + os.freemem() / (1024 * 1024) + ' MB');
}


systemData();
systemUptme();
systemArquiv();