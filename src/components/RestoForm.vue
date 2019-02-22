<template>
  <form class="reservation" action="test" method="post">
    <!-- Select: quantité de personnes -->
    <div class="singleForm peopleForm mb">
      <div for="nombre" class="sans medium light mb">Nombre de personnes ?</div>
      <!-- <div class="radio--ctn">
          <input type="radio" name="nombre" id="un" class="radio">
          <span class="checkmark"></span>
        </div>
        <div class="radio--ctn">
          <input type="radio" name="nombre" id="deux" class="radio">
          <span class="checkmark"></span>
        </div>
        <div class="radio--ctn">
          <input type="radio" name="nombre" id="trois" class="radio">
          <span class="checkmark"></span>
      </div>-->
      <div class="numbers sans medium light mb">
        <div class="number">1</div>
        <div class="number">2</div>
        <div class="number">3</div>
        <div class="number">4</div>
      </div>
      <p
        class="sans small"
      >Merci de nous contacter par téléphone pour une réservation de plus de 6 personnes.</p>
    </div>
    <!-- Select: la date de réservation -->
    <div class="singleForm dateForm mb">
      <div for="date" class="sans medium light mb">Date de réservation</div>
      <div class="date-picker sans medium light">
        <div class="date-el day">22</div>
        <div class="date-el month">02</div>
        <div class="date-el year">2019</div>
      </div>
      <!-- <div class="date--ctn">
            <select name="date" id="day">
                <option value="dd">dd</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>

            <select name="date" id="month">
                <option value="mm">mm</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>

            <select name="date" id="year">
                <option value="yy">yyyy</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
            </select>

      </div>-->
    </div>
    <!-- Select: l'heure de réservation -->
    <div class="singleForm timeForm">
      <div for="time" class="sans medium light mb">Heure de réservation</div>
      <div class="time-picker sans medium light">
        <div class="time-el hour">22</div>
        <div class="time-el separator">:</div>
        <div class="time-el minute">02</div>
      </div>
      <!-- <div>
            <select name="time" id="day">
                <option value="hh">hh</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
            </select>
             : 
            <select name="time" id="day">
                <option value="mm">mm</option>
                <option value="00">00</option>
                <option value="30">15</option>
                <option value="30">30</option>
                <option value="30">45</option>
            </select>
      </div>-->
    </div>
  </form>
</template>

<script>
export default {
  name: "RestoForm"
};
</script>

<style lang="scss">
.reservation {
  .peopleForm {
    .numbers {
      display: flex;
      .number {
        width: 48px;
        height: 48px;
        padding: 16px;
        border-radius: 4px;
        background: #eee;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
      }
    }
  }
  .dateForm {
    .date-picker {
      display: flex;
      .date-el {
        height: 48px;
        padding: 16px;
        background: #eee;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .day {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      .day,
      .month {
        margin-right: 1px;
      }
      .year {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
  .timeForm {
    .time-picker {
      display: flex;
      .time-el {
        height: 48px;
        padding: 16px;
        background: #eee;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .hour {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px; 
      }
      .separator {
        padding: 16px 8px;
      }
      .minute {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
}
</style>
