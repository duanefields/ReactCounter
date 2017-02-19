import { observable, computed, autorun } from 'mobx';
import axios from 'axios';

class ClickStore {
  @observable clicks = [];
  @observable pendingRequests = 0;

  constructor() {
    autorun(() => console.log(this.report));
  }

  @computed get clickCount() {
    return this.clicks.length;
  }

  @computed get lastClick() {
    if (this.clicks.length === 0)
      return null;
    return this.clicks[this.clicks.length -1];
  }

  @computed get report() {
		if (this.clicks.length === 0)
			return "<none>";
		return `Most recent click: Client "${this.lastClick.date}, Server: "${this.lastClick.serverDate}". ` +
			`Total Clicks: ${this.clickCount}`;
	}

  addClick() {
    axios.get('https://ui158ertm7.execute-api.us-east-1.amazonaws.com/dev/hello')
    .then((response) => {
      this.clicks.push({
        serverDate: response.data.date,
        date: new Date()
      });
    });
	}

}

const clickStore = new ClickStore();
export default clickStore;
