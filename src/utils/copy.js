export function copyTextToClipboard(input) {
  const target = document.body;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(input).then(
      function () {
        console.log("Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Could not copy text: ", err);
        copyTextWithoutWebAPI(input, target);
      }
    );
    return true;
  } else {
    copyTextWithoutWebAPI(input, target);
  }
}

function copyTextWithoutWebAPI(input, target) {
  const element = document.createElement("textarea");
  const previouslyFocusedElement = document.activeElement;

  element.value = input;

  element.setAttribute("readonly", "");

  element.style.contain = "strict";
  element.style.position = "absolute";
  element.style.left = "-9999px";
  element.style.fontSize = "12pt";

  const selection = document.getSelection();
  let originalRange;
  if (selection && selection.rangeCount > 0) {
    originalRange = selection.getRangeAt(0);
  }

  target.append(element);
  element.select();

  element.selectionStart = 0;
  element.selectionEnd = input.length;

  let isSuccess = false;
  try {
    isSuccess = document.execCommand("copy");
  } catch (e) {
    throw new Error(e);
  }

  element.remove();

  if (originalRange && selection) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }

  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
  return isSuccess;
}
