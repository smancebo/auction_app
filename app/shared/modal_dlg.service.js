import angular from 'angular';

export default function $modal($q, $rootScope, $compile) {

  return {
    open: open,
    close: close
  }

  function close() {
    const dialog = angular.element("#modal_dlg");
    dialog.modal('hide');
  }

  function open(options) {
    let defered = $q.defer();

    if (options) {
      let {
        body,
        title,
        buttons
      } = options;
      buttons = buttons || [{
        type: 'default',
        text: 'Ok'
      }];

      if (options.controller) {
        $rootScope.controller = options.controller;
      }

      //angular.controller('modal-dlg-controller', modalDlgController);

      let btns_str = '';
      if (buttons.length > 0) {
        buttons.forEach((btn, index) => {
          btns_str += `<button type="button" index="${index}" class="btn btn-modal-dlg btn-${btn.type || 'default'}" ng-click="${btn.onclick || ''}">${btn.text || 'Button'}</button>`;
        });
      }
      const dialogTemplate = `<div class="modal fade" id="modal_dlg" ng-controller="controller">
                                <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title">${title}</h5>
                                      <button type="button" style="color:#222;" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      ${body}
                                    </div>
                                    <div class="modal-footer">
                                      ${btns_str}
                                    </div>
                                  </div>
                                </div>
                              </div>`;

      angular.element('body').append($compile(dialogTemplate)($rootScope.$new()));
      const dialog = angular.element("#modal_dlg");
      dialog.find('.btn-modal-dlg').on('click', (event) => {
        let index = $(event.target).attr('index');
        let btn = buttons[parseInt(index)];
        defered.resolve(btn);
      });
      dialog.find('.close').on('click', () => {
        defered.reject();
      });

      dialog.on('hidden.bs.modal', () => {
        dialog.find('.btn-modal-dlg').off('click');
        dialog.find('.close').off('click');
        dialog.off('hidden.bs.modal');
        defered.reject();
        dialog.remove();
      });
      dialog.modal('show');
    }

    return defered.promise;
  }
}

$modal.$inject = ['$q', '$rootScope', '$compile'];
