version = sensei-gpt-0.2.0
.PHONY: clean
zip:
	mkdir $(version)
	cp -r src/* $(version)
	zip -r $(version).zip $(version)/*
clean:
	rm -rf $(version) $(version).zip

