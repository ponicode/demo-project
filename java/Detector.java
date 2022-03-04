package io.ponicode.javademo;

import org.apache.commons.codec.digest.DigestUtils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Detector {
    static public boolean isNeedleInHaystack(String input) {
        if ("3b6e258214f894ab41c9deaaeb38d1fd9aeca9c7".equals(DigestUtils.sha1Hex(input))) {
            return true;
        }
        return false;
    }

    static public boolean isEmailValid(String email) {
        Pattern pattern = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(email);

        return matcher.find();
    }

    static public boolean isDividable(int a, int b) {
        return a % b == 0;
    }
}