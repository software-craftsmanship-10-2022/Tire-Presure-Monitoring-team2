import { expect } from 'chai';
import 'mocha';
import Alarm, { IBaseSensor } from '../tire-pressure-monitoring-system/alarm';



function sensorGenerator(enableAlarm: boolean): IBaseSensor {
	class dummySensor implements IBaseSensor{
		isSensorOn(): boolean {
			return enableAlarm;
		}
	}
	return new dummySensor();
}

describe('Tyre Pressure Monitoring System', () => {

	it('Should not turn alarm by default', () => {
		const alarm = new Alarm(sensorGenerator(false));
		expect(alarm.isAlarmOn()).eql(false);
	});

	it('Should turn alarm on when sensor is enabled', () => {
		const alarm = new Alarm(sensorGenerator(true));
		alarm.check();
		expect(alarm.isAlarmOn()).eql(true);
	});

	it('Should turn alarm off when sensor is not enabled', () => {
		const alarm = new Alarm(sensorGenerator(false));
		alarm.check();
		expect(alarm.isAlarmOn()).eql(false);
	});

	// it('Alarm should turn on one point under low pressure treshold', () => {
	// 	const alarm = new Alarm(sensorGenerator(15),16);
	// 	alarm.check();
	// 	expect(alarm.isAlarmOn()).eql(true);
	// });

	// it('Alarm should not turn on when pressure is same as minimum treshold', () => {
	// 	const alarm = new Alarm(sensorGenerator(17));
	// 	alarm.check();
	// 	expect(alarm.isAlarmOn()).eql(false);
	// });

	// it('Alarm should turn on one point higher on high pressure treshold', () => {
	// 	const alarm = new Alarm(sensorGenerator(23),22);
	// 	alarm.check();
	// 	expect(alarm.isAlarmOn()).eql(true);
	// });

	// it('Alarm should not turn on when pressure is same as maximum treshold', () => {
	// 	const alarm = new Alarm(sensorGenerator(21));
	// 	alarm.check();
	// 	expect(alarm.isAlarmOn()).eql(false);
	// });

});
