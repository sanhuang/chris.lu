<?php

class Application_Layouts_Helpers_Css extends Zend_View_Helper_Abstract {

    public function css($staticSource) {

		//$cssPath = '';

		//$this->view->headLink()->appendStylesheet($cssPath, 'screen', false);

		$cssTag = '';

		$cssTag .= '<link rel="stylesheet"  href="'.$staticSource.'/css/chris-2.1.0.css" />';

		return $cssTag;

    }

}