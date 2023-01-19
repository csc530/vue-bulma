import BulmaBreadcrumb from './vbComponents/components/BulmaBreadcrumb.vue';
import BulmaCard from "./vbComponents/components/BulmaCard.vue";
import BulmaDropdown from './vbComponents/components/BulmaDropdown.vue'
import BulmaMenu from './vbComponents/components/BulmaMenu.vue'
import BulmaMessage from './vbComponents/components/BulmaMessage.vue'
import BulmaModal from "./vbComponents/components/BulmaModal.vue";
import BulmaModalCard from "./vbComponents/components/BulmaModalCard.vue";
import BulmaNavbar from "./vbComponents/components/navbar/BulmaNavbar.vue";
import BulmaBlock from './vbComponents/elements/BulmaBlock.vue';
import BulmaBox from './vbComponents/elements/BulmaBox.vue';
import BulmaButton from "./vbComponents/elements/BulmaButton.vue";
import BulmaDelete from "./vbComponents/elements/BulmaDelete.vue";
import BulmaHeading from './vbComponents/elements/BulmaHeading.vue';
import BulmaIcon from './vbComponents/elements/BulmaIcon.vue';
import BulmaImage from './vbComponents/elements/BulmaImage.vue';
import BulmaNotification from './vbComponents/elements/BulmaNotification.vue'
import BulmaProgressbar from "./vbComponents/elements/BulmaProgressbar.vue";
import BulmaTable from "./vbComponents/elements/BulmaTable.vue";
import BulmaFileInput from "./vbComponents/form/BulmaFileInput.vue";
import BulmaInput from "./vbComponents/form/BulmaInput.vue";
import BulmaSelect from "./vbComponents/form/BulmaSelect.vue";
import BulmaTextArea from "./vbComponents/form/BulmaTextArea.vue";
import BulmaFormControl from "./vbComponents/form/groups/BulmaFormControl.vue";
import BulmaFormControlGroup from "./vbComponents/form/groups/BulmaFormControlGroup.vue";
import BulmaFormField from "./vbComponents/form/groups/BulmaFormField.vue";
import BulmaButtonGroup from "./vbComponents/layouts/BulmaButtonGroup.vue";

const vuebulma = {
	install(Vue: any) {
		Vue.component('vbHeading', BulmaHeading);
		Vue.component('vbIcon', BulmaIcon);
		Vue.component('vbImage', BulmaImage);
		Vue.component('vbBreadcrumb', BulmaBreadcrumb);
		Vue.component('vbMessage', BulmaMessage);
		Vue.component('vbBox', BulmaBox);
		Vue.component('vbBlock', BulmaBlock);
		Vue.component('vbDropdown', BulmaDropdown);
		Vue.component('vbNavBar', BulmaNavbar);
		Vue.component('vbMenu', BulmaMenu);
		Vue.component('vbButton', BulmaButton);
		Vue.component('vbButtonGroup', BulmaButtonGroup);
		Vue.component('vbFileInput', BulmaFileInput);
		Vue.component('vbInput', BulmaInput);
		Vue.component('vbSelect', BulmaSelect);
		Vue.component('vbFormControl', BulmaFormControl);
		Vue.component('vbFormField', BulmaFormField);
		Vue.component('vbFormControlGroup', BulmaFormControlGroup);
		Vue.component('vbTextArea', BulmaTextArea);
		Vue.component('vbCard', BulmaCard)
		Vue.component('vbModal', BulmaModal);
		Vue.component('vbModalCard', BulmaModalCard);

	}
};

export {
	BulmaHeading as vbHeading,
	BulmaIcon as vbIcon,
	BulmaImage as vbImage,
	BulmaBreadcrumb as vbBreadcrumb,
	BulmaBox as vbBox,
	BulmaBlock as vbBlock,
	BulmaDropdown as vbDropdown,
	BulmaTextArea as vbTextArea,
	BulmaMessage as vbMessage,
	BulmaMenu as vbMenu,
	BulmaNavbar as vbNavbar,
	BulmaButton as vbButton,
	BulmaButtonGroup as vbButtonGroup,
	BulmaFileInput as vbFileInput,
	BulmaInput as vbInput,
	BulmaSelect as vbSelect,
	BulmaFormControl as vbFormControl,
	BulmaFormField as vbFormField,
	BulmaFormControlGroup as vbFormControlGroup,
	BulmaDelete as vbDelete,
	BulmaNotification as vbNotification,
	BulmaTable as vbTable,
	BulmaProgressbar as vbProgressbar,
	BulmaCard as vbCard,
	vuebulma
};