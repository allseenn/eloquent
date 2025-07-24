const Roomba = { // Есть негласное правило называть объекты в алгоритмах с большой буквы.
    // Обычно сначала объявляют свойства объекта.
    model: "Romba-1",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,
    // После свойств объявляют его методы.
    startCleaning: function () { // увеличивает счетчик стартов робота и выводит сообщение о старте
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    },
    goCharge: function () { // отправка на зарядку
        console.log('I am going to charge...');
    },
    switchUVLamp: function () { // вкл.выкл ультрафиолетовой лампы
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    }
};

//Roomba.isUVLampOn = true;
Roomba.switchUVLamp();

const Tango = { 
    model: "Tango-1",
    power: 300,
    batterySize: 3200,
    boxSize: 0.7,
    workTime: 60,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,
    // После свойств объявляют его методы. А так как методы у новой модели такие же как и у старой, давайте позаимствуем их у объекта Roomba.
    startCleaning: Roomba.startCleaning,
    goCharge: Roomba.goCharge,
    switchUVLamp: Roomba.switchUVLamp,
};

//Tango.isUVLampOn = true;
Tango.switchUVLamp(); 

const Samba = {
    model: "Samba-1",
    power: 250,
    batterySize: 2500,
    boxSize: 0.5,
    workTime: 50,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,
};

Samba.startCleaning = Roomba.startCleaning;
Samba.switchUVLamp = Roomba.switchUVLamp;
//Samba.isUVLampOn = true;
Samba.switchUVLamp(); // !!! 'UV lamp is not working.'
setTimeout(Samba.switchUVLamp, 2000);
setTimeout(function() {
    Samba.switchUVLamp();
}, 5000);
