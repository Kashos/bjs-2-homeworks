class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        const existingAlarm = this.alarmCollection.find(alarm => alarm.time === time);
        if (existingAlarm) {
            console.warn('Уже присутствует звонок на это же время');
        }

        const newAlarm = {
            time,
            callback,
            canCall: true
        };
        this.alarmCollection.push(newAlarm);
    }

    removeClock(time) {
        if (!this.alarmCollection) {
            console.error('Коллекция звонков отсутствует!');
            return;
        }

        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    start() {
        if (this.intervalId) {
            return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.canCall = false;
                    if (alarm.callback) {
                        alarm.callback();
                    }
                }

                if (!alarm.callback) {
                    this.removeClock(alarm.time);
                }
            });
        }, 1000);
    }

    stop() {
        if (!this.intervalId) {
            return;
        }

        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        if (!this.alarmCollection) {
            console.error('Коллекция звонков отсутствует!');
            return;
        }

        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}