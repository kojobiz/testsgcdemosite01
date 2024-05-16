# testsgcdemosite01

・tailwindcss
・plugin
・その他 css,js,sass 導入？# php01testsgcdemosite
その他変更

# 2行目のインデント
  text-indent: -16px !important;
  padding-left: 20px !important;

  <section class="contactform-grid flex flex-col"> 
        <h2>ご用件</h2>
        <div class="required-label">必須</div>
        <div class="flex-row">
            <label class="inline-flex">
                <input type="radio" class="form-radio" name="radio-option" value="option1">
                <span class="ml-2">資料請求を希望</span>
            </label>
            <label class="inline-flex">
                <input type="radio" class="form-radio" name="radio-option" value="option2">
                <span class="ml-2">無料トライアルを希望</span>
            </label>
            <label class="inline-flex">
                <input type="radio" class="form-radio" name="radio-option" value="option3">
                <span class="ml-2">その他</span>
            </label>
        </div>
    </section>

    <button class="btn_service" onclick="setRadioOption('option1')">サービスボタン</button>
    <button class="btn_trial" onclick="setRadioOption('option2')">トライアルボタン</button>

    <script>
        function setRadioOption(optionValue) {
            var radioOption = document.querySelector('input[name="radio-option"][value="' + optionValue + '"]');
            if (radioOption) {
                radioOption.checked = true;
            }
        }
    </script>　
  
