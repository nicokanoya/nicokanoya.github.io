const { createApp } = Vue;

const app = createApp({
  data: function () {
    return {
      selected: {
        models: "IPad",
        size: "",
        color: "",
        storage: "",
        netfunc: "",
        price: "",
      },
      showTitle: false,
      ipadSpec: {
        size: new Map([["10.9吋", 11900]]),
        color: new Map([
          ["藍色", "blue"],
          ["粉紅色", "pink"],
          ["黃色", "yellow"],
          ["銀色", "silver"],
        ]),

        // ["藍色","粉紅色","黃色","銀色"]
        storage: new Map([
          ["64GB", 0],
          ["256GB", 5000],
        ]),
        netfunc: new Map([
          ["WIFI", 0],
          ["WIFI+行動網路", 5000],
        ]),
      },
      ipadairSpec: {
        size: new Map([
          ["11吋", 19900],
          ["13吋", 26900],
        ]),
        color: new Map([
          ["太空灰", "skygray"],
          ["藍色", "blue"],
          ["紫色", "purple"],
          ["星光色", "starlight"],
        ]),
        storage: new Map([
          ["128GB", 0],
          ["256GB", 3500],
          ["512GB", 10500],
          ["1TB", 17500],
        ]),
        netfunc: new Map([
          ["WIFI", 0],
          ["WIFI+行動網路", 5000],
        ]),
      },
      // ipad: [
      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "藍色",
      //     storage: "64GB",
      //     netfunc: "WIFI",
      //     price: "11900",
      //   },
      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "粉紅色",
      //     storage: "64GB",
      //     netfunc: "WIFI",
      //     price: "11900",
      //   },
      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "黃色",
      //     storage: "64GB",
      //     netfunc: "WIFI",
      //     price: "11900",
      //   },
      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "銀色",
      //     storage: "64GB",
      //     netfunc: "WIFI",
      //     price: "11900",
      //   },

      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "藍色",
      //     storage: "256GB",
      //     netfunc: "WIFI",
      //     price: "16900",
      //   },
      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "粉紅色",
      //     storage: "256GB",
      //     netfunc: "WIFI",
      //     price: "16900",
      //   },
      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "黃色",
      //     storage: "256GB",
      //     netfunc: "WIFI",
      //     price: "16900",
      //   },
      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "銀色",
      //     storage: "256GB",
      //     netfunc: "WIFI",
      //     price: "16900",
      //   },

      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "藍色",
      //     storage: "256GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "21900",
      //   },
      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "粉紅色",
      //     storage: "256GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "21900",
      //   },
      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "黃色",
      //     storage: "256GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "21900",
      //   },
      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "銀色",
      //     storage: "256GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "21900",
      //   },

      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "藍色",
      //     storage: "64GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "16900",
      //   },
      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "粉紅色",
      //     storage: "64GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "16900",
      //   },
      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "黃色",
      //     storage: "64GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "16900",
      //   },
      //   {
      //     models: "IPad",
      //     size: "10.9吋",
      //     color: "銀色",
      //     storage: "64GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "16900",
      //   },

      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "太空灰",
      //     storage: "128GB",
      //     netfunc: "WIFI",
      //     price: "19900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "太空灰",
      //     storage: "128GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "24900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "太空灰",
      //     storage: "256GB",
      //     netfunc: "WIFI",
      //     price: "23400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "太空灰",
      //     storage: "256GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "28400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "太空灰",
      //     storage: "512GB",
      //     netfunc: "WIFI",
      //     price: "30400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "太空灰",
      //     storage: "512GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "35400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "太空灰",
      //     storage: "1TB",
      //     netfunc: "WIFI",
      //     price: "37400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "太空灰",
      //     storage: "1TB",
      //     netfunc: "WIFI+行動網路",
      //     price: "42400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "藍色",
      //     storage: "128GB",
      //     netfunc: "WIFI",
      //     price: "19900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "藍色",
      //     storage: "128GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "24900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "藍色",
      //     storage: "256GB",
      //     netfunc: "WIFI",
      //     price: "23400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "藍色",
      //     storage: "256GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "28400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "藍色",
      //     storage: "512GB",
      //     netfunc: "WIFI",
      //     price: "30400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "藍色",
      //     storage: "512GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "35400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "藍色",
      //     storage: "1TB",
      //     netfunc: "WIFI",
      //     price: "37400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "藍色",
      //     storage: "1TB",
      //     netfunc: "WIFI+行動網路",
      //     price: "42400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "紫色",
      //     storage: "128GB",
      //     netfunc: "WIFI",
      //     price: "19900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "紫色",
      //     storage: "128GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "24900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "紫色",
      //     storage: "256GB",
      //     netfunc: "WIFI",
      //     price: "23400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "紫色",
      //     storage: "256GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "28400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "紫色",
      //     storage: "512GB",
      //     netfunc: "WIFI",
      //     price: "30400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "紫色",
      //     storage: "512GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "35400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "紫色",
      //     storage: "1TB",
      //     netfunc: "WIFI",
      //     price: "37400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "紫色",
      //     storage: "1TB",
      //     netfunc: "WIFI+行動網路",
      //     price: "42400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "星光色",
      //     storage: "128GB",
      //     netfunc: "WIFI",
      //     price: "19900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "星光色",
      //     storage: "128GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "24900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "星光色",
      //     storage: "256GB",
      //     netfunc: "WIFI",
      //     price: "23400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "星光色",
      //     storage: "256GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "28400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "星光色",
      //     storage: "512GB",
      //     netfunc: "WIFI",
      //     price: "30400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "星光色",
      //     storage: "512GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "35400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "星光色",
      //     storage: "1TB",
      //     netfunc: "WIFI",
      //     price: "37400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "11吋",
      //     color: "星光色",
      //     storage: "1TB",
      //     netfunc: "WIFI+行動網路",
      //     price: "42400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "太空灰",
      //     storage: "128GB",
      //     netfunc: "WIFI",
      //     price: "26900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "太空灰",
      //     storage: "128GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "31900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "太空灰",
      //     storage: "256GB",
      //     netfunc: "WIFI",
      //     price: "30400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "太空灰",
      //     storage: "256GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "35400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "太空灰",
      //     storage: "512GB",
      //     netfunc: "WIFI",
      //     price: "37400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "太空灰",
      //     storage: "512GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "42400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "太空灰",
      //     storage: "1TB",
      //     netfunc: "WIFI",
      //     price: "44400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "太空灰",
      //     storage: "1TB",
      //     netfunc: "WIFI+行動網路",
      //     price: "49400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "藍色",
      //     storage: "128GB",
      //     netfunc: "WIFI",
      //     price: "26900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "藍色",
      //     storage: "128GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "31900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "藍色",
      //     storage: "256GB",
      //     netfunc: "WIFI",
      //     price: "30400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "藍色",
      //     storage: "256GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "35400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "藍色",
      //     storage: "512GB",
      //     netfunc: "WIFI",
      //     price: "37400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "藍色",
      //     storage: "512GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "42400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "藍色",
      //     storage: "1TB",
      //     netfunc: "WIFI",
      //     price: "44400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "藍色",
      //     storage: "1TB",
      //     netfunc: "WIFI+行動網路",
      //     price: "49400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "紫色",
      //     storage: "128GB",
      //     netfunc: "WIFI",
      //     price: "26900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "紫色",
      //     storage: "128GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "31900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "紫色",
      //     storage: "256GB",
      //     netfunc: "WIFI",
      //     price: "30400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "紫色",
      //     storage: "256GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "35400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "紫色",
      //     storage: "512GB",
      //     netfunc: "WIFI",
      //     price: "37400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "紫色",
      //     storage: "512GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "42400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "紫色",
      //     storage: "1TB",
      //     netfunc: "WIFI",
      //     price: "44400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "紫色",
      //     storage: "1TB",
      //     netfunc: "WIFI+行動網路",
      //     price: "49400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "星光色",
      //     storage: "128GB",
      //     netfunc: "WIFI",
      //     price: "26900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "星光色",
      //     storage: "128GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "31900",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "星光色",
      //     storage: "256GB",
      //     netfunc: "WIFI",
      //     price: "30400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "星光色",
      //     storage: "256GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "35400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "星光色",
      //     storage: "512GB",
      //     netfunc: "WIFI",
      //     price: "37400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "星光色",
      //     storage: "512GB",
      //     netfunc: "WIFI+行動網路",
      //     price: "42400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "星光色",
      //     storage: "1TB",
      //     netfunc: "WIFI",
      //     price: "44400",
      //   },
      //   {
      //     models: "IPad Air",
      //     size: "13吋",
      //     color: "星光色",
      //     storage: "1TB",
      //     netfunc: "WIFI+行動網路",
      //     price: "49400",
      //   },
      // ],
    };
  },
  methods: {
    handleModel: function (e) {
      this.selected.storage = "";
      this.selected.netfunc = "";
      this.selected.models = e.target.value;
      let baseprice;
      if (this.selected.models == "IPad") {
        this.selected.color = "藍色";
        this.selected.size = "10.9吋";
        baseprice = this.ipadSpec.size.get("10.9吋");
      } else if (this.selected.models == "IPad Air") {
        this.selected.color = "太空灰";
        this.selected.size = "11吋";
        baseprice = this.ipadairSpec.size.get("11吋");
      }
      this.selected.price = baseprice;
      this.$refs.WIFI.value = Number(baseprice);
      this.$refs.WIFI.textContent = Number(baseprice).toLocaleString();
      this.$refs.mobileNet.value = Number(baseprice) + 5000;
      this.$refs.mobileNet.textContent = (
        Number(baseprice) + 5000
      ).toLocaleString();

      const radios = document.querySelectorAll("input");
      radios.forEach((radio) => {
        radio.checked = false;
      });
    },
    handleAirSize: function (e) {
      console.log(e.target);
      if (e.target.value == "11吋") {
        const gb128 = this.ipadairSpec.size.get("11吋");
        const gb256 =
          this.ipadairSpec.size.get("11吋") +
          this.ipadairSpec.storage.get("256GB");
        const gb512 =
          this.ipadairSpec.size.get("11吋") +
          this.ipadairSpec.storage.get("512GB");
        const tb1 =
          this.ipadairSpec.size.get("11吋") +
          this.ipadairSpec.storage.get("1TB");

        this.$refs.air128GB.value = gb128;
        this.$refs.air128GB.textContent = gb128.toLocaleString();
        this.$refs.air256GB.value = gb256;
        this.$refs.air256GB.textContent = gb256.toLocaleString();
        this.$refs.air512GB.value = gb512;
        this.$refs.air512GB.textContent = gb512.toLocaleString();
        this.$refs.air1TB.value = tb1;
        this.$refs.air1TB.textContent = tb1.toLocaleString();
        this.selected.size = "11吋";
        //先給預設值
        this.selected.price = gb128;
      } else if (e.target.value == "13吋") {
        const gb128 = this.ipadairSpec.size.get("13吋");
        const gb256 =
          this.ipadairSpec.size.get("13吋") +
          this.ipadairSpec.storage.get("256GB");
        const gb512 =
          this.ipadairSpec.size.get("13吋") +
          this.ipadairSpec.storage.get("512GB");
        const tb1 =
          this.ipadairSpec.size.get("13吋") +
          this.ipadairSpec.storage.get("1TB");

        this.$refs.air128GB.value = gb128;
        this.$refs.air128GB.textContent = gb128.toLocaleString();
        this.$refs.air256GB.value = gb256;
        this.$refs.air256GB.textContent = gb256.toLocaleString();
        this.$refs.air512GB.value = gb512;
        this.$refs.air512GB.textContent = gb512.toLocaleString();
        this.$refs.air1TB.value = tb1;
        this.$refs.air1TB.textContent = tb1.toLocaleString();
        this.selected.size = "13吋";
        this.selected.price = gb128;
      }
      const wifibaseprice=this.ipadairSpec.size.get(this.selected.size)+(this.ipadairSpec.storage.get(this.selected.storage)?this.ipadairSpec.storage.get(this.selected.storage):0)
      this.$refs.WIFI.value = wifibaseprice;
      this.$refs.WIFI.textContent = wifibaseprice.toLocaleString();
      this.$refs.mobileNet.value = wifibaseprice + 5000;
      this.$refs.mobileNet.textContent = (wifibaseprice + 5000).toLocaleString();
    },
    handleAirNet: function (e) {
      this.selected.storage = e.target.value;
      // console.log(this.selected.storage)
      let baseprice;
      // console.log(this.selected)
      if (this.selected.models == "IPad") {
        baseprice =
          this.ipadSpec.size.get(this.selected.size) +
          this.ipadSpec.storage.get(this.selected.storage);
      } else if (this.selected.models == "IPad Air") {
        baseprice =
          this.ipadairSpec.size.get(this.selected.size) +
          this.ipadairSpec.storage.get(this.selected.storage);
        console.log(baseprice);
      }

      this.$refs.WIFI.value = baseprice;
      this.$refs.WIFI.textContent = baseprice.toLocaleString();
      this.$refs.mobileNet.value = baseprice + 5000;
      this.$refs.mobileNet.textContent = (baseprice + 5000).toLocaleString();
      this.selected.price = baseprice;
    },
    handleScroll: function (e) {
      const scrollTop = window.scrollY;
      this.showTitle = scrollTop > 60;

      if (this.showTitle) {
        this.$refs.head.style.transform = "translateY(50px)";
      } else {
        this.$refs.head.style.transform = "translateY(-50px)";
      }
    },
  },
  computed: {},
  watch: {
    selected: {
      handler() {
        console.log(this.selected);
        //給ipad預設尺寸
        if (this.selected.models == "IPad") {
          this.selected.size = "10.9吋";
        }

        if (this.selected.color == "") {
          if (this.selected.models == "IPad Air") {
            this.selected.color = "太空灰";
            this.selected.price = this.ipadairSpec.size.get("11吋");
          }
        }

        // this.selected.size != "" &&
        // this.selected.color != "" &&
        // this.selected.storage != "" &&
        // this.selected.netfunc != ""

        let modelSpect;
        let sizeP;
        let storageP;
        let netfuncP;
        if (this.selected.models == "IPad") {
          modelSpect = this.ipadSpec;
        } else if (this.selected.models == "IPad Air") {
          modelSpect = this.ipadairSpec;
        }

        if (this.selected.size == "") {
          sizeP = 0;
        }
        sizeP =
          this.selected.size == ""
            ? 0
            : modelSpect.size.get(this.selected.size);
        storageP =
          this.selected.storage == ""
            ? 0
            : modelSpect.storage.get(this.selected.storage);
        netfuncP =
          this.selected.netfunc == ""
            ? 0
            : modelSpect.netfunc.get(this.selected.netfunc);
        this.selected.price = sizeP + storageP + netfuncP;

        return;
      },
      deep: true,
      immediate: true,
    },
    "selected.storage"() {
      const baseprice =
        this.ipadSpec.size.get(this.selected.size) +
        this.ipadSpec.storage.get(this.selected.storage);
      this.selected.price = baseprice;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    if (this.selected.models == "IPad") {
      this.selected.color = "藍色";
      this.selected.price = this.ipadSpec.size.get("10.9吋");
    }
  },
});

app.mount("#app");
