'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">my-study documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-d62d8290fb6854700f3c7b1415a47dc62bbd7ac6dc9f1741fccb028a670b7d751f819dec947073a692f49774d1465746eaf87b2c8ec0593876fb9e636f6568a0"' : 'data-bs-target="#xs-controllers-links-module-AppModule-d62d8290fb6854700f3c7b1415a47dc62bbd7ac6dc9f1741fccb028a670b7d751f819dec947073a692f49774d1465746eaf87b2c8ec0593876fb9e636f6568a0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d62d8290fb6854700f3c7b1415a47dc62bbd7ac6dc9f1741fccb028a670b7d751f819dec947073a692f49774d1465746eaf87b2c8ec0593876fb9e636f6568a0"' :
                                            'id="xs-controllers-links-module-AppModule-d62d8290fb6854700f3c7b1415a47dc62bbd7ac6dc9f1741fccb028a670b7d751f819dec947073a692f49774d1465746eaf87b2c8ec0593876fb9e636f6568a0"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-d62d8290fb6854700f3c7b1415a47dc62bbd7ac6dc9f1741fccb028a670b7d751f819dec947073a692f49774d1465746eaf87b2c8ec0593876fb9e636f6568a0"' : 'data-bs-target="#xs-injectables-links-module-AppModule-d62d8290fb6854700f3c7b1415a47dc62bbd7ac6dc9f1741fccb028a670b7d751f819dec947073a692f49774d1465746eaf87b2c8ec0593876fb9e636f6568a0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d62d8290fb6854700f3c7b1415a47dc62bbd7ac6dc9f1741fccb028a670b7d751f819dec947073a692f49774d1465746eaf87b2c8ec0593876fb9e636f6568a0"' :
                                        'id="xs-injectables-links-module-AppModule-d62d8290fb6854700f3c7b1415a47dc62bbd7ac6dc9f1741fccb028a670b7d751f819dec947073a692f49774d1465746eaf87b2c8ec0593876fb9e636f6568a0"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-b2dcf88e55b7da08356b31290ce21241f47ad5445ccfee1f9252370b00141d522dd035a0721dbab13ebfb2981ceaf2aaa93e2ab53fed89ebefd547c64be66d2d"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-b2dcf88e55b7da08356b31290ce21241f47ad5445ccfee1f9252370b00141d522dd035a0721dbab13ebfb2981ceaf2aaa93e2ab53fed89ebefd547c64be66d2d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-b2dcf88e55b7da08356b31290ce21241f47ad5445ccfee1f9252370b00141d522dd035a0721dbab13ebfb2981ceaf2aaa93e2ab53fed89ebefd547c64be66d2d"' :
                                            'id="xs-controllers-links-module-AuthModule-b2dcf88e55b7da08356b31290ce21241f47ad5445ccfee1f9252370b00141d522dd035a0721dbab13ebfb2981ceaf2aaa93e2ab53fed89ebefd547c64be66d2d"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-b2dcf88e55b7da08356b31290ce21241f47ad5445ccfee1f9252370b00141d522dd035a0721dbab13ebfb2981ceaf2aaa93e2ab53fed89ebefd547c64be66d2d"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-b2dcf88e55b7da08356b31290ce21241f47ad5445ccfee1f9252370b00141d522dd035a0721dbab13ebfb2981ceaf2aaa93e2ab53fed89ebefd547c64be66d2d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-b2dcf88e55b7da08356b31290ce21241f47ad5445ccfee1f9252370b00141d522dd035a0721dbab13ebfb2981ceaf2aaa93e2ab53fed89ebefd547c64be66d2d"' :
                                        'id="xs-injectables-links-module-AuthModule-b2dcf88e55b7da08356b31290ce21241f47ad5445ccfee1f9252370b00141d522dd035a0721dbab13ebfb2981ceaf2aaa93e2ab53fed89ebefd547c64be66d2d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-d449bea47e7a7f61d488402225038d11075115f7324c55c4ac88b4b408f74814cd2f062141f2b5bf83dec14530725b0ba5906d4f01cf8708512502329cdcde6e"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-d449bea47e7a7f61d488402225038d11075115f7324c55c4ac88b4b408f74814cd2f062141f2b5bf83dec14530725b0ba5906d4f01cf8708512502329cdcde6e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-d449bea47e7a7f61d488402225038d11075115f7324c55c4ac88b4b408f74814cd2f062141f2b5bf83dec14530725b0ba5906d4f01cf8708512502329cdcde6e"' :
                                            'id="xs-controllers-links-module-PostsModule-d449bea47e7a7f61d488402225038d11075115f7324c55c4ac88b4b408f74814cd2f062141f2b5bf83dec14530725b0ba5906d4f01cf8708512502329cdcde6e"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-d449bea47e7a7f61d488402225038d11075115f7324c55c4ac88b4b408f74814cd2f062141f2b5bf83dec14530725b0ba5906d4f01cf8708512502329cdcde6e"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-d449bea47e7a7f61d488402225038d11075115f7324c55c4ac88b4b408f74814cd2f062141f2b5bf83dec14530725b0ba5906d4f01cf8708512502329cdcde6e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-d449bea47e7a7f61d488402225038d11075115f7324c55c4ac88b4b408f74814cd2f062141f2b5bf83dec14530725b0ba5906d4f01cf8708512502329cdcde6e"' :
                                        'id="xs-injectables-links-module-PostsModule-d449bea47e7a7f61d488402225038d11075115f7324c55c4ac88b4b408f74814cd2f062141f2b5bf83dec14530725b0ba5906d4f01cf8708512502329cdcde6e"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-298764b98579d4da8bb34067fae8dd6335e927c78fdc02e9ddab27a0e8af896927ec32a007109c1daea81f6ba305cf1ff3defd7ecfb7e3aedb09a57335123104"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-298764b98579d4da8bb34067fae8dd6335e927c78fdc02e9ddab27a0e8af896927ec32a007109c1daea81f6ba305cf1ff3defd7ecfb7e3aedb09a57335123104"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-298764b98579d4da8bb34067fae8dd6335e927c78fdc02e9ddab27a0e8af896927ec32a007109c1daea81f6ba305cf1ff3defd7ecfb7e3aedb09a57335123104"' :
                                            'id="xs-controllers-links-module-UsersModule-298764b98579d4da8bb34067fae8dd6335e927c78fdc02e9ddab27a0e8af896927ec32a007109c1daea81f6ba305cf1ff3defd7ecfb7e3aedb09a57335123104"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-298764b98579d4da8bb34067fae8dd6335e927c78fdc02e9ddab27a0e8af896927ec32a007109c1daea81f6ba305cf1ff3defd7ecfb7e3aedb09a57335123104"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-298764b98579d4da8bb34067fae8dd6335e927c78fdc02e9ddab27a0e8af896927ec32a007109c1daea81f6ba305cf1ff3defd7ecfb7e3aedb09a57335123104"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-298764b98579d4da8bb34067fae8dd6335e927c78fdc02e9ddab27a0e8af896927ec32a007109c1daea81f6ba305cf1ff3defd7ecfb7e3aedb09a57335123104"' :
                                        'id="xs-injectables-links-module-UsersModule-298764b98579d4da8bb34067fae8dd6335e927c78fdc02e9ddab27a0e8af896927ec32a007109c1daea81f6ba305cf1ff3defd7ecfb7e3aedb09a57335123104"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionDto.html" data-type="entity-link" >CreatePostMetaOptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserParamDto.html" data-type="entity-link" >GetUserParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService-1.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});