<template>
  <div class="detail">
    <div class="content">
      <div class="left">
        <p class="city">{{departStation}}</p>
        <p class="time">{{departTimeStr}}</p>
        <p class="date">{{departDateStr}}</p>
      </div>
      <div class="middle">
        <p class="train-name">{{trainNumber}}</p>
        <p class="train-time">耗时{{durationStr}}</p>
      </div>
      <div class="right">
        <p class="city">{{arriveStation}}</p>
        <p class="time">{{arriveTimeStr}}</p>
        <p class="date">{{arriveDateStr}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

export default {
  name: "Detail",
  props: {
    departDate: {
      type: Number,
      required: true
    },
    arriveDate: {
      type: Number,
      required: true
    },
    departTimeStr: {
      type: String,
    },
    arriveTimeStr: {
      type: String,
    },
    trainNumber: {
      type: String,
      required: true
    },
    departStation: {
      type: String,
      required: true
    },
    arriveStation: {
      type: String,
      required: true
    },
    durationStr: {
      type: String,
    },
  },
  data() {
    return {};
  },
  computed: {
    departDateStr() {
      return this.format(this.departDate);
    },
    arriveDateStr() {
      return this.format(this.arriveDate);
    }
  },
  methods: {
    format(d) {
      const date = dayjs(d);
      return date.format('MM-DD') + '' + date.locale('zh-cn').format('ddd');
    }
  }
};
</script>

<style scoped>
  .detail {
    padding: 0 15px;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
  }

  .detail .content {
    padding: 22px 0;
    display: flex;
  }

  .detail .content .left {
    flex: 1;
    text-align: left;
  }

  .detail .content .right {
    flex: 1;
    text-align: right;
  }

  .detail .content .middle {
    width: 115px;
    text-align: center;
  }

  .detail .content p {
    margin: 0;
  }

  .detail .content .city {
    font-size: 17px;
  }

  .detail .content .time {
    font-size: 24px;
    color: #333;
  }

  .detail .content .date {
    font-size: 13px;
    color: #333;
  }

  .detail .content .train-name {
    font-size: 13px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    top: 5px;
  }

  .detail .content .train-mid {
    padding: 13px 0;
  }

  .detail .content .train-icon {
    line-height: 28px;
    width: 110px;
    height: 28px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAASCAYAAAAKRM1zAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQzNkM4MzNENjdCNzExRTRCQTg3RjQ4QkE0MkQ1QUY3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQzNkM4MzNFNjdCNzExRTRCQTg3RjQ4QkE0MkQ1QUY3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDM1QzlFNDA2N0I3MTFFNEJBODdGNDhCQTQyRDVBRjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDM2QzgzM0M2N0I3MTFFNEJBODdGNDhCQTQyRDVBRjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4uKwjFAAAB+klEQVR42uSXz0tUURTH3xveSiEJFbE2SpCCi8SVorMrBvoBblrXInUlGLSK8C8QpG2EoLgSDMVxUZtKhqxNrZpCUBf+wMGmFv0AR/T1uXAePC7vxx19Mzr1hQ8zd+6de9+559xz3rXf7X1zrXj9hpKVnILm+wWH8AP24CN8gPdwHDZRX0uj0YKO4YPVC0npotZWhr2GI0hBGzyCFtiGtzAPS+CeZMFUAg/9BGwf44Z9njahCx7ACAzBDbgMF2AY6uAFfILBszL0udZ+ZtjnSXnse8jcf+AV3IWr4vUZyEFvtQ0t+EIqK22TPk8DcMdgnQ14CO3wRjZgdrVQbDU11AurtNaX1sIubJzSbfm8VWafJXPOwajhxhflSHTAAeQxdgwi841N1vW3Xe0BwqSPC2vbMWN1fYansAD7hhGlImJaxt8nC3+tBUM9HUtpWZFk9VNKT5iaYELmf6w2C4PdsPLSH7BTuYBJ+wN+y0qILpfZF3Wk+oRyNQnXCeV7GFv0e9Q9ZTKyIzxux0RDJbUONzF2Lamse151RUUknr32r3vUk0pSPUl4NBNxhjMG57vSaoapJDxaE0pZ/4dKTky9rKTUbagBLkEndEsZ6kh4nV11WXDOIDlUQ1vwUt6HFykxJacGjTiSTLovl4SCfFdvUHn4gmE7+p/+CjAAMV2VyGvau7wAAAAASUVORK5CYII=) 0 0 no-repeat;
    background-size: 60%;
    background-position: center;
    margin: 10px 0;
  }



  .train-time {
    font-size: 13px;
    color: #666;
    position: relative;
    top: 41px;
  }

</style>
