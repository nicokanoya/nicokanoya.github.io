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
      ipad: [
        {
          models: "IPad",
          size: "10.9吋",
          color: "藍色",
          storage: "64GB",
          netfunc: "WIFI",
          price: "11900",
        },
        {
          models: "IPad",
          size: "10.9吋",
          color: "粉紅色",
          storage: "64GB",
          netfunc: "WIFI",
          price: "11900",
        },
        {
          models: "IPad",
          size: "10.9吋",
          color: "黃色",
          storage: "64GB",
          netfunc: "WIFI",
          price: "11900",
        },
        {
          models: "IPad",
          size: "10.9吋",
          color: "銀色",
          storage: "64GB",
          netfunc: "WIFI",
          price: "11900",
        },

        {
          models: "IPad",
          size: "10.9吋",
          color: "藍色",
          storage: "256GB",
          netfunc: "WIFI",
          price: "16900",
        },
        {
          models: "IPad",
          size: "10.9吋",
          color: "粉紅色",
          storage: "256GB",
          netfunc: "WIFI",
          price: "16900",
        },
        {
          models: "IPad",
          size: "10.9吋",
          color: "黃色",
          storage: "256GB",
          netfunc: "WIFI",
          price: "16900",
        },
        {
          models: "IPad",
          size: "10.9吋",
          color: "銀色",
          storage: "256GB",
          netfunc: "WIFI",
          price: "16900",
        },

        {
          models: "IPad",
          size: "10.9吋",
          color: "藍色",
          storage: "256GB",
          netfunc: "WIFI+行動網路",
          price: "21900",
        },
        {
          models: "IPad",
          size: "10.9吋",
          color: "粉紅色",
          storage: "256GB",
          netfunc: "WIFI+行動網路",
          price: "21900",
        },
        {
          models: "IPad",
          size: "10.9吋",
          color: "黃色",
          storage: "256GB",
          netfunc: "WIFI+行動網路",
          price: "21900",
        },
        {
          models: "IPad",
          size: "10.9吋",
          color: "銀色",
          storage: "256GB",
          netfunc: "WIFI+行動網路",
          price: "21900",
        },

        {
          models: "IPad",
          size: "10.9吋",
          color: "藍色",
          storage: "64GB",
          netfunc: "WIFI+行動網路",
          price: "16900",
        },
        {
          models: "IPad",
          size: "10.9吋",
          color: "粉紅色",
          storage: "64GB",
          netfunc: "WIFI+行動網路",
          price: "16900",
        },
        {
          models: "IPad",
          size: "10.9吋",
          color: "黃色",
          storage: "64GB",
          netfunc: "WIFI+行動網路",
          price: "16900",
        },
        {
          models: "IPad",
          size: "10.9吋",
          color: "銀色",
          storage: "64GB",
          netfunc: "WIFI+行動網路",
          price: "16900",
        },

        {
          models: "IPad Air",
          size: "11吋",
          color: "太空灰",
          storage: "128GB",
          netfunc: "WIFI",
          price: "19900",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "太空灰",
          storage: "128GB",
          netfunc: "WIFI+行動網路",
          price: "24900",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "太空灰",
          storage: "256GB",
          netfunc: "WIFI",
          price: "23400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "太空灰",
          storage: "256GB",
          netfunc: "WIFI+行動網路",
          price: "28400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "太空灰",
          storage: "512GB",
          netfunc: "WIFI",
          price: "30400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "太空灰",
          storage: "512GB",
          netfunc: "WIFI+行動網路",
          price: "35400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "太空灰",
          storage: "1TB",
          netfunc: "WIFI",
          price: "37400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "太空灰",
          storage: "1TB",
          netfunc: "WIFI+行動網路",
          price: "42400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "藍色",
          storage: "128GB",
          netfunc: "WIFI",
          price: "19900",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "藍色",
          storage: "128GB",
          netfunc: "WIFI+行動網路",
          price: "24900",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "藍色",
          storage: "256GB",
          netfunc: "WIFI",
          price: "23400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "藍色",
          storage: "256GB",
          netfunc: "WIFI+行動網路",
          price: "28400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "藍色",
          storage: "512GB",
          netfunc: "WIFI",
          price: "30400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "藍色",
          storage: "512GB",
          netfunc: "WIFI+行動網路",
          price: "35400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "藍色",
          storage: "1TB",
          netfunc: "WIFI",
          price: "37400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "藍色",
          storage: "1TB",
          netfunc: "WIFI+行動網路",
          price: "42400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "紫色",
          storage: "128GB",
          netfunc: "WIFI",
          price: "19900",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "紫色",
          storage: "128GB",
          netfunc: "WIFI+行動網路",
          price: "24900",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "紫色",
          storage: "256GB",
          netfunc: "WIFI",
          price: "23400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "紫色",
          storage: "256GB",
          netfunc: "WIFI+行動網路",
          price: "28400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "紫色",
          storage: "512GB",
          netfunc: "WIFI",
          price: "30400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "紫色",
          storage: "512GB",
          netfunc: "WIFI+行動網路",
          price: "35400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "紫色",
          storage: "1TB",
          netfunc: "WIFI",
          price: "37400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "紫色",
          storage: "1TB",
          netfunc: "WIFI+行動網路",
          price: "42400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "星光色",
          storage: "128GB",
          netfunc: "WIFI",
          price: "19900",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "星光色",
          storage: "128GB",
          netfunc: "WIFI+行動網路",
          price: "24900",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "星光色",
          storage: "256GB",
          netfunc: "WIFI",
          price: "23400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "星光色",
          storage: "256GB",
          netfunc: "WIFI+行動網路",
          price: "28400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "星光色",
          storage: "512GB",
          netfunc: "WIFI",
          price: "30400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "星光色",
          storage: "512GB",
          netfunc: "WIFI+行動網路",
          price: "35400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "星光色",
          storage: "1TB",
          netfunc: "WIFI",
          price: "37400",
        },
        {
          models: "IPad Air",
          size: "11吋",
          color: "星光色",
          storage: "1TB",
          netfunc: "WIFI+行動網路",
          price: "42400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "太空灰",
          storage: "128GB",
          netfunc: "WIFI",
          price: "26900",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "太空灰",
          storage: "128GB",
          netfunc: "WIFI+行動網路",
          price: "31900",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "太空灰",
          storage: "256GB",
          netfunc: "WIFI",
          price: "30400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "太空灰",
          storage: "256GB",
          netfunc: "WIFI+行動網路",
          price: "35400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "太空灰",
          storage: "512GB",
          netfunc: "WIFI",
          price: "37400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "太空灰",
          storage: "512GB",
          netfunc: "WIFI+行動網路",
          price: "42400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "太空灰",
          storage: "1TB",
          netfunc: "WIFI",
          price: "44400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "太空灰",
          storage: "1TB",
          netfunc: "WIFI+行動網路",
          price: "49400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "藍色",
          storage: "128GB",
          netfunc: "WIFI",
          price: "26900",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "藍色",
          storage: "128GB",
          netfunc: "WIFI+行動網路",
          price: "31900",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "藍色",
          storage: "256GB",
          netfunc: "WIFI",
          price: "30400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "藍色",
          storage: "256GB",
          netfunc: "WIFI+行動網路",
          price: "35400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "藍色",
          storage: "512GB",
          netfunc: "WIFI",
          price: "37400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "藍色",
          storage: "512GB",
          netfunc: "WIFI+行動網路",
          price: "42400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "藍色",
          storage: "1TB",
          netfunc: "WIFI",
          price: "44400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "藍色",
          storage: "1TB",
          netfunc: "WIFI+行動網路",
          price: "49400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "紫色",
          storage: "128GB",
          netfunc: "WIFI",
          price: "26900",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "紫色",
          storage: "128GB",
          netfunc: "WIFI+行動網路",
          price: "31900",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "紫色",
          storage: "256GB",
          netfunc: "WIFI",
          price: "30400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "紫色",
          storage: "256GB",
          netfunc: "WIFI+行動網路",
          price: "35400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "紫色",
          storage: "512GB",
          netfunc: "WIFI",
          price: "37400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "紫色",
          storage: "512GB",
          netfunc: "WIFI+行動網路",
          price: "42400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "紫色",
          storage: "1TB",
          netfunc: "WIFI",
          price: "44400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "紫色",
          storage: "1TB",
          netfunc: "WIFI+行動網路",
          price: "49400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "星光色",
          storage: "128GB",
          netfunc: "WIFI",
          price: "26900",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "星光色",
          storage: "128GB",
          netfunc: "WIFI+行動網路",
          price: "31900",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "星光色",
          storage: "256GB",
          netfunc: "WIFI",
          price: "30400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "星光色",
          storage: "256GB",
          netfunc: "WIFI+行動網路",
          price: "35400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "星光色",
          storage: "512GB",
          netfunc: "WIFI",
          price: "37400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "星光色",
          storage: "512GB",
          netfunc: "WIFI+行動網路",
          price: "42400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "星光色",
          storage: "1TB",
          netfunc: "WIFI",
          price: "44400",
        },
        {
          models: "IPad Air",
          size: "13吋",
          color: "星光色",
          storage: "1TB",
          netfunc: "WIFI+行動網路",
          price: "49400",
        },
      ],
    };
  },
  methods: {
    handleModel: function (e) {
      this.selected.storage="";
      this.selected.netfunc="";
      this.selected.models = e.target.value;
      this.selected.color = this.ipad.find(
        (x) => x.models == this.selected.models
      ).color;
      this.selected.size = this.ipad.find(
        (x) => x.models == this.selected.models
      ).size;
      const baseprice = this.ipad.find(
        (x) => x.models == this.selected.models
      ).price;
      this.selected.price = baseprice;
      this.$refs.WIFI.value = baseprice;
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
      // console.log(e.target);
      if (e.target.value == "11吋") {
        this.$refs.air128GB.value = 19900;
        this.$refs.air128GB.textContent =
          this.$refs.air128GB.value.toLocaleString();
        this.$refs.air256GB.value = 19900 + 3500;
        this.$refs.air256GB.textContent =
          this.$refs.air256GB.value.toLocaleString();
        this.$refs.air512GB.value = 19900 + 10500;
        this.$refs.air512GB.textContent =
          this.$refs.air512GB.value.toLocaleString();
        this.$refs.air1TB.value = 19900 + 17500;
        this.$refs.air1TB.textContent =
          this.$refs.air1TB.value.toLocaleString();
        this.selected.size = "11吋";
        this.selected.price = this.ipad.find(
          (x) => x.size == "11吋" && x.storage == "128GB"
        ).price;
      } else if (e.target.value == "13吋") {
        this.$refs.air128GB.value = 26900;
        this.$refs.air128GB.textContent =
          this.$refs.air128GB.value.toLocaleString();
        this.$refs.air256GB.value = 26900 + 3500;
        this.$refs.air256GB.textContent =
          this.$refs.air256GB.value.toLocaleString();
        this.$refs.air512GB.value = 26900 + 10500;
        this.$refs.air512GB.textContent =
          this.$refs.air512GB.value.toLocaleString();
        this.$refs.air1TB.value = 26900 + 17500;
        this.$refs.air1TB.textContent =
          this.$refs.air1TB.value.toLocaleString();
        this.selected.size = "13吋";
        this.selected.price = this.ipad.find(
          (x) => x.size == "13吋" && x.storage == "128GB"
        ).price;
      }
    },
    handleAirNet: function (e) {
      this.selected.storage = e.target.value;
      const baseprice = this.ipad.find((x) => {
        return (
          x.size == this.selected.size && x.storage == this.selected.storage
        );
      }).price;
      this.$refs.WIFI.value = Number(baseprice);
      this.$refs.WIFI.textContent = (Number(baseprice)).toLocaleString();
      this.$refs.mobileNet.value = Number(baseprice) + 5000;
      this.$refs.mobileNet.textContent = (Number(baseprice) + 5000).toLocaleString();
      this.selected.price = baseprice;
    },
  },
  computed: {},
  watch: {
    selected: {
      handler() {
        // console.log(this.selected);
        //給ipad預設尺寸
        if (this.selected.models == "IPad") {
          this.selected.size = "10.9吋";
        }
        if (this.selected.color == "") {
          if (this.selected.models == "IPad Air") {
            this.selected.color = this.ipad.find(
              (x) => x.models == "IPad Air"
            ).color;
            this.selected.price = this.ipad.find(
              (x) => x.models == "IPad Air"
            ).price;
          }
        }

        if (
          this.selected.size != "" &&
          this.selected.color != "" &&
          this.selected.storage != "" &&
          this.selected.netfunc != ""
        ) {
          const obj = this.ipad.find((x) => {
            return (
              x.size == this.selected.size &&
              x.color === this.selected.color &&
              x.storage === this.selected.storage &&
              x.netfunc === this.selected.netfunc
            );
          });
          // console.log(obj);
          if (obj) {
            this.selected.price = obj.price;
          }
          return;
        }
        return;
      },
      deep: true,
      immediate: true,
    },
    "selected.storage"() {
      if (this.selected.models == "IPad")
        if (this.selected.storage == "256GB") {
          this.selected.price = this.ipad.find(
            (x) => x.models == "IPad" && x.storage == "256GB"
          ).price;
          this.$refs.WIFI.textContent = "16,900";
          this.$refs.mobileNet.textContent = "21,900";
        } else {
          this.selected.price = this.ipad.find(
            (x) => x.models == "IPad" && x.storage == "64GB"
          ).price;
          this.$refs.WIFI.textContent = "11,900";
          this.$refs.mobileNet.textContent = "16,900";
        }
    },
  },
  mounted() {
    if (this.selected.models == "IPad") {
      this.selected.color = this.ipad.find((x) => x.models == "IPad").color;
      this.selected.price = this.ipad.find((x) => x.models == "IPad").price;
    }
  },
});

app.mount("#app");
