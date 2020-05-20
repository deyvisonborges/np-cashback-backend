function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

exports.log = (port) => {
    // propriedades do process
    console.log(`===> Propriedades do processo`);
    console.log(`Arquitetura do processo: ${process.arch}`);  
    console.log(`PID do processo: ${process.pid}`);  
    console.log(`Plataforma de processo: ${process.platform}`);  
    console.log(`Versão do processo: ${process.version}`);  
    console.log(`\n`);

    // funcoes do processo
    console.log(`===> Funções do processo`);
    console.log (`Diretório atual: ${process.cwd()}`);  
    console.log (`Tempo de atividade: ${process.uptime()}`);
    console.log (`Uso de memória: ${formatBytes(process.memoryUsage().heapUsed)}`);
    console.log(`\n`);
    
    // envs
    
    // port running
    console.log('Aplicação rodanado na porta: ' + port);
}
