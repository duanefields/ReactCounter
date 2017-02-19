import { observable, computed, autorun } from 'mobx';

class ClickStore {
  @observable clicks = [ { date: new Date() }];
  @observable pendingRequests = 0;

  constructor() {
    autorun(() => console.log(this.report));
  }

  @computed get clickCount() {
    return this.clicks.length;
  }

  @computed get report() {
		if (this.clicks.length === 0)
			return "<none>";
		return `Most recent click: "${this.clicks[this.clicks.length-1].date}". ` +
			`Total Clicks: ${this.clickCount}`;
	}

  addClick() {
		this.clicks.push({
      date: new Date()
		});
	}

}

const clickStore = new ClickStore();
export default clickStore;
