var employee = [
	{
	"id": 1,
	"pin": "Lenovo",
	"name": "Ноутбук Lenovo Ideapad 320-15IKBA, 80YE008WRK, 4GB DDR4, 500GB HDD ",
	"Основные характеристики": " Тип: ноутбук Операционная система: DOS Процессор: Intel Core i5 7200U 2500 МГц Количество ядер процессора: 2Объем кэша L3: 3 Мб",
	"Память": " 4 Гб DDR4 2133 МГц Максимальный размер: 16 ГбКоличество слотов: 2",
	"Устройства хранения данных": " Оптический привод: DVDRW Объем накопителя HDD: 500 Гб Интерфейс накопителя: Serial ATA",
	"Питание": " Время работы от аккумулятора: 5 ч Тип аккумулятора: Li-Ion",
	"Цена:": " 38750 сом"
	},
	{
	"id": 2,
	"pin": "Acer",
	"name": " Ноутбук Acer Aspire E5-576G-74W4, 8GB, 500GB HDD, черный",
	"Процессор": " Core i7 Код процессора 7500U Ядро процессора Kabylake Частота процессора 2500 МГц Количество ядер процессора 2 Объем кэша L3 4 Мб",
	"Память": " Объем оперативной памяти 8 Гб Тип памяти DDR3L Максимальный объем памяти 16 Гб Количество слотов памяти 2",
	"Экран": " Диагональ экрана 15.6 Широкоформатный экран есть. Светодиодная подсветка экрана есть",
	"Питание": " Емкость аккумулятора 2800 мА·ч Количество ячеек батареи 4. Тип аккумулятора Li-Ion",
	"Цена": " 44920 сом"
	},
	{
	"id": 3,
	"pin": "Razer",
	"name": " Razer Blade Stealth RZ09-01682E24 8GB черный",
	"О продукте": " Процессор: Core i7 Частота процессора: 2500 МГц Объем оперативной памяти: 8 Гб Объем жесткого диска: 256 Гб Размер экрана: 12.5  Видеокарта: Intel HD Graphics 520 4G LTE: нет Bluetooth: есть Wi-Fi: есть",
	"Подробные характеристики": " Цвет черный. Процессор Core i7. Код процессора 6500U. Частота процессора 2500 МГц. Количество ядер процессора 2. Объем кэша L2 512 Кб. Объем кэша L3 4 Мб",
	"Память": " Объем оперативной памяти 8 Гб. Тип памяти DDR3. Частота памяти 1866 МГц",
	"Питание": " Время автономной работы 6 ч. Тип аккумулятора Li-Pol",
	"Цена": " 78530 сом"
	},
	{
	"id": 4,
	"pin": 2354,
	"name": "Leanne Graham",
	"username": "Bret",
	"email": "Sincere@april.biz",
	"phone": "1-770-736-8031 x56442",
	"website": "hildegard.org",
	"department": "somedep3"
	},
	{
	"id": 5,
	"pin": 23445,
	"name": "Leanne Graham",
	"username": "Bret",
	"email": "Sincere@april.biz",
	"phone": "1-770-736-8031 x56442",
	"website": "hildegard.org",
	"department": "somedep4"
	},
]


function findPin(){
	var element = document.getElementById('pin');
	var result =  document.getElementById('result');

	for(var i = 0; i < employee.length; i++){
		if(employee[i].pin == element.value){
			a = Object.entries(employee[i]);
			result.innerHTML = '';
			a.forEach(function(item, a) {
			  elem = document.createElement('p');
			  inner = document.createTextNode(item);
			  elem.appendChild(inner);
			  result.appendChild(elem);
			});
		}
	}
}