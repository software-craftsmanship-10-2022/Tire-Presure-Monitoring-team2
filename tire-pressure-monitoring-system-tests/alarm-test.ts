import { expect } from 'chai';
import 'mocha';
import Alarm, { IBaseSensor } from '../tire-pressure-monitoring-system/alarm';



function sensorGenerator(value: number): IBaseSensor {
	class dummySensor implements IBaseSensor{
		popNextPressurePsiValue(): number {
			return value;
		}
	}
	return new dummySensor();
}

describe('Tyre Pressure Monitoring System', () => {

	it('Should not turn alarm by default', () => {
		const alarm = new Alarm(sensorGenerator(1));
		expect(alarm.isAlarmOn()).eql(false);
	});

	it('Should  turn alarm on when not in valid range', () => {
		const alarm = new Alarm(sensorGenerator(7));
		alarm.check();
		expect(alarm.isAlarmOn()).eql(true);
	});

	it('Should not turn alarm on when in valid range', () => {
		const alarm = new Alarm(sensorGenerator(18));
		alarm.check();
		expect(alarm.isAlarmOn()).eql(false);
	});

	it('Alarm should turn on one point under low pressure treshold', () => {
		const alarm = new Alarm(sensorGenerator(15),16);
		alarm.check();
		expect(alarm.isAlarmOn()).eql(true);
	});

	it('Alarm should not turn on when pressure is same as minimum treshold', () => {
		const alarm = new Alarm(sensorGenerator(17));
		alarm.check();
		expect(alarm.isAlarmOn()).eql(false);
	});

	it('Alarm should turn on one point higher on high pressure treshold', () => {
		const alarm = new Alarm(sensorGenerator(23),22);
		alarm.check();
		expect(alarm.isAlarmOn()).eql(true);
	});

	it('Alarm should not turn on when pressure is same as maximum treshold', () => {
		const alarm = new Alarm(sensorGenerator(21));
		alarm.check();
		expect(alarm.isAlarmOn()).eql(false);
	});

});
