<template>
  <b-container fluid class="components-overview">
    <b-v-column class="mt-3">

      <h2>Vue Components</h2>
      <hr>

      <div class="content">
        <p class="mt-3 mb-3">Vue <a :href="components_src" target="_blank">Components</a> provide a way to create reusable pieces of UI that can have their own built in behavior.  Data can be passed down from parent components to child components, and events can be emitted from the child to the parent.</p>

        <p class="mt-4">From the docs:</p>
        <blockquote :cite="components_src" class="quote">
          <p>Since components are reusable Vue instances, they accept the same options as <code>new Vue</code>, such as <code>data</code>, <code>computed</code>, <code>watch</code>, <code>methods</code>, and lifecycle hooks. The only exceptions are a few root-specific options like <code>el</code>.</p>
        </blockquote>

        <h3 class="mt-4">Organizing Components</h3>
        <hr>
        <p>An Application can be made up of multiple components and they can even be nested inside other components.</p>
        <b-img src="../../../assets/nested-components.png" height="300" />
      </div>

    </b-v-column>

    <b-v-column class="mt-5">
      <info-group title="Props and Events" :info="propsAndEvents">
        <template slot="content">
          
        </template>

        <code-container :code="simpleComponent" lang="javascript"></code-container>
          
        <p class="mt-3 mb-2 sa-content">and to render the component:</p>
        <code-container :code="simpleComponentMarkup"></code-container>

        <p class="mt-3 sa-content">Will render the following:</p>
        <div class="sample-blog-posts">
          <blog-post title="My journey with Vue"></blog-post>
          <blog-post title="Blogging with Vue"></blog-post>
          <blog-post title="Why Vue is so fun"></blog-post>
        </div>
        
      </info-group>
      
    </b-v-column>

    <b-v-column class="mt-3">
      <info-group :info="bootstrapVueNotes" title="Highly Reusable Components">

        <p class="mt-2 sa-content">Take the following <a href="https://getbootstrap.com/docs/4.0/components/modal/#modal-components" target="_blank">Bootstrap 4 Modal</a> as an example, you can see there is a lot of boiler plate code:</p>
        <code-container :code="bs4Modal" label="Bootstrap 4 html"></code-container>

        <p class="mt-2 sa-content">compared to the Bootstrap Vue implementation:</p>
        <code-container :code="bvModal" label="Bootstrap Vue's 'b-modal'"></code-container>
        <p class="mt-2 sa-content">which will render:</p>

        <div class="modal-example mb-3">
          <b-button v-b-modal.modal-1>Launch demo modal</b-button>

          <b-modal id="modal-1" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
          </b-modal>
        </div>

        <p class="mt-3 sa-content">That is an awful lot of code in the regular Bootsrap 4 to just display the text <code>"Hello from modal!"</code> in a modal body.  However, one thing is not clear in the <code>b-modal</code> component, and that is how does that component know to palce the <code>&lt;p&gt;</code> tag in the <code>&lt;div class="modal-body"&gt;&lt;/div&gt;</code> tag?  The answer is <code>slots</code>.</p>
      </info-group>
    </b-v-column>

    <b-v-column class="mt-3 mb-3">
      <info-group title="Slots" :info="slotNotes">
        <code-container :code="defaultSlotDef" label="navigation-link template"></code-container>
        <p class="mt-2 sa-content">and then to use the component and inject your own content into the slot:</p>
        <code-container :code="useDefaultSlot" label="parent component" class="mb-2"></code-container>

        <!-- named slots examples -->
        <h5 class="mt-3">Named Slots</h5>
        <hr>
        <info-content :info="namedSlotNotes"></info-content>
        <code-container :code="namedSlots" label="base-layout template"></code-container>
        
        <p class="mt-2 sa-content">and finally, to use the <code>base-layout</code> component with named slots with the <code>v-slot</code> directive inside a <code>&lt;template&gt;</code> tag:</p>
        <code-container :code="useNamedSlots" label="parent component"></code-container>
      </info-group>
    </b-v-column>
    
  </b-container>
  
</template>

<script>
import DemoContent from '../helpers/DemoContent';
import CodeContainer from '../helpers/CodeContainer';
import ButtonCounter from '../Demo/ButtonCounter';
import InfoGroup from '../helpers/InfoGroup';
import InfoContent from '../helpers/InfoContent';
import BlogPost from '../Demo/BlogPost';
import { 
  bs4Modal,
  bvModal,
  componentsTemplate, 
  componentsCode, 
  simpleComponent, 
  simpleComponentMarkup,
  defaultSlotDef,
  useDefaultSlot,
  namedSlots,
  useNamedSlots 
} from '../../data/snippets';
import { 
  propsAndEvents, 
  bootstrapVueNotes,
  slotNotes,
  namedSlotNotes
} from '../../data/lecture';

import Vue from 'vue';

export default {
  name: 'components',

  components: {
    DemoContent,
    ButtonCounter,
    CodeContainer,
    InfoGroup,
    BlogPost,
    InfoContent
  },

  data(){
    return {
      components_src: 'https://vuejs.org/v2/guide/components.html',
      propsAndEvents,
      simpleComponent,
      simpleComponentMarkup,
      bootstrapVueNotes,
      bs4Modal,
      bvModal,
      slotNotes,
      defaultSlotDef,
      useDefaultSlot,
      namedSlotNotes,
      namedSlots,
      useNamedSlots
    }
  },

}
</script>

<style>
.quote p {
  padding: 1rem;
  background-color: #F8F8F8;
  color: #787878;
}
</style>


